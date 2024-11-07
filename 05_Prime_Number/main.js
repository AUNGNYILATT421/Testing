// Students write their code between these lines.
//
// Code below this line vvvvv vvvvv vvvvv vvvvv vvvvv
//
// Code above this line ^^^^^ ^^^^^ ^^^^^ ^^^^^ ^^^^^
//
// Stuents should carefully read the test cases for the correct output.
//

// Write isPrime(num), which returns true if the number is prime and false otherwise.
function checkPrimeNum(num) {
  // Code below this line vvvvv vvvvv vvvvv vvvvv vvvvv
  if (num <= 1) return messageFormatter(`${num} is NOT a prime number.`);

  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return messageFormatter(`${num} is NOT a prime number.`);
  }

  return messageFormatter(`${num} is a prime number.`);
  // students must use polymorphic messageFormatter function to display answer

  // Code above this line ^^^^^ ^^^^^ ^^^^^ ^^^^^ ^^^^^
}

// Extend with findPrimesInRange(start, end) to return all prime numbers within a specified range.
function findPrimesInRange(start, end) {
  // Code below this line vvvvv vvvvv vvvvv vvvvv vvvvv
  if (typeof start !== "number" || typeof end !== "number") {
    return messageFormatter(
      "Invalid input. Please provide a number or a valid range (array of two numbers)."
    );
  }

  // reuse checkPrimeNum() function here
  let primes = [];
  for (let i = start; i <= end; i++) {
    if (checkPrimeNum(i).includes("is a prime number")) {
      primes.push(i);
    }
  }
  // students must use polymorphic messageFormatter function to display answer
  return messageFormatter(
    `Primes between ${start} and ${end}: ${JSON.stringify(primes)}`
  );
  // Code above this line ^^^^^ ^^^^^ ^^^^^ ^^^^^ ^^^^^
}

// Polymorphic messageFormatter function
function messageFormatter(message) {
  // Code below this line vvvvv vvvvv vvvvv vvvvv vvvvv
  return message;
  // Code above this line ^^^^^ ^^^^^ ^^^^^ ^^^^^ ^^^^^
}

// Instructor's test cases
// ===== ===== ===== ===== =====

console.log(checkPrimeNum(2));
// Expected Output: 2 is a prime number.

console.log(checkPrimeNum(1));
// Expected Output: 1 is NOT a prime number.

console.log(checkPrimeNum(13));
// Expected Output: 13 is a prime number.

console.log(checkPrimeNum(25));
// Expected Output: 25 is NOT a prime number.

console.log(findPrimesInRange(10, 20));
// Expected Output: Primes between 10 and 20: [11, 13, 17, 19]

console.log(findPrimesInRange(30, 50));
// Expected Output: Primes between 30 and 50: [31, 37, 41, 43, 47]

console.log(findPrimesInRange("test"));
// Expected Output: Invalid input. Please provide a number or a valid range (array of two numbers).
