var Human = /** @class */ (function () {
    function Human(name, age, weight) {
        this.name = name;
        this.age = age;
        this.weight = weight;
    }
    Human.prototype.clone = function () {
        return Object.create(this);
    };
    return Human;
}());
var human = new Human('Dima', 22, 80);
var humanClone = human.clone();
console.log(human === humanClone);
console.log(human);
humanClone.name = "Vasya";
console.log(humanClone);
