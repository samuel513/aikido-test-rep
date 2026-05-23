function divide(a, b) {
  // BUG: no zero check
  return a / b;
}

function multiplyUnsafe(x, y) {
  // intentional weakness: no type validation
  return x * y;
}
