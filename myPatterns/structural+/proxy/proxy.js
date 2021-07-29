var Access = /** @class */ (function () {
    function Access() {
    }
    Access.prototype.open = function () {
        return 'Доступ открыт';
    };
    Access.prototype.close = function () {
        return 'Доступ закрыт';
    };
    return Access;
}());
;
var SecuritySystem = /** @class */ (function () {
    function SecuritySystem(access) {
        this.access = access;
    }
    SecuritySystem.prototype.open = function (password) {
        if (this.authenticate(password)) {
            console.log(this.access.open());
        }
        else {
            console.log(this.access.close());
        }
    };
    SecuritySystem.prototype.authenticate = function (password) {
        return password === 'password';
    };
    return SecuritySystem;
}());
;
var a = new SecuritySystem(new Access());
a.open('password');
a.open('pasword');
//# sourceMappingURL=proxy.js.map