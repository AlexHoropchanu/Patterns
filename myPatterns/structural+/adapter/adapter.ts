class Monitor{
    hdmi(): string {
        return 'use HDMI'
    }
}
class Tv{
    vga(): string {
        return 'use VGA'
    }
}
class Adapter extends Monitor{
    private tv: Tv
    constructor(tv: Tv) {
        super()
        this.tv = tv
    }
    public hdmi(): string {
        const result = this.tv.vga()
        return result
    }
}
const monitor = new Monitor
const tv = new Tv
console.log(monitor.hdmi(), tv.vga())
const adapter = new Adapter(tv)
console.log(adapter.hdmi())