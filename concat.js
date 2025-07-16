//Concatenate is a method we use to combine or join two or more arrays into one.
let intro = ["HTML", "CSS", "JS"];
let basics = ["Problem Solving", "Coding", "GIT"];
let fundamentals = ["Algorithms", "Functions", "Logics"];
let cs= intro.concat(basics, fundamentals)
console.log(cs)

// flat method we use it to reduce nesting inside an array, also called to flatten the array
let courses=[["HTML", "CSS", "JS"],
["Problem Solving", "Coding", "GIT"],
["Algorithm", "Functions", "Logistics"]
]
console.log(courses)

let subject = courses.flat(Infinity)
console.log(subject)