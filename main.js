// Students write their code between these lines.
//
// Code below this line vvvvv vvvvv vvvvv vvvvv vvvvv
//
// Code above this line ^^^^^ ^^^^^ ^^^^^ ^^^^^ ^^^^^
//
// Stuents should carefully read the test cases for the correct output.
//

// Mock Data
let balance = 5000;
const transactionHistory = [
  "Deposited 10000 into Savings Account",
  "Withdrawn 5000 from Savings Account",
];

function getBalance() {
  // Write function description
  // Code below this line vvvvv vvvvv vvvvv vvvvv vvvvv
  return balance;
  // Code above this line ^^^^^ ^^^^^ ^^^^^ ^^^^^ ^^^^^
}

function deposit(amount) {
  // Write function description
  // This function adds the amount passed as argument to balance
  // Code below this line vvvvv vvvvv vvvvv vvvvv vvvvv
  if (amount <= 0) {
    console.log("You cannot deposit zero amount. Try again.");
    return;
  }
  balance += amount;
  return balance;
  // Code above this line ^^^^^ ^^^^^ ^^^^^ ^^^^^ ^^^^^
}

function withdraw(amount) {
  // Write function description
  // This function subtracts the amount passed as argument from balance
  // Code below this line vvvvv vvvvv vvvvv vvvvv vvvvv
  if (amount > balance) {
    console.log("Insufficient Amount. Cannot withdraw.");
    return;
  }
  balance -= amount;
  return balance;
  // Code above this line ^^^^^ ^^^^^ ^^^^^ ^^^^^ ^^^^^
}

function getTransactionHistory() {
  // Write function description
  // This function gets the transactions from transactionHistory

  // Code below this line vvvvv vvvvv vvvvv vvvvv vvvvv
  transactionHistory.push(
    "Deposited 4000 into Savings Account",
    "Withdrawn 3000 from Savings Account"
  );
  console.log("Transaction History");
  for (let i = 0; i < transactionHistory.length; i++) {
    console.log(transactionHistory[i]);
  }
  // Code above this line ^^^^^ ^^^^^ ^^^^^ ^^^^^ ^^^^^
}

// Instructor's test cases
// ===== ===== ===== ===== =====

console.log(getBalance());
// Expected Output: 5000

deposit(4000);
console.log(getBalance());
// Expected Output: 9000

withdraw(3000);
console.log(getBalance());
// Expected Output: 6000

getTransactionHistory();
/* Expected Output:

Transaction History
1) Deposited 10000 into Savings Account
2) Withdrawn 5000 from Savings Account
3) Deposited 4000 into Savings Account
4) Withdrawn 3000 from Savings Account

*/
