define(["require", "exports", "Libraries/knockout", "Libraries/bootstrap", "Libraries/linq", "TS", "Base/Thread", "Models/User"], function(require, exports, __ko__, __$__, __Enumerable__, __TS__, __Thread__, __User__) {
    var ko = __ko__;
    var $ = __$__;
    var Enumerable = __Enumerable__;
    var TS = __TS__;
    
    var Thread = __Thread__;
    var User = __User__;

    var Enumerable = Enumerable;
    var ko = ko;
    var $ = $;

    

    var KoUser = (function () {
        function KoUser() {
            var _this = this;
            this.users = ko.observableArray();
            this.currentUser = ko.observable();
            this.formUser = ko.observable(new User());
            this.formIsUploading = ko.observable(false);
            this.isAdmin = ko.computed(function () {
                return _this.currentUser() && _this.currentUser().isAdmin();
            });
            this.formUserValidation = ko.computed(function () {
                return _this.formUser().validate();
            });

            TS.app.urlManager.get("user/current", function (data) {
                _this.currentUser(new User(data));
            });

            this.usersUpdateThread = new Thread(this.getUsers.bind(this), 10000);
            this.usersUpdateThread.start();

            $("#formUser").on("show", function () {
                _this.usersUpdateThread.stop();
            }).on("hidden", function () {
                _this.usersUpdateThread.start();
            });

            // KnockoutBinding Workaround
            this.editUser = this.editUser.bind(this);
        }
        KoUser.prototype.getUsers = function () {
            var _this = this;
            TS.app.urlManager.get("user/get", function (data) {
                _this.users(ko.utils.arrayMap(data, function (user) {
                    try  {
                        var updateUser = Enumerable.from(_this.users()).single(function (u) {
                            return user.id == u.id();
                        });
                        updateUser.update(user);
                        return updateUser;
                    } catch (e) {
                        return new User(user);
                    }
                }));
                _this.formUser().userList = _this.users;
            });
        };

        KoUser.prototype.editUser = function (user) {
            if (this.isAdmin()) {
                var ref = new User(user);
                ref.userList = this.users;
                this.formUser(ref);
                $("#formUser").modal("show");
            }
        };

        KoUser.prototype.commitUser = function () {
            var _this = this;
            this.formIsUploading(true);
            this.formUser().save(function (success, message, isNew) {
                _this.formIsUploading(false);
                if (success) {
                    $("#formUser").modal("hide");
                    if (isNew) {
                        _this.users.push(_this.formUser());
                    }

                    _this.formUser(new User());
                    _this.formUser().userList = _this.users;
                } else {
                    alert(message);
                }
            });
        };
        return KoUser;
    })();
    return KoUser;
});
//@ sourceMappingURL=KoUser.js.map
