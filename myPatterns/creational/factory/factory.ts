
abstract class Creator { //Абстрактный класс создателя определяет методы для создания продукта и работы с ним
    protected abstract factoryMethod(): Transport;


    public someOperation(): string {
        const product = this.factoryMethod();
        return `Обьект выполняет функцю ${product.operation()}`;
    }
}


class BoatCreator extends Creator { //Конкретный класс создатель наследуется от Абстрактного создателя и создает конкретный продукт и фактически возвращает тип конкретного продукта

    protected factoryMethod(): Transport {
        return new Boat();
    }
}

class CarCreator extends Creator {
    protected factoryMethod(): Transport {
        return new Car();
    }
}


interface Transport { // интерфейс продукта определяет методы которые должны выполнять все конкретные продукты
    operation(): string;
}


class Boat implements Transport { // конкретные продукты имплементят интерфейс и реализуют его.
    public operation(): string {
        return 'Плыть';
    }
}

class Car implements Transport {
    public operation(): string {
        return 'Ехать';
    }
}


function clientCode(creator: Creator) { // Клиентский код работает с конкретным создателем 

    console.log(creator.someOperation());

}



clientCode(new BoatCreator());

clientCode(new CarCreator());