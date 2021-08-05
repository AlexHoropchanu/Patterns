var Iphone = /** @class */ (function () {
    function Iphone() {
    }
    Iphone.prototype.call = function () {
        console.log('Функция звонить');
    };
    Iphone.prototype.accept = function (operation) {
        operation.visitIphone(this);
    };
    return Iphone;
}());
var Samsung = /** @class */ (function () {
    function Samsung() {
    }
    Samsung.prototype.call = function () {
        console.log('Функция звонить');
    };
    Samsung.prototype.accept = function (operation) {
        operation.visitSamsung(this);
    };
    return Samsung;
}());
var Call = /** @class */ (function () {
    function Call() {
    }
    Call.prototype.visitIphone = function (iphone) {
        iphone.call();
    };
    Call.prototype.visitSamsung = function (samsung) {
        samsung.call();
    };
    return Call;
}());
var iphone = new Iphone();
var samsung = new Samsung();
var call = new Call();
iphone.accept(call);
samsung.accept(call);
