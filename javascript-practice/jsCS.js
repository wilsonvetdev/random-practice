/*
    Make a function that computes a factorial recursively.
    A factorial is when you take a number n and multiply by each preceding integer until you hit one.
    n * (n-1) * (n-2) ... * 3 * 2 * 1
    
    Call the function factorial
    
    factorial(1) = 1
    factorial(2) = 2
    factorial(3) = 6 
*/

function factorial(n) {
    if(n < 2) return 1
    return n * factorial(n-1)
}

// find the 
function fibonacci(n) {
    if(n <= 2) {
        return 1;
    }
    else {
        return fibonacci(n - 1) + fibonacci(n - 2);
    }
};

// console.log(fibonacci(20))

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

const memoizedClosureTimes10 = () => {
    const cache = {}

    const memoTimes10 = n => {
        if(!cache[n]) { //n in(operator) cache
            cache[n] = times10(n)
        }
        return cache
    }

    return memoTimes10
}

const memoClosureTimes10 = memoizedClosureTimes10();
console.log('~~~~~~~~~~~~~~TASK 3~~~~~~~~~~~~~~');
try {
    console.log('Task 3 calculated value:', memoClosureTimes10(10));	// calculated
    console.log('Task 3 cached value:', memoClosureTimes10(10));	// cached
    console.log(memoClosureTimes10(4))
} catch(e) {
    console.error('Task 3:', e);
}