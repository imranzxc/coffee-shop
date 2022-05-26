const Drinks = require("../models/Drinks.model");


module.exports.drinksController = {
  getDrinks: (req, res) => {
    Drinks.find({}).select('_id drinkName price').then((data) => {
      res.json(data);
    })
    .catch((err) => res.json('Something went wrong'))
  },
  getDrinksInStock: (req, res) => {
    Drinks.find({
      drinkAvailable: {
        $gt: 0,
      },
    }).then((data) => {
      res.json(data);
    })
    .catch((err) => res.json('Something went wrong'))
  },
  getDrinkById: (req, res) => {
    Drinks.findById(req.params.id).then((data) => {
      res.json(data);
    })
    .catch((err) => res.json('Something went wrong'))
  },
  postDrink: (req, res) => {
    Drinks.create({
      drinkName: req.body.drinkName,
      price: req.body.price,
      drinkAvailable: req.body.drinkAvailable,
      caffeine: req.body.caffeine,
      capacity: req.body.capacity,
      description: req.body.description,
    }).then(() => {
      res.json("Напиток добавлен");
    })
    .catch((err) => res.json('Something went wrong'))
  },
  deleteDrink: (req, res) => {
    Drinks.findByIdAndRemove(req.params.id).then((data) => {
      res.json("Напиток удален");
    })
    .catch((err) => res.json('Something went wrong'))
  },
  patchDrinkId: (req, res) => {
    Drink.findByIdAndUpdate(req.params.id, {
      drinkName: req.body.drinkName,
      price: req.body.price,
      drinkAvailable: req.body.drinkAvailable,
      caffeine: req.body.caffeine,
      capacity: req.body.capacity,
      description: req.body.description,
    }).then((data) => {
      res.json("Напиток изменен");
    })
    .catch((err) => res.json('Something went wrong'))
  },
};
