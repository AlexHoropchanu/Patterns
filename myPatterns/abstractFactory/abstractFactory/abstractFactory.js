var SportCarFactory = /** @class */ (function () {
    function SportCarFactory() {
    }
    SportCarFactory.prototype.createSportCar = function () {
        return new Ferrari();
    };
    SportCarFactory.prototype.createPremiumCar = function () {
        return new Maybach();
    };
    return SportCarFactory;
}());
var PremiumCarFactory = /** @class */ (function () {
    function PremiumCarFactory() {
    }
    PremiumCarFactory.prototype.createSportCar = function () {
        return new Ferrari();
    };
    PremiumCarFactory.prototype.createPremiumCar = function () {
        return new Bentley();
    };
    return PremiumCarFactory;
}());
var Ferrari = /** @class */ (function () {
    function Ferrari() {
    }
    Ferrari.prototype.usefulFunctionSportCar = function () {
        return 'Ferrari max speed 300';
    };
    return Ferrari;
}());
var Lamborguni = /** @class */ (function () {
    function Lamborguni() {
    }
    Lamborguni.prototype.usefulFunctionSportCar = function () {
        return 'Lamborgini max speed 330';
    };
    return Lamborguni;
}());
var Maybach = /** @class */ (function () {
    function Maybach() {
    }
    Maybach.prototype.usefulFunctionPremiumCar = function () {
        return 'Maybach comfort';
    };
    Maybach.prototype.anotherUsefulFunctionSport = function (collaborator) {
        var result = collaborator.usefulFunctionSportCar();
        return "\u041F\u043E\u043B\u0443\u0447\u0430\u0435\u0442 \u0444\u0443\u043D\u043A\u0446\u0438\u043E\u043D\u0430\u043B \u0441\u043F\u043E\u0440\u0442 \u043A\u0430\u0440\u0430 (" + result + ")";
    };
    return Maybach;
}());
var Bentley = /** @class */ (function () {
    function Bentley() {
    }
    Bentley.prototype.usefulFunctionPremiumCar = function () {
        return 'Bentley comfort';
    };
    Bentley.prototype.anotherUsefulFunctionSport = function (collaborator) {
        var result = collaborator.usefulFunctionSportCar();
        return "\u041F\u043E\u043B\u0443\u0447\u0430\u0435\u0442 \u0444\u0443\u043D\u043A\u0446\u0438\u043E\u043D\u0430\u043B \u0441\u043F\u043E\u0440\u0442 \u043A\u0430\u0440\u0430 (" + result + ")";
    };
    return Bentley;
}());
function clientCode(factory) {
    var sport = factory.createSportCar();
    var premium = factory.createPremiumCar();
    console.log(premium.usefulFunctionPremiumCar());
    console.log(premium.anotherUsefulFunctionSport(sport));
}
clientCode(new SportCarFactory());
clientCode(new PremiumCarFactory());
//# sourceMappingURL=abstractFactory.js.map