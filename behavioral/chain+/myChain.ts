/**поведенческий паттерн проектирования, который позволяет передавать запросы последовательно по цепочке обработчиков. Каждый последующий обработчик решает, может ли он обработать запрос сам и стоит ли передавать запрос дальше по цепи */

interface IEat {
    whatElse(eat: IEat): IEat;
    ask(question: string): string;
}
abstract class Eat implements IEat {
    private next: IEat;
    public whatElse(eat: IEat): IEat {
        this.next = eat;
        return eat;
    }
    public ask(question: string): string {
        if (this.next) return this.next.ask(question);
        return 'никто не хочет';
    }
}
class Meat extends Eat {
    public ask(question: string): string {
        if (question === 'Мясо') return `Петя: я буду ${question}.`;
        return super.ask(question);
    }
}
class Fish extends Eat {
    public ask(question: string): string {
        if (question === 'Рыба') return `Вася:  я буду ${question}.`;
        return super.ask(question);
    }
}
class Susi extends Eat {
    public ask(question: string): string {
        if (question === 'Суши') return `Лена:  я буду ${question}.`;
        return super.ask(question);
    }
}

//test
const meat = new Meat();
const fish = new Fish();
const susi = new Susi();
susi.whatElse(fish).whatElse(meat);
const eats = ['Мясо', 'Картошка', 'Суши', 'Палено'];
for (const eat of eats) {
    console.log(`Кто будет ${eat}?`);
    const answer = susi.ask(eat);
    console.log(`${answer}`);
}

