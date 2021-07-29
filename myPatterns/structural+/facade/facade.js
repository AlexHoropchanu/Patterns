var Сigaretes = /** @class */ (function () {
    function Сigaretes() {
    }
    Сigaretes.prototype.takePack = function () {
        return "Взять пачку";
    };
    Сigaretes.prototype.openPack = function () {
        return "Открыть пачку";
    };
    Сigaretes.prototype.takeSigaretes = function () {
        return "Взять сигарету";
    };
    Сigaretes.prototype.closePack = function () {
        return "Закрыть пачку";
    };
    return Сigaretes;
}());
var Lighter = /** @class */ (function () {
    function Lighter() {
    }
    Lighter.prototype.takeLighter = function () {
        return "Взять зажигалку";
    };
    Lighter.prototype.lightLighter = function () {
        return "Зажечь зажигалку";
    };
    Lighter.prototype.lightUp = function () {
        return "Подкурить";
    };
    Lighter.prototype.putOutLighter = function () {
        return "Потушить зажигалку";
    };
    return Lighter;
}());
var SmokeFacade = /** @class */ (function () {
    function SmokeFacade(сigaretes, lighter) {
        this.сigaretes = сigaretes;
        this.lighter = lighter;
    }
    SmokeFacade.prototype.smoked = function () {
        console.log(this.сigaretes.takePack(), this.сigaretes.openPack(), this.сigaretes.takeSigaretes(), this.lighter.takeLighter(), this.lighter.lightLighter(), this.lighter.lightUp(), this.lighter.putOutLighter());
    };
    SmokeFacade.prototype.stopSmoked = function () {
        console.log(this.сigaretes.closePack());
    };
    return SmokeFacade;
}());
var cigaretes = new Сigaretes();
var lighter = new Lighter();
var smoke = new SmokeFacade(cigaretes, lighter);
smoke.smoked();
smoke.stopSmoked();
//# sourceMappingURL=facade.js.map