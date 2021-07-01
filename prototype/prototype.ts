class Human {

	constructor(public name: string, private age: number, private weight: number) {
	}


	clone(): this {
		return Object.create(this);
	}
}

const human = new Human('Dima', 22, 80);
const humanClone = human.clone();


console.log(human === humanClone)
console.log(human)

humanClone.name = "Vasya"
console.log(humanClone)