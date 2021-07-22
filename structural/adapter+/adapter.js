// структурный паттерн проектирования, который позволяет 
// объектам с несовместимыми интерфейсами работать вместе
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
var Samsung = /** @class */ (function () {
    function Samsung() {
    }
    Samsung.prototype.typeC = function () {
        return 'Samsung use typeC';
    };
    return Samsung;
}());
var Iphone = /** @class */ (function () {
    function Iphone() {
    }
    Iphone.prototype.lightning = function () {
        return 'Iphone use Lightning';
    };
    return Iphone;
}());
var Adapter = /** @class */ (function (_super) {
    __extends(Adapter, _super);
    function Adapter(device) {
        var _this = _super.call(this) || this;
        _this.device = device;
        return _this;
    }
    Adapter.prototype.typeC = function () {
        var result = this.device.lightning();
        return result + " \u0447\u0435\u0440\u0435\u0437 \u0430\u0434\u043F\u0442\u0435\u0440 \u0432\u043D\u0443\u0442\u0440\u0438 typeC";
    };
    return Adapter;
}(Samsung));
//test
function charge(device) {
    console.log(device.typeC());
}
var iphone = new Iphone();
var samsung = new Samsung();
var adapter = new Adapter(iphone);
charge(samsung);
charge(adapter);
