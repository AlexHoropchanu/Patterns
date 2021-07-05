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
var AbstractCarFactory = /** @class */ (function () {
    function AbstractCarFactory() {
    }
    AbstractCarFactory.prototype.createPremiumCar = function (product) {
        return new AbstractPremiumCar(product);
    };
    AbstractCarFactory.prototype.createSportCar = function (product) {
        return new AbstractSportCar(product);
    };
    return AbstractCarFactory;
}());
var AbstractPremiumCar = /** @class */ (function () {
    function AbstractPremiumCar(model, type) {
        if (type === void 0) { type = "Premium car"; }
        this.model = model;
        this.type = type;
    }
    return AbstractPremiumCar;
}());
var AbstractSportCar = /** @class */ (function () {
    function AbstractSportCar(model, type) {
        if (type === void 0) { type = "Sport car"; }
        this.model = model;
        this.type = type;
    }
    return AbstractSportCar;
}());
// Concrete #1
var ToyotaFactory = /** @class */ (function (_super) {
    __extends(ToyotaFactory, _super);
    function ToyotaFactory() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ToyotaFactory.prototype.createPremiumCar = function (model) {
        return new ToyotaPremiumCar(model);
    };
    ToyotaFactory.prototype.createSportCar = function (model) {
        return new ToyotaSportCar(model);
    };
    return ToyotaFactory;
}(AbstractCarFactory));
var ToyotaPremiumCar = /** @class */ (function (_super) {
    __extends(ToyotaPremiumCar, _super);
    function ToyotaPremiumCar(model) {
        return _super.call(this, model) || this;
    }
    return ToyotaPremiumCar;
}(AbstractPremiumCar));
var ToyotaSportCar = /** @class */ (function (_super) {
    __extends(ToyotaSportCar, _super);
    function ToyotaSportCar(model) {
        return _super.call(this, model) || this;
    }
    return ToyotaSportCar;
}(AbstractSportCar));
// Concrete #2
var BmwFactory = /** @class */ (function (_super) {
    __extends(BmwFactory, _super);
    function BmwFactory() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    BmwFactory.prototype.createPremiumCar = function (model) {
        return new BmwPremiumCar(model);
    };
    BmwFactory.prototype.createSportCar = function (model) {
        return new BmwSportCar(model);
    };
    return BmwFactory;
}(AbstractCarFactory));
var BmwPremiumCar = /** @class */ (function (_super) {
    __extends(BmwPremiumCar, _super);
    function BmwPremiumCar(model) {
        return _super.call(this, model) || this;
    }
    return BmwPremiumCar;
}(AbstractPremiumCar));
var BmwSportCar = /** @class */ (function (_super) {
    __extends(BmwSportCar, _super);
    function BmwSportCar(model) {
        return _super.call(this, model) || this;
    }
    return BmwSportCar;
}(AbstractSportCar));
var a = new BmwFactory();
console.log(a.createPremiumCar("x7"));
var b = new ToyotaFactory();
console.log(b.createSportCar("corola"));
