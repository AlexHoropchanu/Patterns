
abstract class CarCreator {

    public abstract carFactoryMethod(): Product;

    public createProduct(): string {
        const product = this.carFactoryMethod();
        return `Работаем с полученым продуктом ${product.start()}`;
    }
}


class BmwCreator extends CarCreator {

    public carFactoryMethod(): Product {
        return new Bmw();
    }
}

class ToyotaCreator extends CarCreator {
    public carFactoryMethod(): Product {
        return new Toyota();
    }
}

interface Product {
    start(): string;
}


class Bmw implements Product {
    public start(): string {
        return 'Ваша Bmw запустилась';
    }
}

class Toyota implements Product {
    public start(): string {
        return 'Ваша Toyota запустилась';
    }
}


function client(creator: CarCreator) {
    console.log(creator.carFactoryMethod());
}

console.log('Начинаем изготавливать Bmw');
client(new BmwCreator());


console.log('Начинаем изготавливать Toyota');
client(new ToyotaCreator());