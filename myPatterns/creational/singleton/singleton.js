var Singleton = /** @class */ (function () {
    function Singleton() {
    }
    Singleton.getSingleton = function () {
        if (!Singleton.singleton) {
            Singleton.singleton = new Singleton();
        }
        return Singleton.singleton;
    };
    return Singleton;
}());
var singleton1 = Singleton.getSingleton();
var singleton2 = Singleton.getSingleton();
console.log(singleton1 === singleton2);
//# sourceMappingURL=singleton.js.map