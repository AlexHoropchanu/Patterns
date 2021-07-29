var Cachee = /** @class */ (function () {
    function Cachee(type) {
        if (type === void 0) { type = 'image'; }
        this.type = type;
    }
    Cachee.prototype.setCache = function () {
        console.log("\u0421\u043E\u0437\u0434\u0430\u043D \u043A\u044D\u0448 \u0442\u0438\u043F\u0430 " + this.type + ".");
    };
    return Cachee;
}());
var CacheAdd = /** @class */ (function () {
    function CacheAdd() {
        this.cache = [];
    }
    CacheAdd.prototype.getCacheType = function (type) {
        if (type === void 0) { type = 'image'; }
        for (var i = this.cache.length - 1; i >= 0; i--) {
            if (this.cache[i].type == type) {
                console.log('Возврат закешиорованного объекта.');
                console.log(this.cache[i]);
                return this.cache[i];
            }
        }
        console.log('\nСоздание нового и добавление в кеш объекта.\n');
        this.cache.push(new Cachee(type));
    };
    return CacheAdd;
}());
var factory = new CacheAdd;
factory.getCacheType();
factory.getCacheType('image');
factory.getCacheType('login');
factory.getCacheType('password');
//# sourceMappingURL=flyweight.js.map