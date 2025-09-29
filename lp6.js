//1

function diff(a, b) {
  return Math.abs(a - b);
}

console.log(diff(10, 3));
console.log(diff(3, 10));

//2

function isWord(str) {
  return str.trim().split(/\s+/).length === 1;
}

console.log(isWord("Hello"));
console.log(isWord("Hello world"));
console.log(isWord("  Test "));

//3

function pow(a, x) {
  return Math.pow(a, x);
}

console.log(pow(2, 3));
console.log(pow(5, 2));
