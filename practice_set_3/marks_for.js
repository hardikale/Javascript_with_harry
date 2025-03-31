//wrtie a program to print the marks of students in an object using for loop]
const marks = {
    hardik: 56,
    suresh: 78,
    nikesh: 34,
    amir: 22
}

const stunames = Object.keys(marks);

for(let i=0;i<stunames.length;i++){
    console.log(`NAME: ${stunames[i]} MARKS: ${marks[stunames[i]]}`) // (`) is a backtick not a (')quote 
    // console.log("NAME:"+stunames[i]+"MARKS:"+marks[stunames[i]]);
}

console.log(`hello`)