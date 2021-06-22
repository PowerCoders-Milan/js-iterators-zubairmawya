// create a randomNumbers array, containing 100 random numbers
const randomNumbers = [];
for (let i = 0; i < 100; i++) {
    randomNumbers[i] = Math.ceil(Math.random() * 100);
}
console.log(randomNumbers);
// create a function isPrime(number)
function isPrime(number) {
    for (let i = 2; i < number; i++) {
        if (number%i === 0) {
            return false;
        }
    }
    return number > 1;
}
// create a primeNumbers array
const primeNumbers = randomNumbers.filter(isPrime);
 // filter randomNumbers with isPrime(number)
 console.log('Among this random numbers the following are prime number >>>>>');
console.log(primeNumbers);