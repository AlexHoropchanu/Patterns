interface Prototype {
    clone(): Prototype;
}

class Car implements Prototype {
	public speed: number;
	public model: string
    constructor(speed: number, model: string) {
       this.speed = speed
	   this.model = model
    }
    public clone(): Car {
        return new Car(this.speed, this.model);
    }
}

class ColorCar extends Car {
    public color: string;
    constructor(speed: number, model: string, color: string) {
        super(speed, model);
        this.color = color;
    }
    public clone(): ColorCar {
        return new ColorCar(this.speed, this.model, this.color);
    }
}

//test
const car1 = new Car(100, 'bmw');
const car2 = car1.clone();
car2.model = 'toyota';
car2.speed = 200;
console.log(car1, car2);
console.log(car1 == car2);

const colorCar1 = new ColorCar(100, 'bmw', 'red');
const colorCar2 = colorCar1.clone();
colorCar2.color = 'blue';
const colorCar3 = colorCar2.clone();
console.log(colorCar1, colorCar2, colorCar3);

