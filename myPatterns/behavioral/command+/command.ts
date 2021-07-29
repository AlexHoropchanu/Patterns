class Car {
	start(): void {
		console.log('Машина запущена')
	}
	stopCar(): void {
		console.log('Машина заглушена')	
	}
}


interface Command {
	execute(): void
	undo(): void
	redo(): void
}

class Start implements Command {
	private car: Car

	constructor(car: Car) {
		this.car = car
	}

	execute(): void {
		this.car.start()
	}

	undo(): void {
		this.car.stopCar()
	}

	redo(): void {
		this.execute()
	}
}

class StopCar implements Command {
	private car: Car

	constructor(car: Car) {
		this.car = car
	}

	execute(): void {
		this.car.stopCar()
	}

	undo(): void {
		this.car.start()
	}

	redo(): void {
		this.execute()
	}
}

class Remote {
	submit(command: Command): void {
		command.execute()
	}
}

let car = new Car()

let start = new Start(car)
let stopCar = new StopCar(car)

let remote = new Remote()

remote.submit(start)
remote.submit(stopCar)