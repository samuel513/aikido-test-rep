function divide(a, b) {
  // BUG: no zero check
  return a / b;
}

function parseUserId(input) {
  // BUG: no validation
  return parseInt(input);
}

module.exports = { divide, parseUserId };