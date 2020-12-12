/*
You're developing a system for scheduling advising meetings with students in a Computer Science program. Each meeting should be scheduled when a student has completed 50% of their academic program.

Each course at our university has at most one prerequisite that must be taken first. No two courses share a prerequisite. There is only one path through the program.

Write a function that takes a list of (prerequisite, course) pairs, and returns the name of the course that the student will be taking when they are halfway through their program. (If a track has an even number of courses, and therefore has two "middle" courses, you should return the first one.)

Sample input 1: (arbitrarily ordered)
prereqs_courses1 = [
  ["Data Structures", "Algorithms"],
  ["Foundations of Computer Science", "Operating Systems"],
  ["Computer Networks", "Computer Architecture"],
  ["Algorithms", "Foundations of Computer Science"],
  ["Computer Architecture", "Data Structures"],
  ["Software Design", "Computer Networks"]
]

In this case, the order of the courses in the program is:
  Software Design
  Computer Networks
  Computer Architecture
  Data Structures
  Algorithms
  Foundations of Computer Science
  Operating Systems

Sample output 1:
  "Data Structures"


Sample input 2:
prereqs_courses2 = [
  ["Data Structures", "Algorithms"]
  ["Algorithms", "Foundations of Computer Science"],
  ["Foundations of Computer Science", "Logic"]
]


Sample output 2:
  "Algorithms"

Sample input 3:
prereqs_courses3 = [
  ["Data Structures", "Algorithms"],
]


Sample output 3:
  "Data Structures"


*/



const prereqs_courses1 = [
    ["Data Structures", "Algorithms"],
    ["Foundations of Computer Science", "Operating Systems"],
    ["Computer Networks", "Computer Architecture"],
    ["Algorithms", "Foundations of Computer Science"],
    ["Computer Architecture", "Data Structures"],
    ["Software Design", "Computer Networks"]  
];

const prereqs_courses2 = [ 
  ["Data Structures", "Algorithms"],
  ["Algorithms", "Foundations of Computer Science"],
  ["Foundations of Computer Science", "Logic"]
];

const prereqs_courses3 = [
  ["Data Structures", "Algorithms"]
];
  

// find the first class
  // create a cache
  // loop through all the elements 
  // if not inside cache, put inside cache, count starts at 1 

const findCourse = (prereqs) => {
  let cache = {}
  let classArray = []
  
  prereqs.forEach(coursePair => {
      // coursePair[0], coursePair[1]
      if(!cache[coursePair[0]]) {
        cache[coursePair[0]] = 1
      } else {
        cache[coursePair[0]] += 1
      }
      if(!cache[coursePair[1]]) {
        cache[coursePair[1]] = 1
      } else {
        cache[coursePair[1]] += 1
      }
  })
  
  let singleOccurence = []
  
  for(let key in cache) {
    if(cache[key] === 1)
      
      singleOccurence.push(key)
  }
  
  prereqs.forEach((coursePair) => {
    if(coursePair[0] === singleOccurence[0] || coursePair[0] === singleOccurence[1]){
      classArray.push(coursePair[0])
      classArray.push(coursePair[1])
    }
  })
  
  
  while (classArray.length < prereqs.length + 1){
    let searchClass = classArray[classArray.length - 1]
    prereqs.forEach(coursePair =>{
    if(coursePair[0] === searchClass) {
      classArray.push(coursePair[1])
      }
    })
  }
  
  let num = Math.floor(classArray.length / 2)
  
  // return classArray[num] <-- original naive answer I had, which only worked for the first test case.

  return classArray.length % 2 === 0 ? classArray[num-1] : classArray[num]

}

console.log(findCourse(prereqs_courses3))