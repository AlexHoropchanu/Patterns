class User {
    constructor(public name: string, public password: string) {
        this.name = name
        this.password = password
    }

    getPage(): string {
        return "Ваша страница открыта";
    }

    leavePage(): void {
        console.log("Выход со страници");
    }
}

class ContentSecurity {
    constructor(public user: User) {
        this.user = user
    }

    getPage(): string {
        if (this.user.password === "password") {
            this.user.getPage();
        } else {
            return "error";
        }
    }

    leavePage() {
        this.user.leavePage()
    }
}

const alex = new ContentSecurity(new User("Alex", "password"))
const max = new ContentSecurity(new User("Max", "pasword"))

alex.getPage()
max.getPage()