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
var Car = /** @class */ (function () {
    function Car(speed, model) {
        this.speed = speed;
        this.model = model;
    }
    Car.prototype.clone = function () {
        return new Car(this.speed, this.model);
    };
    return Car;
}());
var ColorCar = /** @class */ (function (_super) {
    __extends(ColorCar, _super);
    function ColorCar(speed, model, color) {
        var _this = _super.call(this, speed, model) || this;
        _this.color = color;
        return _this;
    }
    ColorCar.prototype.clone = function () {
        return new ColorCar(this.speed, this.model, this.color);
    };
    return ColorCar;
}(Car));
var car1 = new Car(100, 'bmw');
var car2 = car1.clone();
console.log(car1, car2);
console.log(car1 == car2);
var colorCar1 = new ColorCar(100, 'bmw', 'red');
var colorCar2 = colorCar1.clone();
console.log(colorCar1, colorCar2);
console.log(colorCar1 === colorCar2);
//# sourceMappingURL=prototype.js.map