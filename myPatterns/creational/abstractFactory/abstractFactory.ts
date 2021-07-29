class AbstractFactory {
    create(key): AbstractWindow{
        switch (key) {
            case "хочу деревянное окно":
                return this.createWindowWood()
            case "хочу пластиковое окно":
               return this.createWindowPlastic()
            default:
                break;
        }
    }
    public createWindowWood(): WindowWood {
        return new WindowWood
    }
    public createWindowPlastic(): WindowPlastic {
        return new WindowPlastic
    }
}

class FactoryWindowWood{
    public createWindowWood(): AbstractWindow{
        return new WindowWood
    }
}
class FactoryPlasticWood {
    public createWindowPlastic(): AbstractWindow{
         return new WindowPlastic
    }
    
}
interface AbstractWindow{
    window():string
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

const createWindowWood = new AbstractFactory().create('хочу деревянное окно');
const createPlasticWood = new AbstractFactory().create('хочу пластиковое окно');
console.log(createWindowWood.window())
console.log(createPlasticWood.window())