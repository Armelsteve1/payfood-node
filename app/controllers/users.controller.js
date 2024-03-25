function allAccess(req, res) {
  res.status(200).send("Public Content.");
}

function user(req, res) {
  res.status(200).send("User Content.");
}

function restaurateur(req, res) {
  res.status(200).send("restaurateur Content.");
}

function other(req, res) {
  res.status(200).send("other Content.");
}

module.exports = {
  allAccess,
  user,
  restaurateur,
  other
};
