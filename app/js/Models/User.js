var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
define(["require", "exports", "Libraries/knockout", "Models/Model"], function(require, exports, __ko__, __Model__) {
    var ko = __ko__;
    
    
    
    var Model = __Model__;

    var ko = ko;

    

    var User = (function (_super) {
        __extends(User, _super);
        function User(data) {
            _super.call(this);
            this.id = ko.observable();
            this.username = ko.observable();
            this.email = ko.observable();
            this.name = ko.observable();
            this.password = ko.observable();
            this.level = ko.observable();
            this.invitations = ko.observableArray();
            this.ratings = ko.observableArray();
            data = data || {};
            this.id(data.id);
            this.username(data.username);
            this.email(data.email);
            this.name(data.name);
            this.password(data.password);
            this.level(data.level);
        }
        return User;
    })(Model);
    return User;
});
//@ sourceMappingURL=User.js.map
