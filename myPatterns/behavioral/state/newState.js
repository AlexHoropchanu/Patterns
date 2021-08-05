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
var Laptop = /** @class */ (function () {
    function Laptop() {
        this.state = new LockedState(this);
    }
    Laptop.prototype.changeState = function (state) {
        this.state = state;
    };
    Laptop.prototype.charge = function () {
        this.state.charge();
    };
    Laptop.prototype.turnOn = function () {
        this.state.turnOn();
    };
    Laptop.prototype.turnOff = function () {
        this.state.turnOff();
    };
    return Laptop;
}());
var State = /** @class */ (function () {
    function State(laptop) {
        this.laptop = laptop;
        this.power = false;
        this.screenOn = false;
    }
    return State;
}());
var LockedState = /** @class */ (function (_super) {
    __extends(LockedState, _super);
    function LockedState() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    LockedState.prototype.turnOn = function () {
        if (this.power) {
            this.laptop.changeState(new ChargedState(this.laptop));
            this.laptop.charge();
            console.log('Ноутбук включен');
        }
        else {
            console.log('Зарядите ноутбук');
        }
    };
    LockedState.prototype.turnOff = function () { };
    LockedState.prototype.charge = function () {
        console.log('зарядка подключена');
        this.power = true;
        this.screenOn = true;
    };
    return LockedState;
}(State));
var ChargedState = /** @class */ (function (_super) {
    __extends(ChargedState, _super);
    function ChargedState() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ChargedState.prototype.turnOn = function () {
        this.screenOn = true;
    };
    ChargedState.prototype.turnOff = function () {
        if (this.screenOn) {
            this.laptop.changeState(new LockedState(this.laptop));
            this.power = false;
            this.screenOn = false;
            console.log('Ноутбук выключен');
        }
        else {
            console.log('Ноутбук уже выключен');
        }
    };
    ChargedState.prototype.charge = function () {
        this.power = true;
        this.screenOn = true;
    };
    return ChargedState;
}(State));
var laptop = new Laptop();
laptop.turnOn();
laptop.charge();
laptop.turnOn();
laptop.turnOff();
//# sourceMappingURL=newState.js.map