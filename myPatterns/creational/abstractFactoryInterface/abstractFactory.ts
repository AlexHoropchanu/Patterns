interface AbstractFactory {//Интерфейс Абстрактной Фабрики объявляет набор методов, которые возвращают различные абстрактные продукты
    createWood():AbstractWindow
    createPlastic():AbstractDoor
}
class FactoryWindow implements AbstractFactory {//Конкретная Фабрика производит семейство продуктов одной вариации. Фабрика гарантирует совместимость полученных продуктов.
    public createPlastic(): AbstractWindow {
        return new WindowPlastic
    }
    public createWood(): AbstractWindow {
        return new WindowWood
    }
}
class FactoryDoor implements AbstractFactory {
    public createPlastic(): AbstractDoor {
        return new DoorWood
    }
    public createWood(): AbstractDoor {
        return new DoorPlastic
    }
}

interface AbstractWindow {// Каждый отдельный продукт семейства продуктов должен иметь базовый интерфейс. 
    window(): string
}
class WindowWood implements AbstractWindow {
    public window(): string {
        return 'это деревянное окно';
    }
}

class WindowPlastic implements AbstractWindow {
    public window(): string {
        return 'это пластиковое окно';
    }
}
interface AbstractDoor {
    door():string
}
class DoorWood implements AbstractDoor {
    public door(): string {
        return 'это деревянная дверь';
    }
}

class DoorPlastic implements AbstractDoor {
    public door(): string {
        return 'это деревянная дверь';
    }
}
const windowWood = new FactoryWindow().createWood
const dorrPlastic = new FactoryDoor().createPlastic
console.log(windowWood().window())
console.log(dorrPlastic().door())