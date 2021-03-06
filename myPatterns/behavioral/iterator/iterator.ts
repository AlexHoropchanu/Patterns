class myIterator {
    private array: Array<String | Number> = []
    position: number

    constructor(array: Array<String | Number>) {
        this.array = array
        this.position = 0
    }

    next(): any {
        let done = this.position >= this.array.length
        if (!done) {
            const currentPosition = this.position
            this.position++
            return {
                value: this.array[currentPosition],
            }
        } else {
            return {
                value: null,
            }
        }
    }

    rewind(): void {
        this.position = 0
        console.log(this.position)
    }

}

let array = [5, 'seven', 'Marc', 'Hello', 134, 0.6]

let newIterator = new myIterator(array)

console.log(newIterator.next())
console.log(newIterator.next())
newIterator.rewind()