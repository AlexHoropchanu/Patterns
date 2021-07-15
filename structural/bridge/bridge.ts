interface Сook {
	makePotato(): void
	makeBeef(): void
	makePasta(): void
}

class RussianСook implements Сook {
	makePotato(): void {
		console.log('Русский повар сделает картошку')
	}
	makeBeef(): void {
		console.log('Русский повар сделает мясо')
	}
	makePasta(): void {
		console.log('Русский повар сделает пасту')
	}
}

class AmericanСook implements Сook {
	makePotato(): void {
		console.log('Американский повар сделает картошку')
	}
	makeBeef(): void {
		console.log('Американский повар сделает мясо')
	}
	makePasta(): void {
		console.log('Американский повар сделает пасту')
	}
}

interface Client {
	client: Сook
	buyPotato(): void
	buyBeef(): void
	buyPasta(): void
}

class GoodClent implements Client {
	client: Сook
	constructor(client: Сook) {
		this.client = client
	}
	buyPotato(): void {
		new this.client.makePotato()
	}
	buyBeef(): void {
		new this.client.makeBeef()
	}
	buyPasta(): void {
		new this.client.makePasta()
	}
}

let russian = new GoodClent(new RussianСook)
let american = new GoodClent(new AmericanСook)
russian.buyPotato()
russian.buyBeef()
russian.buyPasta()
american.buyPotato()
american.buyBeef()
american.buyPasta()