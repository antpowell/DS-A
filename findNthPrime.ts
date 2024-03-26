export const findNthPrime = (nthPrime: number): number => {
  let primeValue = 3;
  let primeNumber = 2;
  if (nthPrime == 1) return 2;

  const findNthPrimeInnerFunc = (): number => {
    if (primeNumber < nthPrime) {
      primeValue += 2;
      while (!isPrime(primeValue)) {
        primeValue += 2;
      }
      primeNumber++;
      return findNthPrimeInnerFunc();
    } else {
      return primeValue;
    }
  };

  return findNthPrimeInnerFunc();
};

const isPrime = (number: number) => {
  if (number === 2) return true;
  if (number % 2 === 0) return false;
  for (let i = 2; i < number; i++) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
};

/**
 * only works for some primes need to find out which ones and why
 */
// const isPrime = (number: number) => {
//   if (number === 2 || number === 3) return true;
//   if (number > 3) {
//     if (((number + 1) % 6) === 0) return true;
//     if (((number - 1) % 6) === 0) return true;
//   }
//   return false;
// };

// console.log(`3: ${isPrime(3)}`);
// console.log(`7: ${isPrime(7)}`);
// console.log(`13: ${isPrime(13)}`);
// console.log(`31: ${isPrime(31)}`);
// console.log(`32: ${isPrime(32)}`);
// console.log(`33: ${isPrime(33)}`);
// console.log(`-13: ${isPrime(-13)}`);
// console.log(`-4: ${isPrime(-4)}`);
// console.log(`-3: ${isPrime(-3)}`);
// console.log(`0: ${isPrime(0)}`);
// console.log(`1: ${isPrime(1)}`);
// console.log(`67: ${isPrime(67)}`);
// console.log(`83: ${isPrime(83)}`);
// console.log(`29: ${isPrime(29)}`);
// console.log(`27: ${isPrime(27)}`);

console.log(`find 1098: ${findNthPrime(1098)}`);
console.log(`find 811: ${findNthPrime(811)}`);
console.log(`find 634: ${findNthPrime(634)}`);
console.log(`find 65: ${findNthPrime(65)}`);
console.log(`find 9: ${findNthPrime(9)}`);
console.log(`find 0: ${findNthPrime(0)}`);
// console.log(`find 2: ${findNthPrime(2)}`);
