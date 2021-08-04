var User = /** @class */ (function () {
    function User(name, password) {
        this.name = name;
        this.password = password;
        this.name = name;
        this.password = password;
    }
    User.prototype.getPage = function () {
        return "Ваша страница открыта";
    };
    User.prototype.leavePage = function () {
        console.log("Выход со страници");
    };
    return User;
}());
var ContentSecurity = /** @class */ (function () {
    function ContentSecurity(user) {
        this.user = user;
        this.user = user;
    }
    ContentSecurity.prototype.getPage = function () {
        if (this.user.password === "password") {
            this.user.getPage();
        }
        else {
            return "error";
        }
    };
    ContentSecurity.prototype.leavePage = function () {
        this.user.leavePage();
    };
    return ContentSecurity;
}());
var alex = new ContentSecurity(new User("Alex", "password"));
var max = new ContentSecurity(new User("Max", "pasword"));
alex.getPage();
max.getPage();
//# sourceMappingURL=proxy.js.map