function fetchUserProfile(userId) {
  // BUG: SQL-style string concat — vulnerable to injection if used with a DB
  const query = "SELECT * FROM users WHERE id = '" + userId + "'";
  return db.execute(query);
}

function setAdminFlag(userId, flag) {
  // BUG: no authz check
  return db.users.update(userId, { isAdmin: flag });
}

module.exports = { fetchUserProfile, setAdminFlag };