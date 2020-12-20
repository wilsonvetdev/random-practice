class Node {
    constructor(value) {
        this.value = value
        this.next = null
    }
}

class LinkedList {
    constructor() {
        this.head = null
        this.tail = null
        this.length = 0
    }

    push(value) {
        if(!this.head && !this.tail) {
            this.head = value 
            this.tail = value 
            this.length += 1
        } else {
            let temp = this.head 
            this.head = value 
            this.head.next = temp
            this.length += 1
        }
    }

    pop() {
        if(!this.head && !this.tail) {
            return null
        } else if(this.head.value === this.tail.value) {
            let poppedNode = this.head
            this.head = null 
            this.tail = null
            this.length = 0
            return `POPPED NODE -----> ${poppedNode}`
        } else {
            let currentNode = this.head
            while(currentNode.next) {
                if(!currentNode.next.next) {
                    let poppedNode = currentNode.next
                    currentNode.next = null 
                    this.tail = currentNode
                    this.length -= 1
                    return `POPPED NODE -----> ${poppedNode.value}`
                }
                currentNode = currentNode.next
            }
        }
    }

    _find(value, test=this._test) {
        let currentNode = this.head
        while()
    }

    _test(a, b) {
        return a === b
    }

    testIndex(search, __, i) {
        return search === i
    }

    get(index) {

    }

    delete(index) {

    }


}
