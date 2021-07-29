var AbstractFactory = /** @class */ (function () {
    function AbstractFactory() {
    }
    AbstractFactory.prototype.create = function (key) {
        switch (key) {
            case "хочу деревянное окно":
                return this.createWindowWood();
            case "хочу пластиковое окно":
                return this.createWindowPlastic();
            default:
                break;
        }
    };
    AbstractFactory.prototype.createWindowWood = function () {
        return new WindowWood;
    };
    AbstractFactory.prototype.createWindowPlastic = function () {
        return new WindowPlastic;
    };
    return AbstractFactory;
}());
var FactoryWindowWood = /** @class */ (function () {
    function FactoryWindowWood() {
    }
    FactoryWindowWood.prototype.createWindowWood = function () {
        return new WindowWood;
    };
    return FactoryWindowWood;
}());
var FactoryPlasticWood = /** @class */ (function () {
    function FactoryPlasticWood() {
    }
    FactoryPlasticWood.prototype.createWindowPlastic = function () {
        return new WindowPlastic;
    };
    return FactoryPlasticWood;
}());
var WindowWood = /** @class */ (function () {
    function WindowWood() {
    }
    WindowWood.prototype.window = function () {
        return 'это деревянное окно';
    };
    return WindowWood;
}());
var WindowPlastic = /** @class */ (function () {
    function WindowPlastic() {
    }
    WindowPlastic.prototype.window = function () {
        return 'это пластиковое окно';
    };
    return WindowPlastic;
}());
var createWindowWood = new AbstractFactory().create('хочу деревянное окно');
var createPlasticWood = new AbstractFactory().create('хочу пластиковое окно');
console.log(createWindowWood.window());
console.log(createPlasticWood.window());
//# sourceMappingURL=abstractFactory.js.map