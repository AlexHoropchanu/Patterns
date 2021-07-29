interface AbstractFactory { //Интерфейс Абстрактной Фабрики объявляет набор методов, которые возвращают различные абстрактные продукты
    createSportCar(): AbstractSportCar;
    createPremiumCar(): AbstractPremiumCar;
}


class SportCarFactory implements AbstractFactory { //Конкретная Фабрика производит семейство продуктов одной вариации. Фабрика гарантирует совместимость полученных продуктов.
    public createSportCar(): AbstractSportCar {
        return new Ferrari();
    }

    public createPremiumCar(): AbstractPremiumCar {
        return new Maybach();
    }
}


class PremiumCarFactory implements AbstractFactory {
    public createSportCar(): AbstractSportCar {
        return new Ferrari();
    }

    public createPremiumCar(): AbstractPremiumCar {
        return new Bentley();
    }
}

interface AbstractSportCar { // Каждый отдельный продукт семейства продуктов должен иметь базовый интерфейс. Все вариации продукта должны реализовывать этот интерфейс.
    usefulFunctionSportCar(): string;
}


class Ferrari implements AbstractSportCar { //  Эти Конкретные Продукты создаются соответствующими Конкретными Фабриками
    public usefulFunctionSportCar(): string {
        return 'Ferrari max speed 300';
    }
}

class Lamborguni implements AbstractSportCar {
    public usefulFunctionSportCar(): string {
        return 'Lamborgini max speed 330';
    }
}


interface AbstractPremiumCar {

    usefulFunctionPremiumCar(): string;


    anotherUsefulFunctionSport(collaborator: AbstractSportCar): string;
}


class Maybach implements AbstractPremiumCar {

    public usefulFunctionPremiumCar(): string {
        return 'Maybach comfort';
    }


    public anotherUsefulFunctionSport(collaborator: AbstractSportCar): string {
        const result = collaborator.usefulFunctionSportCar();
        return `Получает функционал спорт кара (${result})`;
    }
}

class Bentley implements AbstractPremiumCar {

    public usefulFunctionPremiumCar(): string {
        return 'Bentley comfort';
    }


    public anotherUsefulFunctionSport(collaborator: AbstractSportCar): string {
        const result = collaborator.usefulFunctionSportCar();
        return `Получает функционал спорт кара (${result})`;
    }
}


function clientCode(factory: AbstractFactory) {
    const sport = factory.createSportCar();
    const premium = factory.createPremiumCar();

    console.log(premium.usefulFunctionPremiumCar());
    console.log(premium.anotherUsefulFunctionSport(sport));
}



clientCode(new SportCarFactory());
clientCode(new PremiumCarFactory());