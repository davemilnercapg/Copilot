/* obtain first 15 prime numbers
    * @param {number} n - number of prime numbers to obtain
    * @return {array} - array of prime numbers
*/
function primeNumbers(n) {
    let prime = [];
    let i = 2;
    while (prime.length < n) {
        if (isPrime(i)) {
            prime.push(i);
        }
        i++;
    }
    return prime;
}   

/* check if number is prime
    * @param {number} n - number to check
    * @return {boolean} - true if number is prime, false otherwise
    * @throws {Error} - if n is not a number
    * @throws {Error} - if n is not an integer
    * @throws {Error} - if n is less than 2
    * @throws {Error} - if n is not a finite number
    * @throws {Error} - if n is not a prime number
*/
function isPrime(n) {
    if (!typeof n === 'number') {
        throw new Error('parameter type must be a number');
    }
    if (!Number.isInteger(n)) {
        throw new Error('parameter type must be an integer');
    }  
    if (!n >= 2) {
        throw new Error('parameter must be greater than 1');
    }   
    if (!Number.isFinite(n)) {
        throw new Error('parameter type must be a finite number');
    }
    for (let i = 2; i < n; i++) {
        if (n % i === 0) {
            throw new Error('parameter must be a prime number');
        }
    }
    return true;
}

module.exports = { primeNumbers, isPrime };

        