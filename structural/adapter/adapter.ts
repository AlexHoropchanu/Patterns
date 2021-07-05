interface InterfaceSamsung{
    useTypeC()
}
interface InterfaceIphone{
    useLightning()
}
class Samsung implements InterfaceSamsung{
    useTypeC() {
        console.log("Samsung using TypeC")
    }
}
class Iphone implements InterfaceIphone{
    useLightning() {
         console.log("Iphone using Lightning")
    }
}
class UsbTypeCAdapter implements InterfaceIphone{
    samsungDevice: Samsung;
    constructor(samsung: Samsung) {
        this.samsungDevice = samsung
    }
    public useLightning() {
        this.samsungDevice.useTypeC
        console.log("Меня обманули я использую lightning вместо TypeC")
    }
}
class LightningAdapter implements InterfaceSamsung{
    iphoneDevice: Iphone;
    constructor(iphone: Iphone) {
        this.iphoneDevice = iphone
    }
    public useTypeC() {
        this.iphoneDevice.useLightning
         console.log("Меня обманули я использую TypeC вместо lightning")
    }
}
const samsung = new Samsung()
const iphone = new Iphone()
const lightningAdapter = new LightningAdapter(iphone) 
const usbCAdapter = new UsbTypeCAdapter(samsung)
usbCAdapter.useLightning()
lightningAdapter.useTypeC()