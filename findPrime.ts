// Find the nth prime number

const nthPrime = (int: nth) => {
  let primeCount: Array<number> = [];
  let count = 2;

  const checkPrime = (count: number) => {
    if (count !== 2 && count % 2 === 0) {
      checkPrime(count++);
    }
    primeCount.forEach((prime) => {
      if (count % prime === 0) {
        checkPrime(count++);
      }
    });
    primeCount.push(count);
    checkPrime(count++);
  };
};
