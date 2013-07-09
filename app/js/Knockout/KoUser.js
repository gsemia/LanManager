define(["require", "exports", "Libraries/knockout", "Libraries/linq", "TS", "Models/User"], function(require, exports, __ko__, __Enumerable__, __TS__, __User__) {
    var ko = __ko__;
    var Enumerable = __Enumerable__;
    var TS = __TS__;
    
    var User = __User__;

    var Enumerable = Enumerable;
    var ko = ko;

    

    var KoUser = (function () {
        function KoUser() {
            var _this = this;
            this.users = ko.observableArray();
            this.currentUser = ko.observable();
            this.userCreationFormVisible = ko.observable(false);
            this.formUser = new User();
            this.formIsUploading = ko.observable(false);
            this.isAdmin = ko.computed(function () {
                return _this.currentUser() && _this.currentUser().isAdmin();
            });
            this.formUserValidation = ko.computed(function () {
                return _this.formUser.validate();
            });
            this.userAddable = ko.computed(function () {
                return _this.isAdmin() && !_this.userCreationFormVisible();
            });

            TS.app.urlManager.get("user/current", function (data) {
                _this.currentUser(new User(data));
            });
            TS.app.urlManager.get("user/get", function (data) {
                _this.users(ko.utils.arrayMap(data, function (user) {
                    return new User(user);
                }));
                _this.formUser.userList = _this.users;
            });

            // KnockoutBinding Workaround
            this.showEdit = this.showEdit.bind(this);
        }
        KoUser.prototype.addUser = function () {
            this.userCreationFormVisible(true);
        };

        KoUser.prototype.commitUser = function () {
            this.formIsUploading(true);
            this.formUser.save(this.userSaved.bind(this));
        };

        KoUser.prototype.userSaved = function (success, message) {
            this.formIsUploading(false);
            this.userCreationFormVisible(false);
            if (success) {
                this.users.push(this.formUser);
                this.formUser = new User();
                this.formUser.username("");
            } else {
                alert(message);
            }
        };

        KoUser.prototype.showEdit = function (user) {
            this.users().forEach(function (value) {
                if (value.id() == user.id()) {
                    value.editingMode(true);
                } else {
                    value.editingMode(false);
                }
            });
        };
        return KoUser;
    })();
    return KoUser;
});
//@ sourceMappingURL=KoUser.js.map
