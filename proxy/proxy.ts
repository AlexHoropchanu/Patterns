class Access {
	open() {
		console.log('Доступ открыт')
	}

	close() {
		console.log('Доступ закрыт')
	}
};

class SecuritySystem {
	constructor(private login:Access) {
	}

	open(password: string) {
		if (this.authenticate(password)) {
			this.login.open();
		} else {
		    this.login.close();
		}
	}

	authenticate(password: string) {
		return password === 'password';
	}
};
const a = new SecuritySystem(new Access())
console.log(a.open('password'))
console.log(a.open('pasword'))