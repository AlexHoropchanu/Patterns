interface Pasta {
	eat(): void
}

class PastaComposite implements Pasta {
	private children: Pasta[] = []
	add(pasta: Pasta): void {
		this.children.push(pasta)
	}
	remove(pasta: Pasta): void {
		this.children.splice(this.children.indexOf(pasta), 1)
	}

	eat(): void {
        this.children.forEach(element => {
            element.eat()
        });
	}
}

class Spagetti implements Pasta {
	private name: string

	constructor(name: string) {
		this.name = name
	}

	eat(): void {
		console.log(this.name)
	}
}

let spagetti1 = new Spagetti("Карбонара")
let spagetti2 = new Spagetti("Спагетти с мясом")
let spagetti3 = new Spagetti("Спагетти с сыром")


let pastaComposite = new PastaComposite()

pastaComposite.add(spagetti1)
pastaComposite.add(spagetti2)
pastaComposite.add(spagetti3)

let pastaComposite2 = new PastaComposite()

pastaComposite2.add(spagetti1)
pastaComposite2.add(spagetti2)
pastaComposite2.add(spagetti3)

pastaComposite2.remove(spagetti1)
pastaComposite.remove(spagetti3)


pastaComposite.eat()
