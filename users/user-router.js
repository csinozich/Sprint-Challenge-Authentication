const router = require("express").Router();
const Users = require("./user-model.js");

router.get("/", (req, res) => {
  Users.find()
    .then(users => {
      res.json(users);
    })
    .catch(error => {
      res.status(404).json({ message: "You're not even here" });
    });
});

router.get("/:id", (req, res) => {
  Users.findById(req.params.id)
    .then(user => {
      res.json(user);
    })
    .catch(error => {
      res.status(404).json({ message: "Well that's not a user" });
    });
});

module.exports = router;
