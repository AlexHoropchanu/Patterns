var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var GameAI = /** @class */ (function () {
    function GameAI() {
    }
    GameAI.prototype.turn = function () {
        this.collectResources();
        this.buildStructures();
        this.buildUnits();
        this.attack();
    };
    GameAI.prototype.collectResources = function () {
        console.log('собираю ресурсы');
    };
    GameAI.prototype.attack = function () {
        this.sendScouts();
        this.sendWarriors();
    };
    return GameAI;
}());
var OrcsAI = /** @class */ (function (_super) {
    __extends(OrcsAI, _super);
    function OrcsAI() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    OrcsAI.prototype.buildStructures = function () {
        console.log('строю орчьи здания');
    };
    OrcsAI.prototype.buildUnits = function () {
        console.log('создаю орчат');
    };
    OrcsAI.prototype.sendScouts = function () {
        console.log('отправляю 15 орчат на осмотр местности');
    };
    OrcsAI.prototype.sendWarriors = function () {
        console.log('отправляю 5 орков уничтожать и крушить');
    };
    return OrcsAI;
}(GameAI));
var MonstersAI = /** @class */ (function (_super) {
    __extends(MonstersAI, _super);
    function MonstersAI() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MonstersAI.prototype.buildStructures = function () {
        console.log('рою пещеры');
    };
    MonstersAI.prototype.buildUnits = function () {
        console.log('создаю монстрят');
    };
    MonstersAI.prototype.sendScouts = function () {
        console.log('отправляю 2 монстрят на осмотр местности');
    };
    MonstersAI.prototype.sendWarriors = function () {
        console.log('отправляю 1 монстра уничтожать и крушить');
    };
    return MonstersAI;
}(GameAI));
var monster = new MonstersAI();
monster.turn();
console.log('');
var orc = new OrcsAI();
orc.turn();
//# sourceMappingURL=template.js.map