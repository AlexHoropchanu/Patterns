var Monkey = /** @class */ (function () {
    function Monkey() {
    }
    Monkey.prototype.speak = function () {
        console.log('ya-a-a');
    };
    Monkey.prototype.accept = function (operation) {
        operation.visitMonkey(this);
    };
    return Monkey;
}());
var Lion = /** @class */ (function () {
    function Lion() {
    }
    Lion.prototype.speak = function () {
        console.log('argh');
    };
    Lion.prototype.accept = function (operation) {
        operation.visitLion(this);
    };
    return Lion;
}());
var Dolphin = /** @class */ (function () {
    function Dolphin() {
    }
    Dolphin.prototype.speak = function () {
        console.log('chick-chirick');
    };
    Dolphin.prototype.accept = function (operation) {
        operation.visitDolphin(this);
    };
    return Dolphin;
}());
var Speak = /** @class */ (function () {
    function Speak() {
    }
    Speak.prototype.visitMonkey = function (monkey) {
        monkey.speak();
    };
    Speak.prototype.visitLion = function (lion) {
        lion.speak();
    };
    Speak.prototype.visitDolphin = function (dolphin) {
        dolphin.speak();
    };
    return Speak;
}());
var monkey = new Monkey();
var lion = new Lion();
var dolphin = new Dolphin();
var speak = new Speak();
monkey.accept(speak);
lion.accept(speak);
dolphin.accept(speak);
