var Samsung = /** @class */ (function () {
    function Samsung() {
    }
    Samsung.prototype.useTypeC = function () {
        console.log("Samsung using microUSB");
    };
    return Samsung;
}());
var Iphone = /** @class */ (function () {
    function Iphone() {
    }
    Iphone.prototype.useLightning = function () {
        console.log("Iphone using Lightning");
    };
    return Iphone;
}());
var UsbTypeCAdapter = /** @class */ (function () {
    function UsbTypeCAdapter(samsung) {
        this.samsungDevice = samsung;
    }
    UsbTypeCAdapter.prototype.useLightning = function () {
        this.samsungDevice.useTypeC;
        console.log("Меня обманули я использую lightning вместо TypeC");
    };
    return UsbTypeCAdapter;
}());
var LightningAdapter = /** @class */ (function () {
    function LightningAdapter(iphone) {
        this.iphoneDevice = iphone;
    }
    LightningAdapter.prototype.useTypeC = function () {
        this.iphoneDevice.useLightning;
        console.log("Меня обманули я использую TypeC вместо lightning");
    };
    return LightningAdapter;
}());
var samsung = new Samsung();
var iphone = new Iphone();
var lightningAdapter = new LightningAdapter(iphone);
var usbCAdapter = new UsbTypeCAdapter(samsung);
usbCAdapter.useLightning();
lightningAdapter.useTypeC();
