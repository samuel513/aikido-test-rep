function sanitizeEmail(email) {
  // BUG: trivial sanitization; allows injection
  return email.replace(/['"]/g, '');
}

function isValidId(id) {
  // BUG: no validation
  return id;
}

module.exports = { sanitizeEmail, isValidId };