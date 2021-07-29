var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Creator = /** @class */ (function () {
    function Creator() {
    }
    Creator.prototype.someOperation = function () {
        var product = this.factoryMethod();
        return "\u041E\u0431\u044C\u0435\u043A\u0442 \u0432\u044B\u043F\u043E\u043B\u043D\u044F\u0435\u0442 \u0444\u0443\u043D\u043A\u0446\u044E " + product.operation();
    };
    return Creator;
}());
var BoatCreator = /** @class */ (function (_super) {
    __extends(BoatCreator, _super);
    function BoatCreator() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    BoatCreator.prototype.factoryMethod = function () {
        return new Boat();
    };
    return BoatCreator;
}(Creator));
var CarCreator = /** @class */ (function (_super) {
    __extends(CarCreator, _super);
    function CarCreator() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CarCreator.prototype.factoryMethod = function () {
        return new Car();
    };
    return CarCreator;
}(Creator));
var Boat = /** @class */ (function () {
    function Boat() {
    }
    Boat.prototype.operation = function () {
        return 'Плыть';
    };
    return Boat;
}());
var Car = /** @class */ (function () {
    function Car() {
    }
    Car.prototype.operation = function () {
        return 'Ехать';
    };
    return Car;
}());
function clientCode(creator) {
    console.log(creator.someOperation());
}
clientCode(new BoatCreator());
clientCode(new CarCreator());
//# sourceMappingURL=factory.js.map