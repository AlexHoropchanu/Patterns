var Car = /** @class */ (function () {
    function Car() {
    }
    Car.prototype.start = function () {
        console.log('Машина запущена');
    };
    Car.prototype.stopCar = function () {
        console.log('Машина заглушена');
    };
    return Car;
}());
var Start = /** @class */ (function () {
    function Start(car) {
        this.car = car;
    }
    Start.prototype.execute = function () {
        this.car.start();
    };
    Start.prototype.undo = function () {
        this.car.stopCar();
    };
    Start.prototype.redo = function () {
        this.execute();
    };
    return Start;
}());
var StopCar = /** @class */ (function () {
    function StopCar(car) {
        this.car = car;
    }
    StopCar.prototype.execute = function () {
        this.car.stopCar();
    };
    StopCar.prototype.undo = function () {
        this.car.start();
    };
    StopCar.prototype.redo = function () {
        this.execute();
    };
    return StopCar;
}());
var Remote = /** @class */ (function () {
    function Remote() {
    }
    Remote.prototype.submit = function (command) {
        command.execute();
    };
    return Remote;
}());
var car = new Car();
var start = new Start(car);
var stopCar = new StopCar(car);
var remote = new Remote();
remote.submit(start);
remote.submit(stopCar);
//# sourceMappingURL=command.js.map