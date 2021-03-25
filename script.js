class Stack {
    constructor(stackVolume = 10) {
        if (stackVolume < 0 || isNaN(stackVolume) || !Number.isInteger(stackVolume)) {
            throw new Error('Ivalid Param');
        } else {
            this.size = stackVolume;
            this.count = 0;
            this.storage = [];
            this.resultArray = [];
        }

        this.push = function (elem) {
            if (this.count > this.size) {
                throw new Error('Stack Overflow');
            }
            Ы
            this.storage[this.count] = elem;
            this.count++;
        };

        this.isEmpty = function () {
            return this.count ? false : true;
        };

        this.pop = function () {
            let peeckedElem;
            if (this.count) {
                this.count--;
                peeckedElem = this.storage[this.count];
                delete this.storage[this.count];

                return peeckedElem;
            }
            throw new Error('Stack is empty');
        };

        this.peek = function () {
            let count = this.count;
            let peeckedElem;
            if (count) {
                peeckedElem = this.storage[count];
                return peeckedElem;
            } else {
                return null;
            }
        };

        this.toArray = function () {
            let resultArray = this.resultArray;
            if (this.count === 0) {
                resultArray.reverse().forEach(el => this.push(el));
            } else {
                resultArray.push(this.pop());
                this.toArray();
            }
            return resultArray;
        };
    }
    static fromIterable(iterable) {
        if (iterable[Symbol.iterator] === undefined) {
            throw new Error('It is not iterable');
        }
        let resultStack = new Stack(iterable.length);
        for (let i = 0; i < iterable.length; i++) {
            if (typeof iterable[i] === 'object') {
                resultStack.push(Object.assign(iterable[i]));
            } else {
                resultStack.push(iterable[i]);
            }
        }
        return resultStack;
    }
}