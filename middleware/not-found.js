const notFound = (req, res) => {
  res.status(404).json({ msg: "404 not found" });
};

module.exports = notFound;
