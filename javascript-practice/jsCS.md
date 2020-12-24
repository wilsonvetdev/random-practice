# Notes
http://btholt.github.io/four-semesters-of-cs/

### Space & Time Complexity

Big O Notation -  worst-case scenario

Space Complexity - How much memory is used?
Time Complexity - How many primitive operations are executed?
...with respect to input size
...and assuming worst case scenarios 

### Recursion
Recursion is when you define something in terms of itself.
ex. a function that calls itself
Mostly associated with fibonacci numbers and factorial numbers.

Typical Recipe for Recursion in 4 steps:
1. Identify base case(s)/when do you want your loop to stop.
2. Identify recursive case(s)/the work that you want to do - make sure it gets closer to base case.
3. Return where appropriate.
4. Write procedures for each case that bring you closer to the base cases(s).

#### Divide and Conquer

Binary Search - Search for a value in a sorted array by cutting the side of the search area in half.

Recursive calls to a subset of the problem
Recognize base case
Divide: Break problem down during each call
Conquer: Do work on each subset
Combine: Solutions

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

Concept
Step 1 - Divide input into 'n' single element subarrays
Step 2 - Repeatedly merge subarrays and sort on each merge

mergeSort(list)
  base case: if list.length < 2, return 
  break the list into halves L & R
  Lsorted = mergeSort(L)
  Rsorted = mergeSort(R)
  return merge(Lsorted, Rsorted)

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

#### Set

A set allows at least four things: add, remove, contains, and toList.
The basic idea is that you can add items to a set and then later check if they are there.
You can request later a list of those items in the set(no guaranteed order).
Useful for deduplication since you can only add something to a set once. 

#### Map

Key-Value pairs, similar to JavaScript objcts.
Don't have prototypes, inheritance, methods.
No guaranteed order of data.
Keys have to be unique.

#### Stack

First In Last Out/Last In First Out - like a stack of books

A stack is a data structure which contains an ordered set of data.

Stacks provide three methods for interaction:

Push - adds data to the “top” of the stack
Pop - returns and removes data from the “top” of the stack
Peek - returns data from the “top” of the stack without removing it

#### Queue

Fist In First Out - a line to order food at McDonalds

Supports three main operations = enqueue, dequeue, peek

gives you the option of creating bounded queues with a .maxSize property

prevents queue overflow and underflow by keeping track of the queue size

Queues Implementation
Queues can be implemented using a linked list as the underlying data structure. The front of the queue is equivalent to the head node of a linked list and the back of the queue is equivalent to the tail node.

Since operations are only allowed affecting the front or back of the queue, any traversal or modification to other nodes within the linked list is disallowed. Since both ends of the queue must be accessible, a reference to both the head node and the tail node must be maintained.

One last constraint that may be placed on a queue is its length. If a queue has a limit on the amount of data that can be placed into it, it is considered a bounded queue.

Similar to stacks, attempting to enqueue data onto an already full queue will result in a queue overflow. If you attempt to dequeue data from an empty queue, it will result in a queue underflow.

### Greedy Algorithms
Always makes the locally optimal choice. Not always the best solution.
 
### Brute Force Approach:
calculate every single combination possible and keep track of the minimum

### Dynamic Approach: 
cache values to avoid repeated calculations
qualities: overlapping subproblems, optimal substructure(tends to be recursive)

#### Array
quick with gets, but deletes and inserts(in the middle) could be expensive
organizes items sequentially in memory

#### Linked List
Head Node, Tail Node, 
Expensive Gets/Search(O(n)) - we are given Head Node and have to loop until we find a given node for getting data.
Deletes are O(1) after getting the node.

Could be singly-linked or doubly-linked list(just one extra pointer to point to previous node )

#### Graph
Elements inside a graph are nodes - may or may not be related to each other.
Every node can also be called a vertex or vertices for multiple nodes.
Edges are the connections. 

Connected graphs vs graphs that are not connected
Directed graphs vs undirected graphs

depth-first, breadth-first search

#### Hash Tables
organizes data for quick look-up on values for a given key
unordered
single-directional lookups
resizes when the hash table is 50% full, rehashes everything and double in size.
