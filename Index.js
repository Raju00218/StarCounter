// find factorial


// function factorial(n){
//    let result = 1;
   
//    for(i = 1; i<=n; i++){
//     result = result*i;
// console.log(`${i}*${result}`);
//    }
//  return result;
// }

// console.log(factorial(6))
  
// Find Prime Number
 
// function isPrime(n){
// if (n <= 1)return false;
// if( n <= 3)return true;
   
//  if(n % 2 === 0 || n % 3 === 0) return false;


//    for(let i = 5; i * i <= n ; i+=6){
   
//          if(n % i === 0 || n % (i + 2 )=== 0) return false;
//          // console.log("yes Its prime");
//    }
//    return true;
// }
// console.log(isPrime(51))

//   for loop
// const  number = [9, 6870, 686];


// function findLarge(arr){

//  let max = arr[0];

//  for(let i = 1; i < arr.length; i++){
//    if (arr[i] > max ){
//    max = arr[i];
//    }
//  }
//  return max


// }

// console.log(findLarge(number))


//   by using Math.max
// const max = Math.max(...number);
// console.log(max)


//  by using reduce method
// const max = number.reduce((a, b)=> Math.max(a, b), -Infinity);

//   console.log(max)


//  Reverce a strings 



// const names = ["Raju", "Indra ", "sravan"]

// const first = names.reverse();
// console.log(first)

// function reverseStr(str){
//    let reversed ="";
//    for (let i = str.length-1; i >= 0; i--){
//       reversed = reversed + str[i];

//    }
//    return reversed;

// }
// console.log(reverseStr("HEMALATHA")) 


// Buliding A To-Do List


//  let   toDoList = [];


// const addlist = toDoList.push("Raju")
// console.log(addlist)

// console.log(toDoList)

// function addTask(task){
//     toDoList.push(task);
//     console.log(`Task ${task} Added To List `);

// }

// function removeTask(task){
//    const removeTask= toDoList.pop(task);
//     console.log(`task ${removeTask} Removed`);
// }

// function displayTask(){
//     console.log("toDoList:")
//     toDoList.forEach((task, index) =>{
//         console.log(`${index +1 }.${task}`)
//     })
// }
// addTask("raju")
// addTask("Good")
// addTask("Boy")
// displayTask();
// removeTask();
// displayTask();

// const addButton = document.querySelectorAll("button");
// const cart = document.querySelectorAll(".cart");
// const removeTask = document.querySelectorAll(".removeitem")

// const item = document.querySelectorAll("#item");

 

// let Items = [];

let countEl = document.getElementById("count-el")
let savedCount = document.getElementById("saved-count")
let saveEl = document.getElementById("save-el")

let peopleEnterd = 0;


function increment(){
   peopleEnterd += 1;
  countEl.innerText = peopleEnterd;
  
  
}


function save(){
     let countStr = peopleEnterd + " - "

     saveEl.textContent += countStr;
     peopleEnterd = 0;
     countEl.textContent = peopleEnterd;
     
    
     
} 




