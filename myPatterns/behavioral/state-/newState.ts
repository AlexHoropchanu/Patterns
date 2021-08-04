class Laptop {
    state: State
    constructor() {
        this.state = new LockedState(this)
    }

    changeState(state: State): void {
        this.state = state
    }

    charge(): void {
        this.state.charge()
    }

    turnOn(): void {
        this.state.turnOn()
    }

    turnOff(): void {
        this.state.turnOff()
    }

}

abstract class State {
    protected laptop: Laptop
    protected power: boolean
    protected screenOn: boolean
    constructor(laptop: Laptop) {
        this.laptop = laptop
        this.power = false
        this.screenOn = false
    }
    abstract charge(): void

    abstract turnOn(): void

    abstract turnOff(): void

}

class LockedState extends State {
    turnOn(): void {
        console.log("Включение ноутбука")
        if (this.power) {
            this.laptop.changeState(new ChargedState(this.laptop))
            console.log('Ноутбук включен')
        } else {
            console.log('Ноутбук разряжен')
        }
    }
    turnOff(): void {}
    charge(): void {
        this.power = true
        this.screenOn = true
        // console.log('Ноутбук заряжается')
    }
}

class ChargedState extends State {
    turnOn(): void {
        this.screenOn = true
    }
    turnOff(): void {
        if (this.screenOn && this.turnOn) {
            this.laptop.changeState(new LockedState(this.laptop))
            this.power = false
            this.screenOn = false
            console.log('Ноутбук выключен')
        } else {
            console.log('Ноутбук уже выключен')
        }
    }
    charge(): void {
        this.power = true
        this.screenOn = true
    }
}

const laptop = new Laptop()

laptop.turnOn();

laptop.charge();
laptop.turnOn();
laptop.turnOff()
