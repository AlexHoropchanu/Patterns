class Pasta {
	size: number = 1;
	meat: boolean = false;
	ketchup: boolean = false;
	chees: boolean = false;

}
//
class PastaBuilder {
	private pasta: Pasta

	constructor() {
		this.pasta = new Pasta()
	}

	setSize(size: number): PastaBuilder {
		this.pasta.size = size
		return this
	}

	addMeat(): PastaBuilder {
		this.pasta.meat = true
		return this
	}

	addKetchup(): PastaBuilder {
		this.pasta.ketchup = true
		return this
	}

	addChees(): PastaBuilder {
		this.pasta.chees = true
		return this
	}

	build(): Pasta {
		return this.pasta
	}
}


let pastaAll = new PastaBuilder().setSize(2).addMeat().addKetchup().addChees().build();
console.log(pastaAll);

let pastaChees = new PastaBuilder().addChees().build();
console.log(pastaChees);
