var Add = /** @class */ (function () {
    function Add() {
    }
    Add.prototype.execute = function (a, b) {
        return a + b;
    };
    return Add;
}());
var Substract = /** @class */ (function () {
    function Substract() {
    }
    Substract.prototype.execute = function (a, b) {
        return a - b;
    };
    return Substract;
}());
var Context = /** @class */ (function () {
    function Context(strategy) {
        if (strategy === void 0) { strategy = new Add(); }
        this.strategy = strategy;
    }
    Context.prototype.setStrategy = function (strategy) {
        this.strategy = strategy;
    };
    Context.prototype.execute = function (a, b) {
        return this.strategy.execute(a, b);
    };
    return Context;
}());
var context = new Context();
console.log(context.execute(15, 23));
//# sourceMappingURL=strategy.js.map