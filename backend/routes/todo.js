const router = require("express").Router();
let ToDo = require("../models/todo.model");

router.route("/").get((req, res) => {
  ToDo.find()
    .then((exercises) => res.json(exercises))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/add").post((req, res) => {
  const description = req.body.description;
  const date = Date.parse(req.body.date);
  const status = req.body.status;

  const newToDo = new ToDo({
    description: description,
    date: date,
    status: status,
  });

  newToDo
    .save()
    .then(() => res.json("ToDo added!"))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/:id").delete((req, res) => {
  ToDo.findByIdAndDelete(req.params.id)
    .then((todo) => res.json("ToDo deleted!"))
    .catch((err) => res.status(400).json("Erros: " + err));
});

router.route("/update/:id").post((req, res) => {
  ToDo.findById(req.params.id)
    .then((todo) => {
      todo.description = req.body.description;
      todo.date = Date.parse(req.body.date);
      todo.status = req.body.status;

      todo
        .save()
        .then(() => res.json("ToDo updated!"))
        .catch((err) => res.status(400).json("Error:" + err));
    })
    .catch((err) => res.status(400).json("Erros: " + err));
});

module.exports = router;
