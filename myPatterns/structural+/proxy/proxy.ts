class Access {
	public open(): string{
		return 'Доступ открыт'
	}

	public close(): string {
		return 'Доступ закрыт'
	}
};

class SecuritySystem {
	constructor(private access:Access) {
	}

	public open(password: string): void {
		if (this.authenticate(password)) {
			console.log(this.access.open());
		} else {
		    console.log(this.access.close());
		}
	}

	private authenticate(password: string): boolean {
		return password === 'password';
	}
};
const a = new SecuritySystem(new Access())
a.open('password')
a.open('pasword')//