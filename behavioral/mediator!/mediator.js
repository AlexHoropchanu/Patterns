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
var ConcreteMediator = /** @class */ (function () {
    function ConcreteMediator(firstComponent, secondComponent) {
        this.firstComponent = firstComponent;
        this.firstComponent.setMediator(this);
        this.secondComponent = secondComponent;
        this.secondComponent.setMediator(this);
    }
    ConcreteMediator.prototype.notify = function (sender, event) {
        if (event === 'A') {
            console.log('Посредник среагировал на действие "А" и вызвал операции:');
            this.secondComponent.doC();
        }
        if (event === 'D') {
            console.log('Посредник среагировал на действие "D" и вызвал операции:');
            this.firstComponent.doB();
            this.secondComponent.doC();
        }
    };
    return ConcreteMediator;
}());
var BaseComponent = /** @class */ (function () {
    function BaseComponent(mediator) {
        if (mediator === void 0) { mediator = null; }
        this.mediator = mediator;
    }
    BaseComponent.prototype.setMediator = function (mediator) {
        this.mediator = mediator;
    };
    return BaseComponent;
}());
var firstComponent = /** @class */ (function (_super) {
    __extends(firstComponent, _super);
    function firstComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    firstComponent.prototype.doA = function () {
        console.log('Компонент "1" делает действие "А"');
        this.mediator.notify(this, 'A');
    };
    firstComponent.prototype.doB = function () {
        console.log('Компонент "1" делает действие "B"');
        this.mediator.notify(this, 'B');
    };
    return firstComponent;
}(BaseComponent));
var secondComponent = /** @class */ (function (_super) {
    __extends(secondComponent, _super);
    function secondComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    secondComponent.prototype.doC = function () {
        console.log('Компонент "2" делает действие "C"');
        this.mediator.notify(this, 'C');
    };
    secondComponent.prototype.doD = function () {
        console.log('Компонент "2" делает действие "D"');
        this.mediator.notify(this, 'D');
    };
    return secondComponent;
}(BaseComponent));
var component1 = new firstComponent();
var component2 = new secondComponent();
var mediator = new ConcreteMediator(component1, component2);
console.log('Я сделал действие "А"');
component1.doA();
console.log('');
console.log('Я сделал действие "D".');
component2.doD();
