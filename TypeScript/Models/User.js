var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
define(["require", "exports", "Libraries/knockout", "Libraries/linq", "Models/Model"], function(require, exports, __ko__, __Enumerable__, __Model__) {
    var ko = __ko__;
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
            this.errorMessages = ko.observableArray();
            this.editingMode = ko.observable();
            this.usernameEntered = ko.observable(false);
            this.nameEntered = ko.observable(false);
            this.emailEntered = ko.observable(false);
            this.invitations = ko.observableArray();
            this.ratings = ko.observableArray();
            this.levels = [
                { level: 0, title: "Boon" },
                { level: 1, title: "Pro" },
                { level: 9, title: "Godmode" }
            ];
            data = data || {};
            this.id(data.id || -1);
            this.username(data.username || "");
            this.username.subscribe(function (newValue) {
                _this.usernameEntered(true);
                if (newValue != newValue.trim()) {
                    _this.username(newValue.trim());
                }
            });
            this.email(data.email || "");
            this.email.subscribe(function (newValue) {
                _this.emailEntered(true);
                if (newValue != newValue.trim()) {
                    _this.email(newValue.trim());
                }
            });
            this.name(data.name || "");
            this.name.subscribe(function (newValue) {
                _this.nameEntered(true);
                if (newValue != newValue.trim()) {
                    _this.name(newValue.trim());
                }
            });
            this.password(data.password || "");
            this.level(data.level || 0);

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
            var _this = this;
            var valid = true;
            var messages = [];
            if (this.username().length == 0) {
                valid = false;
                if (this.usernameEntered())
                    messages.push("Username must not be empty");
            }
            if (this.email().length == 0) {
                valid = false;
                if (this.emailEntered())
                    messages.push("Email address must not be empty");
            }
            if (this.email().match(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/ig) != null) {
                valid = false;
                if (this.nameEntered())
                    messages.push("A valid email address must be entered");
            }
            if (Enumerable.from(this.userList()).where(function (user) {
                return user.username() == _this.username() || user.email() == _this.email();
            }).count() > 0) {
                valid = false;
                if (this.usernameEntered() && this.emailEntered())
                    messages.push("Username and email address must be unique");
            }
            this.errorMessages(messages);
            return valid;
        };
        return User;
    })(Model);
    return User;
});
//@ sourceMappingURL=User.js.map
