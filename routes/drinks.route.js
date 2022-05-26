const { Router } = require('express');
const { drinksController } = require('../controllers/drinks.controller');



const router = Router();

router.get('/drinks', drinksController.getDrinks)
router.get('/drinks/in-stock', drinksController.getDrinksInStock)
router.get('/drinks/:id', drinksController.getDrinkById)
router.post('/drinks', drinksController.postDrink)
router.delete('/drinks', drinksController.deleteDrink)
router.patch('/drinks/:id', drinksController.patchDrinkId)

module.exports = router