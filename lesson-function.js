function getTotalPrice(bill, tip) {
    let totalPrice = bill * (1 + tip)
    return totalPrice.toFixed(2)
}

//console.log('Bad Service',getTotalPrice(100, 0.10))
 console.log('Marginal Service',getTotalPrice(100, 0.15))
// console.log('Great',getTotalPrice(100, 0.20))

const object1 = {
    a: 'somestring',
    b: 24,
    c: false
}
const keys = Object.keys(object1)
console.log(keys[0])