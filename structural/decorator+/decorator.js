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
var Cofee = /** @class */ (function () {
    function Cofee() {
    }
    Cofee.prototype.getDescription = function () {
        return "Cofee!";
    };
    return Cofee;
}());
var Decorator = /** @class */ (function () {
    function Decorator(cofee) {
        this.cofee = cofee;
    }
    Decorator.prototype.getDescription = function () {
        return this.cofee.getDescription();
    };
    return Decorator;
}());
var Americano = /** @class */ (function (_super) {
    __extends(Americano, _super);
    function Americano() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Americano.prototype.getDescription = function () {
        return _super.prototype.getDescription.call(this) + " + milk";
    };
    return Americano;
}(Decorator));
var Capucinno = /** @class */ (function (_super) {
    __extends(Capucinno, _super);
    function Capucinno() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Capucinno.prototype.getDescription = function () {
        return _super.prototype.getDescription.call(this) + " + strong Cofee";
    };
    return Capucinno;
}(Decorator));
//test
var cofee = new Cofee();
console.log(cofee.getDescription());
var americano = new Americano(cofee);
console.log(americano.getDescription());
var capucinno = new Capucinno(americano);
console.log(capucinno.getDescription());
