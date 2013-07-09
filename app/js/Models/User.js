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
            this.password = ko.observable();
            this.level = ko.observable();
            this.userList = ko.observableArray();
            this.editingMode = ko.observable();
            this.invitations = ko.observableArray();
            this.ratings = ko.observableArray();
            this.levels = [
                { level: 0, title: "Boon" },
                { level: 1, title: "Pro" },
                { level: 9, title: "Godmode" }
            ];
            data = data || {};
            var collection = function () {
                return _this.userList;
            };
            this.id(data.id || -1);
            this.username(data.username || "");
            this.username.extend({
                required: true,
                unique: {
                    collection: collection,
                    valueAccessor: function (user) {
                        return user.username();
                    },
                    externalValue: true
                }
            });
            this.email(data.email || "");
            this.email.extend({
                required: true,
                email: true,
                unique: {
                    collection: collection,
                    valueAccessor: function (user) {
                        return user.email();
                    },
                    externalValue: true
                }
            });
            this.name(data.name || "");
            this.password(data.password || "");
            this.level(data.level || 0);

            this.validator = ko.validatedObservable({
                username: this.username,
                email: this.email
            });

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
            callback = callback || function (success, message) {
            };
            TS.app.urlManager.post("user/create", {
                "User": {
                    username: this.username(),
                    name: this.name(),
                    email: this.email(),
                    level: this.level()
                }
            }, function (data) {
                callback(data.success, data.message || "", data.id || -1);
            });
        };

        User.clone = function (user) {
            return new User({
                id: user.id(),
                username: user.username(),
                name: user.name(),
                email: user.email(),
                level: user.level()
            });
        };
        return User;
    })(Model);
    return User;
});
//@ sourceMappingURL=User.js.map
