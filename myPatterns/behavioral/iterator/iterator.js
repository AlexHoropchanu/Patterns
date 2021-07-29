var myIterator = /** @class */ (function () {
    function myIterator(array) {
        this.array = [];
        this.array = array;
        this.position = 0;
    }
    myIterator.prototype.next = function () {
        var done = this.position >= this.array.length;
        if (!done) {
            var currentPosition = this.position;
            this.position++;
            return {
                value: this.array[currentPosition],
                done: done
            };
        }
        else {
            return {
                value: null,
                done: done
            };
        }
    };
    myIterator.prototype.rewind = function () {
        this.position = 0;
        console.log(this.position);
    };
    return myIterator;
}());
var array = [5, 'seven', 'Marc', 'Hello', 134, 0.6];
var newIterator = new myIterator(array);
console.log(newIterator.next());
console.log(newIterator.next());
console.log(newIterator.rewind());
//# sourceMappingURL=iterator.js.map