//exercise 1
// The function should simply console.log a greeting saying "Hello there, _____" 
// Insert the given string into the blank in the message being logged
const greeting = (str) =>{
    console.log('Hello there, ' + str)
  }
//greeting('Katie')

//exercise 2
// Write a function that accepts two parameters, num1 and num2
// The function should return whichever of the two numbers is larger
const larger = (num1, num2)=>{
    if(num1 > num2){
      return num1
    }else{
      return num2
    }
  }
  //console.log(larger(12, 5))

  //exercise 3
  // Write a function that accepts one parameter, a list
// The function should return the sum total of all numbers in the list, using a loop
const sum = (arr)=>{
    let sum = 0
    for(let i = 0; i<arr.length; i++){
      sum += arr[i]
    }
    return sum
  }
  //console.log(sum([2,2,3]))

// BONUS FUNCTIONS: Write a function to solve each of the given problem statements
//Bonus 1
// Determine whether a given list contains a given value

const hasValue = (arr, check)=>{
    if(arr.includes(check)){
       return 'Success! there is a ' + check + ' in the array.'
       }
    else{
      return 'Sorry ' + check + ' is not in the array.'
    }
  }
  //console.log(hasValue([1, 2, 3, 4, 5, 8, 3, 20], 1))

//Bonus 2
// Find the longest string in a given array of strings
const longest = (arr) =>{
    let len = 0
    let largest;
    for(let i = 0; i<arr.length;i++){
      if(arr[i].length > len){
        len = arr[i].length
        largest = arr[i]
      }
    }
    return largest
  }
//console.log(longest(['testy', 'hlo', 'find']))

//Bonus 3
// Count how many times a given string contains a given letter
const counter = (str, letter)=>{
    const arr = str.split('')
    const letters = []
    for (let i = 0; i < arr.length; i++){
      if(arr[i] === letter){
          letters.push(arr[i])

      }
    }
    return letters.length
  }
  console.log(counter('happy days', 'y'))