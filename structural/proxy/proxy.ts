class Access {
	public open(){
		console.log('Доступ открыт')
	}

	public close() {
		console.log('Доступ закрыт')
	}
};

class SecuritySystem {
	constructor(private login:Access) {
	}

	public open(password: string) {
		if (this.authenticate(password)) {
			this.login.open();
		} else {
		    this.login.close();
		}
	}

	private authenticate(password: string) {
		return password === 'password';
	}
};
const a = new SecuritySystem(new Access())
console.log(a.open('password'))
console.log(a.open('pasword'))