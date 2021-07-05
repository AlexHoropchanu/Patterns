var PastaComposite = /** @class */ (function () {
    function PastaComposite() {
        this.children = [];
    }
    PastaComposite.prototype.add = function (pasta) {
        this.children.push(pasta);
    };
    PastaComposite.prototype.remove = function (pasta) {
        this.children.splice(this.children.indexOf(pasta), 1);
    };
    PastaComposite.prototype.eat = function () {
        this.children.forEach(function (element) {
            element.eat();
        });
    };
    return PastaComposite;
}());
var Spagetti = /** @class */ (function () {
    function Spagetti(name) {
        this.name = name;
    }
    Spagetti.prototype.eat = function () {
        console.log(this.name);
    };
    return Spagetti;
}());
var spagetti1 = new Spagetti("Карбонара");
var spagetti2 = new Spagetti("Спагетти с мясом");
var spagetti3 = new Spagetti("Спагетти с сыром");
var pastaComposite = new PastaComposite();
pastaComposite.add(spagetti1);
pastaComposite.add(spagetti2);
pastaComposite.add(spagetti3);
var pastaComposite2 = new PastaComposite();
pastaComposite2.add(spagetti1);
pastaComposite2.add(spagetti2);
pastaComposite2.add(spagetti3);
pastaComposite2.remove(spagetti1);
pastaComposite.remove(spagetti3);
pastaComposite.eat();
