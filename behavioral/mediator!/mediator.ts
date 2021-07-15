interface Mediator {
	notify(sender: object, event: string): void
}

class ConcreteMediator implements Mediator {
	private firstComponent: firstComponent
	private secondComponent: secondComponent

	constructor(firstComponent: firstComponent, secondComponent: secondComponent) {
		this.firstComponent = firstComponent
		this.firstComponent.setMediator(this)
		this.secondComponent = secondComponent
		this.secondComponent.setMediator(this)
	}

	notify(sender: object, event: string): void {
		if (event === 'A') {
			console.log('Посредник среагировал на действие "А" и вызвал операции:')
			this.secondComponent.doC()
		}

		if (event === 'D') {
			console.log('Посредник среагировал на действие "D" и вызвал операции:')
			this.firstComponent.doB()
			this.secondComponent.doC()
		}
	}
}

abstract class BaseComponent {
	protected mediator: Mediator

	constructor(mediator: Mediator = null) {
		this.mediator = mediator
	}

	setMediator(mediator: Mediator): void {
		this.mediator = mediator
	}
}

class firstComponent extends BaseComponent {
	doA(): void {
		console.log('Компонент "1" делает действие "А"')
		this.mediator.notify(this, 'A')
	}

	doB(): void {
		console.log('Компонент "1" делает действие "B"')
		this.mediator.notify(this, 'B')
	}

}

class secondComponent extends BaseComponent {
	doC(): void {
		console.log('Компонент "2" делает действие "C"')
		this.mediator.notify(this, 'C')
	}

	doD(): void {
		console.log('Компонент "2" делает действие "D"')
		this.mediator.notify(this, 'D')
	}

}

let component1 = new firstComponent()
let component2 = new secondComponent()

let mediator = new ConcreteMediator(component1, component2)

console.log('Я сделал действие "А"')
component1.doA()

console.log('');
console.log('Я сделал действие "D".')
component2.doD()