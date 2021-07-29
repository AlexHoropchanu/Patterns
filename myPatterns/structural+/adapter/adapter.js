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
var Monitor = /** @class */ (function () {
    function Monitor() {
    }
    Monitor.prototype.hdmi = function () {
        return 'use HDMI';
    };
    return Monitor;
}());
var Tv = /** @class */ (function () {
    function Tv() {
    }
    Tv.prototype.vga = function () {
        return 'use VGA';
    };
    return Tv;
}());
var Adapter = /** @class */ (function (_super) {
    __extends(Adapter, _super);
    function Adapter(tv) {
        var _this = _super.call(this) || this;
        _this.tv = tv;
        return _this;
    }
    Adapter.prototype.hdmi = function () {
        var result = this.tv.vga();
        return result;
    };
    return Adapter;
}(Monitor));
var monitor = new Monitor;
var tv = new Tv;
console.log(monitor.hdmi(), tv.vga());
var adapter = new Adapter(tv);
console.log(adapter.hdmi());
//# sourceMappingURL=adapter.js.map