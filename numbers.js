// A numbers game
const numbers = [2,3,5,8];
// Console.log each number in the list using a for loop
for(let i = 0; i < numbers.length; i++){
  console.log(numbers[i])
}
// Add each of the numbers to the sum variable.
let sum = 0;
for(let i = 0; i < numbers.length; i++){
  sum += numbers[i]
}
console.log(sum)
// Count how many numbers are less than four.
let lessThanFour = 0;
for(let i = 0; i<numbers.length; i++){
  if(numbers[i] < 4){
    lessThanFour += 1
  }
}
console.log(lessThanFour)
// Use a while loop to continually add the number 7 until the numbers array contains 10 numbers
while(numbers.length < 10){
  numbers.push(7)
}
console.log(numbers)