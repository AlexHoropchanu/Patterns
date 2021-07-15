var RussianСook = /** @class */ (function () {
    function RussianСook() {
    }
    RussianСook.prototype.makePotato = function () {
        console.log('Русский повар сделает картошку');
    };
    RussianСook.prototype.makeBeef = function () {
        console.log('Русский повар сделает мясо');
    };
    RussianСook.prototype.makePasta = function () {
        console.log('Русский повар сделает пасту');
    };
    return RussianСook;
}());
var AmericanСook = /** @class */ (function () {
    function AmericanСook() {
    }
    AmericanСook.prototype.makePotato = function () {
        console.log('Американский повар сделает картошку');
    };
    AmericanСook.prototype.makeBeef = function () {
        console.log('Американский повар сделает мясо');
    };
    AmericanСook.prototype.makePasta = function () {
        console.log('Американский повар сделает пасту');
    };
    return AmericanСook;
}());
var GoodClent = /** @class */ (function () {
    function GoodClent(client) {
        this.client = client;
    }
    GoodClent.prototype.buyPotato = function () {
        new this.client.makePotato();
    };
    GoodClent.prototype.buyBeef = function () {
        new this.client.makeBeef();
    };
    GoodClent.prototype.buyPasta = function () {
        new this.client.makePasta();
    };
    return GoodClent;
}());
var russian = new GoodClent(new RussianСook);
var american = new GoodClent(new AmericanСook);
russian.buyPotato();
russian.buyBeef();
russian.buyPasta();
american.buyPotato();
american.buyBeef();
american.buyPasta();
