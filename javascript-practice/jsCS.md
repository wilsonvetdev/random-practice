# Notes
http://btholt.github.io/four-semesters-of-cs/

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

#### Merge Sort

https://codepen.io/btholt/pen/rOEdKK?editors=001

A divide and conquer algorithm. Recursive.

The basic gist of merge sort is that you're going to take your big list, 
and first divide down in two half size lists and recursively call merge sort on those smaller list, 
which in turn will do the same. 

The base case is when you have a list of one, at which point you will return that sorted list of one. On the way up the recursive calls, you will merge those sorted lists together (preferably by another merge function you'll write) that walks through both lists simultaneously and inserts the smaller value first, effectively creating a bigger sorted list.


[1, 5, 6] sublist 1
[2, 7, 8] sublist 2

-> compare 1 and 2, take 1 and put it in new list
-> compare 5 and 2, take 2 and put it in new list
-> compare 5 and 7, take 5 and put it in new list
-> compare 6 and 7, take 6 and put it in new list
-> list one has no more elements
-> add the rest of list two in order (7 and 8)

#### Quick Sort

https://codepen.io/btholt/pen/bEoGxa?editors=001

The basic gist is that you take the last element in the list and call that the pivot. 
Everything that's smaller than the pivot gets put into a "left" list and everything that's greater get's put in a "right" list. 
You then call quick sort on the left and right lists independently (hence the recursion.) 
After those two sorts come back, you concatenate the sorted left list, the pivot, and then the right list (in that order.) 
The base case is when you have a list of length 1 or 0, where you just return the list given to you.

[4, 9, 3, 5] list
-> 5 is made the pivot since it's the last in the array
-> divide list into two lists, [4, 3] and [9]
-> call quicksort on those two lists

[4, 3]
-> 3 is pivot
-> call quicksort on [] and [4]
-> those both return as is as they are the base case of length 0 or 1
-> concat [], 3, and [4]
-> return [3, 4]

[9]
-> returns as this it is a base case of length 1

(back into the original function call)
-> call concat on [3, 4], 5, and [9]
-> return [3, 4, 5, 9]
