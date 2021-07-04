var Bmw = /** @class */ (function () {
    function Bmw(model, cost) {
        if (cost === void 0) { cost = 50; }
        this.model = model;
        this.cost = cost;
    }
    return Bmw;
}());
var Toyota = /** @class */ (function () {
    function Toyota(model, cost) {
        if (cost === void 0) { cost = 100; }
        this.model = model;
        this.cost = cost;
    }
    return Toyota;
}());
var Mercedess = /** @class */ (function () {
    function Mercedess(model, cost) {
        if (cost === void 0) { cost = 150; }
        this.model = model;
        this.cost = cost;
    }
    return Mercedess;
}());
var CarFactory = /** @class */ (function () {
    function CarFactory() {
    }
    CarFactory.prototype.create = function (model, type) {
        var carClasses = CarFactory.list[type];
        var car = new carClasses(model);
        car.type = type;
        return car;
    };
    CarFactory.list = {
        bmw: Bmw,
        toyota: Toyota,
        mercedess: Mercedess
    };
    return CarFactory;
}());
var factory = new CarFactory();
var bmw = console.log(factory.create("X5", "bmw"));
var toyota = console.log(factory.create("Camry", "toyota"));
var mercedess = console.log(factory.create("S600", "mercedess"));
