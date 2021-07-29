/**поведенческий паттерн проектирования, который позволяет передавать запросы последовательно по цепочке обработчиков. Каждый последующий обработчик решает, может ли он обработать запрос сам и стоит ли передавать запрос дальше по цепи */
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
var Drink = /** @class */ (function () {
    function Drink() {
    }
    Drink.prototype.whatElse = function (drink) {
        this.next = drink;
        return drink;
    };
    Drink.prototype.ask = function (question) {
        if (this.next) {
            return this.next.ask(question);
        }
        else {
            return 'никто не хочет';
        }
    };
    return Drink;
}());
var Beer = /** @class */ (function (_super) {
    __extends(Beer, _super);
    function Beer() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Beer.prototype.ask = function (question) {
        if (question === 'пиво')
            return "\u041F\u0435\u0442\u044F: \u044F \u0431\u0443\u0434\u0443 " + question + ".";
        return _super.prototype.ask.call(this, question);
    };
    return Beer;
}(Drink));
var Cognac = /** @class */ (function (_super) {
    __extends(Cognac, _super);
    function Cognac() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Cognac.prototype.ask = function (question) {
        if (question === 'коньяк')
            return "\u0412\u0430\u0441\u044F:  \u044F \u0431\u0443\u0434\u0443 " + question + ".";
        return _super.prototype.ask.call(this, question);
    };
    return Cognac;
}(Drink));
var Wine = /** @class */ (function (_super) {
    __extends(Wine, _super);
    function Wine() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Wine.prototype.ask = function (question) {
        if (question === 'вино')
            return "\u041B\u0435\u043D\u0430:  \u044F \u0431\u0443\u0434\u0443 " + question + ".";
        return _super.prototype.ask.call(this, question);
    };
    return Wine;
}(Drink));
var beer = new Beer();
var cognac = new Cognac();
var wine = new Wine();
wine.whatElse(cognac).whatElse(beer);
var drinks = ['кофе', 'вино', 'пиво', 'коньяк'];
for (var _i = 0, drinks_1 = drinks; _i < drinks_1.length; _i++) {
    var drink = drinks_1[_i];
    console.log("\u041A\u0442\u043E \u0431\u0443\u0434\u0435\u0442 " + drink + "?");
    var answer = wine.ask(drink);
    console.log("" + answer);
}
//# sourceMappingURL=myChain.js.map