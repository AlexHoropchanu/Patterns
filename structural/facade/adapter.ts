class Сigaretes{
    takePack() {
        console.log("Взять пачку")
    }
    openPack() {
        console.log("Открыть пачку")
    }
    takeSigaretes() {
        console.log("Взять сигарету")
    }
    closePack() {
        console.log("Закрыть пачку")
    }
}
class Lighter{
    takeLighter() {
        console.log("Взять зажигалку")
    }
    lightLighter() {
        console.log("Зажечь зажигалку")
    }
    lightUp(){
    console.log("Подкурить")
    }
    putOutLighter() {
        console.log("Потушить зажигалку")
    }
}
class SmokeFacade{
    private сigaretes: Сigaretes;
    private lighter: Lighter;
    constructor(сigaretes: Сigaretes, lighter: Lighter) {
        this.сigaretes = сigaretes
        this.lighter = lighter
    }
    public smoked() {
        this.сigaretes.takePack()
        this.сigaretes.openPack()
        this.сigaretes.takeSigaretes()
        this.lighter.takeLighter()
        this.lighter.lightLighter()
        this.lighter.lightUp()
        this.lighter.putOutLighter()
    }
    public stopSmoked() {
        this.сigaretes.closePack()
        this.lighter.putOutLighter()
    }
}
let cigaretes = new Сigaretes();
let lighter = new Lighter();
let smoke = new SmokeFacade(cigaretes, lighter);
console.log(smoke.smoked())
console.log(smoke.stopSmoked())