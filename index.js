
// for (let age = 30; age < 40; age++) {
//   console.log(`I'm ${age} years old. Happy birthday to me!`);
// }
const writeCards = (array, eventName) => {
    let newArray = [];
    for(let i = 0; i < array.length; i++) {
        newArray.push(`Thank you, ${array[i]}, for the wonderful ${eventName} gift!`);
    }
    return newArray;
}

const countDown = int => {
    let count = int;
    while (count >= 0) {
        console.log(count--);
    }
}
