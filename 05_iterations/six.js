const myNums = [1, 2, 3]

// const myTotal = myNums.reduce(function (acc, currval) {
//     console.log (`acc: ${acc} and currval: ${currval}`)
//     return acc + currval
// },0)

const myTotal = myNums.reduce( (acc, curr) => acc+curr,0)


console.log(myTotal);

const shoppingcart = [
    {
        itemName: "Js Course",
        price: 2999
    },
    {
        itemName: "Python",
        price: 1999
    },
    {
        itemName: "Mobile Devlopment",
        price: 4999
    },
    {
        itemName: "web Dev",
        price: 3999
    },
]

const PriceToPay = shoppingcart.reduce( (acc, item) => acc + item.price, 0)

console.log (PriceToPay)