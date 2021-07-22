var Order = /** @class */ (function () {
    function Order(receiver, order) {
        this.receiver = receiver;
        this.order = order;
    }
    Order.prototype.take = function () {
        console.log("\u0412\u0430\u0448 \u0437\u0430\u043A\u0430\u0437 (" + this.order + ") \u043F\u0440\u0438\u043D\u044F\u0442.");
        this.receiver.prepare(this.order);
    };
    return Order;
}());
var Mechanic = /** @class */ (function () {
    function Mechanic() {
    }
    Mechanic.prototype.prepare = function (order) {
        console.log("\u042F \u043F\u043E\u043B\u0443\u0447\u0438\u043B \u0437\u0430\u043A\u0430\u0437 \u043D\u0430 (" + order + ".)");
    };
    return Mechanic;
}());
var Administrator = /** @class */ (function () {
    function Administrator() {
    }
    Administrator.prototype.writeOrder = function (order) {
        this.order = order;
        return this;
    };
    Administrator.prototype.serveClient = function () {
        this.order.take();
    };
    return Administrator;
}());
//test
var administrator = new Administrator();
var mechanic = new Mechanic();
var order = new Order(mechanic, 'замена стоек');
administrator.writeOrder(order).serveClient();
/* output
Ваш заказ (стандартный обед) принят. Передаю на кухню
Повар: заказ получен - готовлю (стандартный обед.)
*/
