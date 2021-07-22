var Сigaretes = /** @class */ (function () {
    function Сigaretes() {
    }
    Сigaretes.prototype.takePack = function () {
        console.log("Взять пачку");
    };
    Сigaretes.prototype.openPack = function () {
        console.log("Открыть пачку");
    };
    Сigaretes.prototype.takeSigaretes = function () {
        console.log("Взять сигарету");
    };
    Сigaretes.prototype.closePack = function () {
        console.log("Закрыть пачку");
    };
    return Сigaretes;
}());
var Lighter = /** @class */ (function () {
    function Lighter() {
    }
    Lighter.prototype.takeLighter = function () {
        console.log("Взять зажигалку");
    };
    Lighter.prototype.lightLighter = function () {
        console.log("Зажечь зажигалку");
    };
    Lighter.prototype.lightUp = function () {
        console.log("Подкурить");
    };
    Lighter.prototype.putOutLighter = function () {
        console.log("Потушить зажигалку");
    };
    return Lighter;
}());
var SmokeFacade = /** @class */ (function () {
    function SmokeFacade(сigaretes, lighter) {
        this.сigaretes = сigaretes;
        this.lighter = lighter;
    }
    SmokeFacade.prototype.smoked = function () {
        this.сigaretes.takePack();
        this.сigaretes.openPack();
        this.сigaretes.takeSigaretes();
        this.lighter.takeLighter();
        this.lighter.lightLighter();
        this.lighter.lightUp();
        this.lighter.putOutLighter();
    };
    SmokeFacade.prototype.stopSmoked = function () {
        this.сigaretes.closePack();
    };
    return SmokeFacade;
}());
var cigaretes = new Сigaretes();
var lighter = new Lighter();
var smoke = new SmokeFacade(cigaretes, lighter);
console.log(smoke.smoked());
console.log(smoke.stopSmoked());
