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
var Eat = /** @class */ (function () {
    function Eat() {
    }
    Eat.prototype.whatElse = function (eat) {
        this.next = eat;
        return eat;
    };
    Eat.prototype.ask = function (question) {
        if (this.next)
            return this.next.ask(question);
        return 'никто не хочет';
    };
    return Eat;
}());
var Meat = /** @class */ (function (_super) {
    __extends(Meat, _super);
    function Meat() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Meat.prototype.ask = function (question) {
        if (question === 'Мясо')
            return "\u041F\u0435\u0442\u044F: \u044F \u0431\u0443\u0434\u0443 " + question + ".";
        return _super.prototype.ask.call(this, question);
    };
    return Meat;
}(Eat));
var Fish = /** @class */ (function (_super) {
    __extends(Fish, _super);
    function Fish() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Fish.prototype.ask = function (question) {
        if (question === 'Рыба')
            return "\u0412\u0430\u0441\u044F:  \u044F \u0431\u0443\u0434\u0443 " + question + ".";
        return _super.prototype.ask.call(this, question);
    };
    return Fish;
}(Eat));
var Susi = /** @class */ (function (_super) {
    __extends(Susi, _super);
    function Susi() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Susi.prototype.ask = function (question) {
        if (question === 'Суши')
            return "\u041B\u0435\u043D\u0430:  \u044F \u0431\u0443\u0434\u0443 " + question + ".";
        return _super.prototype.ask.call(this, question);
    };
    return Susi;
}(Eat));
//test
var meat = new Meat();
var fish = new Fish();
var susi = new Susi();
susi.whatElse(fish).whatElse(meat);
var eats = ['Мясо', 'Картошка', 'Суши', 'Палено'];
for (var _i = 0, eats_1 = eats; _i < eats_1.length; _i++) {
    var eat = eats_1[_i];
    console.log("\u041A\u0442\u043E \u0431\u0443\u0434\u0435\u0442 " + eat + "?");
    var answer = susi.ask(eat);
    console.log("" + answer);
}
