function printNumbers(n) {
  if (n === 0) return;

  // Head recursion
  console.log("Head:", n);

  printNumbers(n - 1);  // recursive call

  // Tail recursion
  console.log("Tail:", n);
}

printNumbers(3);
