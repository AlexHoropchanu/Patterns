interface Strategy {
	execute(a:number, b:number):number 
}

class Add implements Strategy {
	execute(a:number, b:number):number {
		return a + b
	}
}

class Substract implements Strategy {
	execute(a:number, b:number):number {
		return a - b
	}
}

class Context {
	private strategy:Strategy

	constructor(strategy:Strategy) {
		this.strategy = strategy
	}

	setStrategy(strategy:Strategy):void {
		this.strategy = strategy
	}

	execute(a:number, b:number):number {
		return this.strategy.execute(a, b)
	}
}

let context = new Context(new Add)

console.log(context.execute(15, 23))