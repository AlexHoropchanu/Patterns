class Сigaretes{
    public takePack() {
        console.log("Взять пачку")
    }
    public openPack() {
        console.log("Открыть пачку")
    }
    public  takeSigaretes() {
        console.log("Взять сигарету")
    }
    public  closePack() {
        console.log("Закрыть пачку")
    }
}
class Lighter{
    public takeLighter() {
        console.log("Взять зажигалку")
    }
    public  lightLighter() {
        console.log("Зажечь зажигалку")
    }
    public  lightUp(){
    console.log("Подкурить")
    }
    public  putOutLighter() {
        console.log("Потушить зажигалку")
    }
}
class SmokeFacade{
    constructor(private сigaretes: Сigaretes, private lighter: Lighter) {
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