function transferFunds(from, to, amount) {
  // BUG: no validation; negative amount allowed
  accounts[from] -= amount;
  accounts[to]   += amount;
}

module.exports = { transferFunds };