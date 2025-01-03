//rest operator and spread operator
// rest operator in array destructing
const numbers = [1, 2, 3, 4, 5];
const [first, second, ...rest] = numbers;

console.log(first);   
console.log(second); 
console.log(rest);    
//this operator is used when we dont know the number of arguments)

// rest operation in object destructing 
const person = {
    name: "Alice",
    age: 30,
    country: "USA",
    job: "Developer"
  };
  const { name, ...restInfo } = person;
  
  console.log(name);       
  console.log(restInfo);   
  

  //spread operator
studentList=["tom","cruise","holland","dhoni","stark"]
newstudents=["resh","vaish","ninju"]
combinedstudentList=[...studentList,...newstudents]
console.log(combinedstudentList);
// it will combine and give the answers

//db:
//Rest (...): Gathers items into an array.
//Spread (...): Spreads items from an array or object into individual elements.