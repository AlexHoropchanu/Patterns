var WeatherStation = /** @class */ (function () {
    function WeatherStation() {
        this.observers = [];
    }
    WeatherStation.prototype.registerObserver = function (observer) {
        this.observers.push(observer);
    };
    WeatherStation.prototype.removeObserver = function (observer) {
        var index = this.observers.indexOf(observer);
        this.observers.splice(index, 1);
    };
    WeatherStation.prototype.notifyObservers = function () {
        for (var _i = 0, _a = this.observers; _i < _a.length; _i++) {
            var observer = _a[_i];
            observer.update(this.temperature);
        }
    };
    WeatherStation.prototype.setTemperature = function (temp) {
        console.log('Установка температуры ' + temp);
        this.temperature = temp;
        this.notifyObservers();
    };
    return WeatherStation;
}());
var TemperatureDisplay = /** @class */ (function () {
    function TemperatureDisplay(weatherStation) {
        this.subject = weatherStation;
        weatherStation.registerObserver(this);
    }
    TemperatureDisplay.prototype.update = function (temperature) {
        console.log('обновление температуры на дисплее');
    };
    return TemperatureDisplay;
}());
var Climat = /** @class */ (function () {
    function Climat(weatherStation) {
        this.subject = weatherStation;
        weatherStation.registerObserver(this);
    }
    Climat.prototype.update = function (temperature) {
        if (temperature > 25) {
            console.log('Температура более 25 включаю кондиционре');
        }
        else {
            console.log('Температура менее 25 выключаю кондиционер');
        }
    };
    return Climat;
}());
var weatherStation = new WeatherStation();
var tempDisplay = new TemperatureDisplay(weatherStation);
var climat = new Climat(weatherStation);
weatherStation.setTemperature(20);
weatherStation.setTemperature(30);
//# sourceMappingURL=observer.js.map