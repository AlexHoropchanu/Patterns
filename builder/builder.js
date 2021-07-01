var Pasta = /** @class */ (function () {
    function Pasta() {
        this.size = 1;
        this.meat = false;
        this.ketchup = false;
        this.chees = false;
    }
    return Pasta;
}());
var PastaBuilder = /** @class */ (function () {
    function PastaBuilder() {
        this.pasta = new Pasta();
    }
    PastaBuilder.prototype.setSize = function (size) {
        this.pasta.size = size;
        return this;
    };
    PastaBuilder.prototype.addMeat = function () {
        this.pasta.meat = true;
        return this;
    };
    PastaBuilder.prototype.addKetchup = function () {
        this.pasta.ketchup = true;
        return this;
    };
    PastaBuilder.prototype.addChees = function () {
        this.pasta.chees = true;
        return this;
    };
    PastaBuilder.prototype.build = function () {
        return this.pasta;
    };
    return PastaBuilder;
}());
var pastaAll = new PastaBuilder().setSize(2).addMeat().addKetchup().addChees().build();
console.log(pastaAll);
var pastaChees = new PastaBuilder().addChees().build();
console.log(pastaChees);
