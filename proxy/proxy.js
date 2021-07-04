var Access = /** @class */ (function () {
    function Access() {
    }
    Access.prototype.open = function () {
        console.log('Доступ открыт');
    };
    Access.prototype.close = function () {
        console.log('Доступ закрыт');
    };
    return Access;
}());
;
var SecuritySystem = /** @class */ (function () {
    function SecuritySystem(login) {
        this.login = login;
    }
    SecuritySystem.prototype.open = function (password) {
        if (this.authenticate(password)) {
            this.login.open();
        }
        else {
            this.login.close();
        }
    };
    SecuritySystem.prototype.authenticate = function (password) {
        return password === 'password';
    };
    return SecuritySystem;
}());
;
var a = new SecuritySystem(new Access());
console.log(a.open('password'));
console.log(a.open('pasword'));
