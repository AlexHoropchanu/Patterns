class Сigaretes{
    public takePack(): string {
        return"Взять пачку"
    }
    public openPack(): string {
        return"Открыть пачку"
    }
    public  takeSigaretes(): string {
        return"Взять сигарету"
    }
    public  closePack(): string {
        return"Закрыть пачку"
    }
}
class Lighter{
    public takeLighter(): string {
        return "Взять зажигалку"
    }
    public  lightLighter(): string {
        return "Зажечь зажигалку"
    }
    public  lightUp(): string{
    return "Подкурить"
    }
    public  putOutLighter(): string {
    return "Потушить зажигалку"
    }
}
class SmokeFacade{
    constructor(private сigaretes: Сigaretes, private lighter: Lighter) {
    }
    public smoked(): void {
        console.log(
        this.сigaretes.takePack(),
        this.сigaretes.openPack(),
        this.сigaretes.takeSigaretes(),
        this.lighter.takeLighter(),
        this.lighter.lightLighter(),
        this.lighter.lightUp(),
        this.lighter.putOutLighter()
        )
        
    }
    public stopSmoked(): void {
        console.log(this.сigaretes.closePack())
    }
}
let cigaretes = new Сigaretes();
let lighter = new Lighter();
let smoke = new SmokeFacade(cigaretes, lighter);
smoke.smoked()
smoke.stopSmoked()