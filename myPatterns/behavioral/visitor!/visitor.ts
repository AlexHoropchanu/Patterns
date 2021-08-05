interface Phone {
	accept(operation:PhoneOperation): void
}

class Iphone implements Phone {
	call():void {
		console.log('Функция звонить')
	}

	accept(operation:PhoneOperation):void {
		operation.visitIphone(this)
	}
}

class Samsung implements Phone {
	call():void {
		console.log('Функция звонить')
	}

	accept(operation:PhoneOperation):void {
		operation.visitSamsung(this)
	}
}


interface PhoneOperation {
	visitIphone(iphone: Iphone): void
	visitSamsung(samsung:Samsung): void
}

class Call implements PhoneOperation {
	visitIphone(iphone: Iphone): void {
		iphone.call()
	}

	visitSamsung(samsung:Samsung): void {
		samsung.call()
	}

}

let iphone = new Iphone()
let samsung = new Samsung()


let call = new Call()

iphone.accept(call)
samsung.accept(call)