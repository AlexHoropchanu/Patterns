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
var CarCreator = /** @class */ (function () {
    function CarCreator() {
    }
    return CarCreator;
}());
var BmwCreator = /** @class */ (function (_super) {
    __extends(BmwCreator, _super);
    function BmwCreator() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    BmwCreator.prototype.carFactoryMethod = function () {
        return new Bmw();
    };
    return BmwCreator;
}(CarCreator));
var ToyotaCreator = /** @class */ (function (_super) {
    __extends(ToyotaCreator, _super);
    function ToyotaCreator() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ToyotaCreator.prototype.carFactoryMethod = function () {
        return new Toyota();
    };
    return ToyotaCreator;
}(CarCreator));
var Bmw = /** @class */ (function () {
    function Bmw() {
    }
    Bmw.prototype.start = function () {
        return 'Ваша Bmw запустилась';
    };
    return Bmw;
}());
var Toyota = /** @class */ (function () {
    function Toyota() {
    }
    Toyota.prototype.start = function () {
        return 'Ваша Toyota запустилась';
    };
    return Toyota;
}());
function client(creator) {
    console.log(creator.carFactoryMethod());
}
console.log('Начинаем изготавливать Bmw');
client(new BmwCreator());
console.log('Начинаем изготавливать Toyota');
client(new ToyotaCreator());
