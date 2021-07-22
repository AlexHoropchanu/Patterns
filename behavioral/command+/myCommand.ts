/*поведенческий паттерн - превращает запросы в объекты, позволяя передавать их как аргументы при вызове методов*/
interface Sevice {
    take(): void;
}
class Order implements Sevice {
    constructor(private receiver: Mechanic, private order: string) {}
    public take(): void {
        console.log(`Ваш заказ (${this.order}) принят.`);
        this.receiver.prepare(this.order);
    }
}
class Mechanic {
    public prepare(order: string): void {
        console.log(`Я получил заказ на (${order}.)`);
    }
}
class Administrator {
    private order: Order;
    public writeOrder(order: Order): Administrator {
        this.order = order;
        return this;
    }
    public serveClient(): void {
        this.order.take();
    }
}

//test
const administrator = new Administrator();
const mechanic = new Mechanic();
const order = new Order(mechanic, 'замена стоек');
administrator.writeOrder(order).serveClient();
/* output
Ваш заказ (стандартный обед) принят. Передаю на кухню
Повар: заказ получен - готовлю (стандартный обед.)
*/
