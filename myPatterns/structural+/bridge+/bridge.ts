// Абстракцияя
class TvAbstraction { 
    protected implementation: Implementation;

    constructor(implementation: Implementation) {
        this.implementation = implementation;
    }

    public operationOn(): string {
        const result = this.implementation.on();
        return `делегируем реализацию и выполняем метод: ${result}`;
    }
}


// Реализация
interface Implementation {
    on(): string;
}

// Конкретная реализация
class TvSamsung implements Implementation {
    public on(): string {
        return 'Включить телевизор samsung';
    }
}

class TvMi implements Implementation {
    public on(): string {
        return 'Включить телевизор Xiaomi';
    }
}

// Клиентский код, который работает только с классам абстракции
function clientCode(tv: TvAbstraction) {
    console.log(tv.operationOn());
}

/**
 * Клиентский код должен работать с любой предварительно сконфигурированной
 * комбинацией абстракции и реализации.
 */
let tvSamsung = new TvSamsung();
let tvAbstraction = new TvAbstraction(tvSamsung);
clientCode(tvAbstraction);

let tvMi = new TvMi();
tvAbstraction = new TvAbstraction(tvMi)
clientCode(tvAbstraction)