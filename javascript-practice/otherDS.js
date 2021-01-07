/** Class representing a Stack. */

class Stack {

    constructor() {
        this._storage = {};
        this._size = 0
    }
    /*
     * Adds a new value at the end of the 
     * stack
     * @param {*} value the value to push
     */
    push(value) {
        if(!this._size) {
            this._storage[this._size] = value 
            this._size++
        } else {
            this._size++
            this._storage[this._size - 1] = value 
        }
    }

    /*
     * Removes the value at the end of the stack and returns it
     * @return {*} the last and newest value in the stack
     */
    pop() {
        if(!this.size) throw new Error('Nothing in here to pop')
        let value = this._storage[this._size - 1]
        delete this._storage[this._size - 1]
        this._size--
        return value
    } 
    /*
     * Returns the value at the end of the stack without removing it
     * @return {*} the last and newest value in the stack
     */
    peek() {
        return this._storage[this._size - 1]
    }
}

let stack = new Stack
stack.push(0)
stack.push(1)
stack.push(2)
console.log(stack)
console.log(stack.pop())
console.log(stack.peek())
console.log(stack.pop())
stack.pop()