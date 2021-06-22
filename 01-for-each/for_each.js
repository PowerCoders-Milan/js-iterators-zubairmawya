// define an array of fruits
const fruits = ['Mango', 'Orange', 'Banana', 'Apple', 'watermilon']
for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}
// .forEach((fruit, index) => {
    const printFruit = (fruit, index) => console.log(`${index + 1} ${fruit}`)
    fruits.forEach(printFruit)
    // console.log() a message interpolating the name of the fruit and it's position in the array (index increased by 1);
// })
