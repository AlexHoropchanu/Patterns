// Абстракцияя
var TvAbstraction = /** @class */ (function () {
    function TvAbstraction(implementation) {
        this.implementation = implementation;
    }
    TvAbstraction.prototype.operationOn = function () {
        var result = this.implementation.on();
        return "\u0434\u0435\u043B\u0435\u0433\u0438\u0440\u0443\u0435\u043C \u0440\u0435\u0430\u043B\u0438\u0437\u0430\u0446\u0438\u044E \u0438 \u0432\u044B\u043F\u043E\u043B\u043D\u044F\u0435\u043C \u043C\u0435\u0442\u043E\u0434: " + result;
    };
    return TvAbstraction;
}());
// Конкретная реализация
var TvSamsung = /** @class */ (function () {
    function TvSamsung() {
    }
    TvSamsung.prototype.on = function () {
        return 'Включить телевизор samsung';
    };
    return TvSamsung;
}());
var TvMi = /** @class */ (function () {
    function TvMi() {
    }
    TvMi.prototype.on = function () {
        return 'Включить телевизор Xiaomi';
    };
    return TvMi;
}());
// Клиентский код, который работает только с классам абстракции
function clientCode(tv) {
    console.log(tv.operationOn());
}
/**
 * Клиентский код должен работать с любой предварительно сконфигурированной
 * комбинацией абстракции и реализации.
 */
var tvSamsung = new TvSamsung();
var tvAbstraction = new TvAbstraction(tvSamsung);
clientCode(tvAbstraction);
var tvMi = new TvMi();
tvAbstraction = new TvAbstraction(tvMi);
clientCode(tvAbstraction);
//# sourceMappingURL=bridge.js.map