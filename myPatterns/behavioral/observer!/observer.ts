interface Subject{
    registerObserver(observer: Observer): void;
    removeObserver(observer: Observer): void;
    notifyObservers():void;
}

interface Observer{
    update(temperature: number): void;
}

class WeatherStation implements Subject {
    private observers: Observer[] = [];
    private temperature: number;

    registerObserver(observer: Observer): void {
        this.observers.push(observer);
    }

    removeObserver(observer: Observer): void {
        let index = this.observers.indexOf(observer);
        this.observers.splice(index, 1);
    }

    notifyObservers(): void {
        for (let observer of this.observers) {
            observer.update(this.temperature);
        }
    }

    setTemperature(temp: number): void {
        console.log('Установка температуры ' + temp);
        this.temperature = temp;
        this.notifyObservers();
    }
}


class TemperatureDisplay implements Observer {
    private subject: Subject;

    constructor(weatherStation: Subject) {
        this.subject = weatherStation;
        weatherStation.registerObserver(this);
    }

    update(temperature: number): void {
        console.log('обновление температуры на дисплее');
    }
}

class Climat implements Observer {
    private subject: Subject;

    constructor(weatherStation: Subject) {
        this.subject = weatherStation;
        weatherStation.registerObserver(this);
    }

    update(temperature: number): void {
        if (temperature > 25) {
            console.log('Температура более 25 включаю кондиционре');
        } else {
            console.log('Температура менее 25 выключаю кондиционер');
        }
    }
}

let weatherStation = new WeatherStation();

let tempDisplay = new TemperatureDisplay(weatherStation);
let climat = new Climat(weatherStation);

weatherStation.setTemperature(20);
weatherStation.setTemperature(30);