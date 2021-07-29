var FactoryWindow = /** @class */ (function () {
    function FactoryWindow() {
    }
    FactoryWindow.prototype.createPlastic = function () {
        return new WindowPlastic;
    };
    FactoryWindow.prototype.createWood = function () {
        return new WindowWood;
    };
    return FactoryWindow;
}());
var FactoryDoor = /** @class */ (function () {
    function FactoryDoor() {
    }
    FactoryDoor.prototype.createPlastic = function () {
        return new DoorWood;
    };
    FactoryDoor.prototype.createWood = function () {
        return new DoorPlastic;
    };
    return FactoryDoor;
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
var DoorWood = /** @class */ (function () {
    function DoorWood() {
    }
    DoorWood.prototype.door = function () {
        return 'это деревянная дверь';
    };
    return DoorWood;
}());
var DoorPlastic = /** @class */ (function () {
    function DoorPlastic() {
    }
    DoorPlastic.prototype.door = function () {
        return 'это деревянная дверь';
    };
    return DoorPlastic;
}());
var windowWood = new FactoryWindow().createWood;
var dorrPlastic = new FactoryDoor().createPlastic;
console.log(windowWood().window());
console.log(dorrPlastic().door());
//# sourceMappingURL=abstractFactory.js.map