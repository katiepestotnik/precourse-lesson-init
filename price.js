// If the Price is Right
// Translate the following logical decisions into javaScript conditionals, using the price variable:
let price = 25
// If the price is under 10, add 10% tax to the price. 
// Otherwise, add 15% luxury tax instead.
if(price < 10){
  price += price * .15
}
else{
  price += price * .10
}
console.log(price)
// We have a customer! 
customer = { "name": "Lisa Su", "status": "VIP" }
// If the customer's status is "VIP", lower the price by 20%
if(customer.status === 'VIP'){
  price -= price * .20
  //price = price - (price * .20)
}
console.log(price)
// Let's alter our advertising based on the price of the product, filling in the blank with the price
// i. If the price is less than 5, console.log the message "For less than a cup of coffee, buy now for _____"
// ii. Otherwise, if the price is less than 20, log the message "Good value. Great products. Buy now for _____"
// iii. Otherwise, log the message  "You get what you pay for. Get the most. Buy now for ______"
if(price < 5){
  console.log('For less than a cup of coffee, buy now for $' + price)
} else if(price < 20){
  console.log(`Good value. Great products. Buy now for $${price}`)
} else{
  console.log('You get what you pay for. Get the most. Buy now for $' + price)
}
// BONUS CHALLENGE:
// Given this list of products, use a conditional to figure out which has the lower price.
// Print a message saying "Your best value is the _____ for only ______"
// Fill in the blanks with the name and price of the cheaper item, respectively
const bargain_bin = [
    {"name": "90s Comedy DVD", "price": 2.99},
    {"name": "80s Drama DVD", "price": 3.99}
]
if(bargain_bin[0].price < bargain_bin[1].price){
  console.log('Your best value is the ' + bargain_bin[0].name + ' for only ' + bargain_bin[0].price)
} else{
  console.log('Your best value is the ' + bargain_bin[1].name + ' for only ' + bargain_bin[1].price)
}