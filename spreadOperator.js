// // //It's also easy to join objects:  

// // const flying = { wings: 2 }
// // const car = { wheels: 4 }
// // const flyingCar = {...flying, ...car}
// // console.log(flyingCar) // {wings: 2, wheels: 4}

// // //Using the spread operator, it's easy to concatenate arrays:
// // const fruits = ['apple', 'pear', 'plum']
// // const berries = ['blueberry', 'strawberry']
// // const fruitsAndBerries = [...fruits, ...berries] // concatenate
// // console.log(fruitsAndBerries); // outputs a single array

// // // Here's how to use the spread operator to easily add one or more members to an existing array:
// // let veggies = ['onion', 'parsley'];
// // veggies = [...veggies, 'carrot', 'beetroot'];
// // console.log(veggies);

// // // Given a string, it's easy to spread it out into separate array items:
// // const greeting = "Hello";
// // const arrayOfChars = [...greeting];
// // console.log(arrayOfChars); //  ['H', 'e', 'l', 'l', 'o']

// // // Copy either an object or an array into a separate one
// // // Here's how to copy an object into a completely separate object, using the spread operator.

// // const car1 = {
// //     speed: 200,
// //     color: 'yellow'
// // }
// // const car2 = {...car1}

// // car1.speed = 201

// // console.log(car1.speed, car2.speed)

// // // You can copy an array into a completely separate array, also using the spread operator, like this

// // const fruits1 = ['apples', 'pears']
// // const fruits2 = [...fruits1]
// // fruits1.pop()
// // console.log(fruits1, "not", fruits2)

// // const meal = ["soup", "steak", "ice cream"]
// // let [starter] = meal;
// // console.log(starter);

// // var fun1=(val1,val2)=>{
// // return val1+val2*33
// // }

// // console.log(fun1(33,45))



// var [val,val2]=[1,2,3,4,5,6]
// console.log(val2)
// let arr=[1,2,null]
// console.log(arr.length)

// var letter=11
// var letter=45
// console.log(letter)


// var arrr=[1,2,3,4]
// for ( i of arrr){
//  console.log(i)
// }

var x = 0 != 1;

console.log(typeof(x))