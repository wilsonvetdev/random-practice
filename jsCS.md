# Notes

#### Recursion
Recursion is when you define something in terms of itself.
ex. a function that calls itself
Mostly associated with fibonacci numbers and factorial numbers.

### Sorting Algorithms 

#### Bubble Sort
https://codepen.io/btholt/pen/PZKPjj?editors=001
Bubble sort works by comparing two adjacent numbers next to each other,
and then swapping their places if the smaller index's value is larger than the larger index's.
Continue looping through until all values are in ascending order.

Example: 
[5, 7, 6, 4] - starting 
[5, 6, 7, 4]
[5, 6, 4, 7] - i = 2
[5, 4, 6, 7]
[4, 5, 6, 7] - ending i = 1

const bubbleSort = nums => {  

    let swapped = false

    do {
    for (let i = 0; i < nums.length; i++) { 
        if (nums[i] > nums[i+1]) {
        let temp = nums[i]   
        nums[i] = nums[i+1]  
        nums[i+1] = temp
        swapped = true 
        }
    }
    } while(swapped)

}
