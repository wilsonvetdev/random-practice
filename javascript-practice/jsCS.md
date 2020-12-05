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

#### Insertion Sort

More complex. Worse case scenario for it is similar to bubble sort's, 
but its best case makes it suited for when the list is almost sorted or likely already sorted.
Think of the original array as two sub-arrays -> sorted and unsorted arrays.
The first element will always be sorted.

[10, 5, 3, 8, 7]
[5, 10, 3, 8, 7]
[3, 5, 10, 8, 7]
[3, 5, 8, 10, 7]
[3, 5, 7, 8, 10]

const insertionSort = nums => {  
  for (let i = 1; i < nums.length; i++) {
    for (let j = 0; j < i; j++) {  
      if (nums[i] < nums[j]) { 
        let spliced = nums.splice(i, 1)
        nums.splice(j, 0, spliced[0])
      }
    }
  }
};

