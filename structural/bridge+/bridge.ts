// структурный паттерн проектирования, который разделяет один
// или несколько классов на две отдельные иерархии — абстракцию
// и реализацию, позволяя изменять их независимо друг от друга.


class Telephone {
    public mobilePhone: MobilePhone;
    constructor(mobilePhone: MobilePhone) {
        this.mobilePhone = mobilePhone;
    }
    public call(): string {
        return `${this.mobilePhone.call()}`;
    }
}
class Intercom extends Telephone {
    public call(): string {
        return `${this.mobilePhone.call()} домофон`;
    }
}


interface MobilePhone {
    call(): string;
}
class Samsung implements MobilePhone {
    public call(): string {
        return 'Звонит Samsung ';
    }
}
class Iphone implements MobilePhone {
    public call(): string {
        return 'Звонит Iphone';
    }
}


const samsung = new Samsung();
const iphone = new Iphone();
const device1 = new Telephone(samsung);
const device2 = new Telephone(iphone);
const intercom1 = new Intercom(samsung);
const intercom2 = new Intercom(iphone);
console.log(device1.call());
console.log(device2.call());
console.log(intercom1.call());
console.log(intercom2.call());