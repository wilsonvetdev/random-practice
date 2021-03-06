/*
    Make a function that computes a factorial recursively.
    A factorial is when you take a number n and multiply by each preceding integer until you hit one.
    n * (n-1) * (n-2) ... * 3 * 2 * 1
    
    Call the function factorial
    
    factorial(1) = 1
    factorial(2) = 2
    factorial(3) = 6 
*/

function computeFactorial(num) { // with a loop
    let result = 1

    for(let i = 2; i <= num; i++) {
        result *= i
    }

    return result 
}

function factorial(n) { // with recursion
    if (n < 2) return 1;
    return n * factorial(n-1)
}

function fibonacci(n) {
    if(n <= 2) {
        return 1;
    }
    else {
        return fibonacci(n - 1) + fibonacci(n - 2);
    }
}

// console.log(fibonacci(20))

// Task: rewrite this function so that it uses a loop rather than recursion

function joinElements(array, joinString) { // with recursion

    function recurse(index, resultSoFar) {
    resultSoFar += array[index];

    if(index === array.length - 1) {
        return resultSoFar;
    } else {
        return recurse(index + 1, resultSoFar + joinString);
    }
    }

    return recurse(0, '');
}

// console.log(joinElements(['s','cr','t cod', ' :) :)'], 'e'))

// with a loop

const joinElementss = (array, joinString) => {

    let resultSoFar = ''

    for(let i = 0; i < array.length - 1; i++) {
        resultSoFar += array[i]
        resultSoFar += joinString
    }

    return resultSoFar += array[array.length - 1]
}

// console.log(joinElementss(['s','cr','t cod', ' :) :)'], 'e'))

//Task: Transform this simple sorting algorithm into a unique sort. 
// It should not return any duplicate values in the sorted array.

//input: [1,5,2,1] => output: [1,2,5]
//input: [4,2,2,3,2,2,2] => output: [2,3,4]

const uniqSort = function(arr) {
    const breadcrumbs = {};
    
    let sortedArray = arr.sort((a, b) => a - b)

    let newArray = []

    for(let i = 0; i < sortedArray.length; i++) {
        if(!breadcrumbs[sortedArray[i]]) {
            breadcrumbs[sortedArray[i]] = true
            newArray.push(sortedArray[i])
        }
    }

    return newArray
}

// console.log(uniqSort([4,2,2,3,2,2,2])) // => [2,3,4] 


// Memoization: caching the value that a function returns 
// Caching: saving a value to an object, array that's not a result of a function 

// Task 1: Write a function, times10, that takes an argument, n, and multiples n times 10
// a simple multiplication fn
const times10 = n =>  n * 10 
const times3 = n =>  n * 3

// console.log('~~~~~~~~~~~~~~TASK 1~~~~~~~~~~~~~~')
// console.log('times10 returns:', times10(9))

// Task 2: Use an object to cache the results of your times10 function. 
// protip 1: Create a function that checks if the value for n has been calculated before.
// protip 2: If the value for n has not been calculated, calculate and then save the result in the cache object.

// const cache = {};

// const memoTimes10 = (n) => {
//     if(!cache[n]) { //n in(operator) cache
//         cache[n] = times10(n)
//     }
//     return cache[n]
// }

// console.log('~~~~~~~~~~~~~~TASK 2~~~~~~~~~~~~~~');
// console.log('Task 2 calculated value:', memoTimes10(9));	// calculated
// console.log('Task 2 cached value:', memoTimes10(9));	// cached

// Task 3: Clean up your global scope by moving your cache inside your function.
// protip: Use a closure to return a function that you can call later.

// Task 4: Make your memo function generic and accept the times10 function as a callback rather than defining the n * 10 logic inside the if/else or pulling it in from the global scope.

// protip: Take advantage of the fact that parameters are saved in the closure as well, just like the cache from the previous example.

const memoizedClosure = (cb) => {
    const cache = {}

    return (n) => {
        if(!cache[n]) { //n in(operator) cache also works ex. if(n in cache)
            cache[n] = cb(n)
        }
        return cache
    }

}

const memoClosureTimes10 = memoizedClosure(times10);
const memoClosureTimes3 = memoizedClosure(times3);
// console.log('~~~~~~~~~~~~~~TASK 3~~~~~~~~~~~~~~');
// try {
//     console.log('Task 3 calculated value:', memoClosureTimes10(10));	// calculated
//     console.log('Task 3 cached value:', memoClosureTimes10(10));	// cached
//     console.log(memoClosureTimes10(4))
//     console.log(memoClosureTimes10(6))
//     console.log(memoClosureTimes10(10))
//     console.log(memoClosureTimes3(3))
//     console.log(memoClosureTimes3(3))
//     console.log(memoClosureTimes3(9))
// } catch(e) {
//     console.error('Task 3:', e);
// }

// TASK: Linear Search exercise

function linearSearch(list, item) {
    // loop through the list and compare the item to each element of the list
    // if item === list[i], then return the list[i]
    for(let i = 0; i < list.length; i++) {
        if(item === list[i]) {
            return list[i]
        }
    }

}

// console.log(linearSearch([2, 6, 7, 90, 103], 90))

// Binary Search 

function binarySearch(list, item) {
    let min = 0
    let max = list.length - 1 
    let guess;

    while(min <= max) {
        guess = Math.floor((min + max) / 2)
        
        if(list[guess] === item) {
            return guess
        }
        if (list[guess] < item) {  
            min = guess + 1
        } else {
            max = guess - 1
        }
        
    }

    return -1 

}

// console.log(binarySearch([2, 3, 6, 7, 9, 10, 56, 78, 101, 500, 600], 101))


// Write a function, makeChange, that returns an integer that represents the least number of coins that add up
// to an amount where the amount is always divisible by 5.

// Greedy solution to this is to simply choose the largest coin first.

const makeChange = (coins, amount) => {
    coins.sort((a, b) => b - a) // sort the array of coins into descending order
    let coinTotal = 0  // coin counter
    let i = 0  // index

    while (amount > 0) {
        if (coins[i] <= amount) {
            amount -= coins[i]
            coinTotal++
        } else {  // if current coin is less than or equal to the amount, mins from amount and increment coin counter
            i++   // else move on to the next coin in the array, repeat until amount reaches 0.
        }
    }

    return coinTotal

}

// console.log(makeChange([5, 10, 25], 50))
// Would these values work with the greedy solution? coin values: 1, 6, 10, inputAmount: 12

// Brute Force Approach: calculate every single combination possible and keep track of the minimum
// Dynamic Approach: cache values to avoid repeated calculations

// Array Exercise 

class ArrayList {
    constructor() {
        this.length = 0
        this.data = {}
    }

    push(value) {
        this.data[this.length] = value
        this.length++
        return this.data
    }

    pop() {
        let poppedValue = this.data[this.length - 1]
        delete this.data[this.length-1]
        this.length--
        return poppedValue
    }

    get(index) {
        return this.data[index]
    }

    delete(index) {
        this.data[index] = undefined
        this._collapseTo(index)
        return this.data
    }

    _collapseTo(index) {
        // {0:"apple", 1:"banana", 2:"pear", 3:"grape", 4:"mango", 5: "melon"}
        // {0:"apple", 1:"banana", 2:undefined, 3:"grape", 4:"mango", 5: "melon"}
        for(let i = index; i < this.length; i++) {
            this.data[i] = this.data[i + 1]
            if(this.data[i] === undefined) {
                delete this.data[i]
                this.length--
            }
        }
    }

}

let array = new ArrayList 
array.push('apple')
array.push('banana')
array.push('pear')
array.push('grape')
array.push('mango')
console.log(array)
console.log('return value of popped ---->', array.pop())
console.log('DELETED index 3', array.delete(3))
console.log('DELETED index 1', array.delete(1))
console.log('PUSHING', array.push('rice'))
console.log('PUSHING', array.push('ricecake'))
console.log('PUSHING', array.push('pork'))
console.log('ARRAY LENGTH --->', array.length)
console.log(array.pop())


// Lone Integer Exercise
// You are given a list of integers nums where each integer occurs exactly three times except for one which occurs once. Return the lone integer.
// Constraints:
// n ≤ 100,000 where n is length of nums
// Example 1: 
// Input: nums = [2, 2, 2, 9, 5, 5, 5]
// Output: 9

// class Solution {
//     solve(nums) {
//         let cache = {}
//         for(const num of nums) {
//             if(!cache[num]) {
//                 cache[num] = 1
//             } else {
//                 cache[num]++
//             }
//         }
        
//         for(const key in cache) {
//             if(cache[key] === 1) {
//                 return Number(key)
//             }
//         }
        
//         return cache
//     }
// }

// // Given a positve integer n, find the length of its Collatz sequence. The Collatz sequence is generated sequentially where

// // n = n / 2 if n is even
// // n = 3 * n + 1 if n is odd

// class Solution {
//     solve(n) {
//         let array = [n]
        
//         // given a positive integer
//         // I think a while a loop will be good here
//         // while the last value of the array is not 1, keep looping
//         // inside the loop - do the work checking to see if n is even or odd
//         // if even, n = n / 2 and push to the array
//         // if odd, 3 * n + 1 and push to the array
//         // at the end, return the length of the entire array
        
//         while(n !== 1) {
//             if(n % 2 === 0) {
//                 n = n / 2
//             } else {
//                 n = (3 * n + 1)
//             }
//                 array.push(n) 
//         }
        
//         return array.length
//     }
    
// }
