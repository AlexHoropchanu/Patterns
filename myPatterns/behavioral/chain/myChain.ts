interface IDrink {
    whatElse(drink: IDrink): IDrink;
    ask(question: string): string;
}
abstract class Drink implements IDrink {
    private next: IDrink;
    public whatElse(drink: IDrink): IDrink {
        this.next = drink;
        return drink;
    }
    public ask(question: string): string {
        if (this.next) {
            return this.next.ask(question)
            
        } else {
            return 'никто не хочет';
        }
        
    }
}
class Beer extends Drink {
    public ask(question: string): string {
        if (question === 'пиво') return `Петя: я буду ${question}.`;
        return super.ask(question);
    }
}
class Cognac extends Drink {
    public ask(question: string): string {
        if (question === 'коньяк') return `Вася:  я буду ${question}.`;
        return super.ask(question);
    }
}
class Wine extends Drink {
    public ask(question: string): string {
        if (question === 'вино') return `Лена:  я буду ${question}.`;
        return super.ask(question);
    }
}


const beer = new Beer();
const cognac = new Cognac();
const wine = new Wine();
wine.whatElse(cognac).whatElse(beer);
const drinks = ['кофе', 'вино', 'пиво', 'коньяк'];
for (const drink of drinks) {
    console.log(`Кто будет ${drink}?`);
    const answer = wine.ask(drink);
    console.log(`${answer}`);
}