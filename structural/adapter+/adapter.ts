// структурный паттерн проектирования, который позволяет 
// объектам с несовместимыми интерфейсами работать вместе

class Samsung {
    public typeC(): string {
        return 'Samsung use typeC';
    }
}
class Iphone {
    public lightning(): string {
        return 'Iphone use Lightning';
    }
}
class Adapter extends Samsung {
    private device: Iphone;
    constructor(device: Iphone) {
        super();
        this.device = device;
    }
    public typeC(): string {
        const result = this.device.lightning();
        return `${result} через адптер внутри typeC`;
    }
}

function charge(device: Samsung) {
    console.log(device.typeC());
}
const iphone = new Iphone();
const samsung = new Samsung();
const adapter = new Adapter(iphone);

charge(samsung);

charge(adapter);