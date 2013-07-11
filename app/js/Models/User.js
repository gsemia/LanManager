var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
define(["require", "exports", "Libraries/knockout", "Libraries/knockoutValidation", "TS", "Libraries/linq", "Models/Model"], function(require, exports, __ko__, __kov__, __TS__, __Enumerable__, __Model__) {
    var ko = __ko__;
    var kov = __kov__;
    
    var TS = __TS__;
    var Enumerable = __Enumerable__;
    
    
    
    var Model = __Model__;

    var Enumerable = Enumerable;
    var ko = ko;

    

    var User = (function (_super) {
        __extends(User, _super);
        function User(data) {
            var _this = this;
            _super.call(this);
            this.id = ko.observable();
            this.username = ko.observable();
            this.email = ko.observable();
            this.name = ko.observable();
            this.level = ko.observable();
            this.userList = ko.observableArray();
            this.invitations = ko.observableArray();
            this.ratings = ko.observableArray();
            this.levels = [
                { level: 0, title: "Boon" },
                { level: 1, title: "Pro" },
                { level: 9, title: "Godmode" }
            ];
            data = data || {};
            if (data instanceof User) {
                this.reference = data;
                data = {
                    id: data.id(),
                    username: data.username(),
                    email: data.email(),
                    name: data.name(),
                    level: data.level()
                };
            }

            this.id(data.id || -1);
            this.username(data.username || "");
            this.email(data.email || "");
            this.name(data.name || "");
            this.level(data.level || 0);

            this.applyValidationRules();

            this.displayLevel = ko.computed(function () {
                return Enumerable.from(_this.levels).singleOrDefault(function (level) {
                    return level.level == _this.level();
                }, { level: -1, title: "" }).title;
            });
        }
        User.prototype.isAdmin = function () {
            return this.level() == 9;
        };

        User.prototype.validate = function () {
            return this.validator.isValid();
        };

        User.prototype.save = function (callback) {
            var _this = this;
            callback = callback || function (success, message) {
            };

            if (TS.app.util.isNumeric(this.id()) && this.id() > 0) {
                TS.app.urlManager.post("user/update", {
                    "User": {
                        id: this.id(),
                        username: this.username(),
                        name: this.name(),
                        email: this.email(),
                        level: this.level()
                    }
                }, function (data) {
                    if (data.success)
                        _this.updateReference();
                    callback(data.success, data.message || "", false);
                });
            } else {
                TS.app.urlManager.post("user/create", {
                    "User": {
                        username: this.username(),
                        name: this.name(),
                        email: this.email(),
                        level: this.level()
                    }
                }, function (data) {
                    if (data.success) {
                        var id = data.id || -1;
                        if (TS.app.util.isNumeric(id) && id > 0) {
                            _this.id(id);
                        }
                    }
                    callback(data.success, data.message || "", true);
                });
            }
        };

        User.prototype.update = function (data) {
            this.username(data.username);
            this.name(data.name);
            this.email(data.email);
            this.level(data.level);
            this.applyValidationRules();
        };

        User.prototype.applyValidationRules = function () {
            var _this = this;
            var collection = function () {
                return _this.userList;
            };

            this.username.extend({ validatable: false });
            this.username.extend({
                required: true,
                unique: {
                    collection: collection,
                    valueAccessor: function (user) {
                        return user.username();
                    },
                    externalValue: this.username()
                }
            });

            this.email.extend({ validatable: false });
            this.email.extend({
                required: true,
                email: true,
                unique: {
                    collection: collection,
                    valueAccessor: function (user) {
                        return user.email();
                    },
                    externalValue: this.email()
                }
            });

            this.validator = ko.validatedObservable({
                username: this.username,
                email: this.email
            });
        };

        User.prototype.updateReference = function () {
            if (this.reference) {
                this.reference.username(this.username());
                this.reference.name(this.name());
                this.reference.email(this.email());
                this.reference.level(this.level());
            }
        };
        return User;
    })(Model);
    return User;
});
//@ sourceMappingURL=User.js.map
