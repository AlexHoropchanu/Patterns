// структурный паттерн проектирования, который разделяет один
// или несколько классов на две отдельные иерархии — абстракцию
// и реализацию, позволяя изменять их независимо друг от друга.
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
var Telephone = /** @class */ (function () {
    function Telephone(mobilePhone) {
        this.mobilePhone = mobilePhone;
    }
    Telephone.prototype.call = function () {
        return "" + this.mobilePhone.call();
    };
    return Telephone;
}());
var Intercom = /** @class */ (function (_super) {
    __extends(Intercom, _super);
    function Intercom() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Intercom.prototype.call = function () {
        return this.mobilePhone.call() + " \u0434\u043E\u043C\u043E\u0444\u043E\u043D";
    };
    return Intercom;
}(Telephone));
var Samsung = /** @class */ (function () {
    function Samsung() {
    }
    Samsung.prototype.call = function () {
        return 'Звонит Samsung ';
    };
    return Samsung;
}());
var Iphone = /** @class */ (function () {
    function Iphone() {
    }
    Iphone.prototype.call = function () {
        return 'Звонит Iphone';
    };
    return Iphone;
}());
//test
var samsung = new Samsung();
var iphone = new Iphone();
var device1 = new Telephone(samsung);
var device2 = new Telephone(iphone);
var intercom1 = new Intercom(samsung);
var intercom2 = new Intercom(iphone);
console.log(device1.call());
console.log(device2.call());
console.log(intercom1.call());
console.log(intercom2.call());
