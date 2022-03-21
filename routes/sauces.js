const express = require('express');
const router = express.Router();

const auth = require('../middleware/auth');
const multer = require('../middleware/multer-config');

const sauceCtrl = require('../controllers/sauces');

//retreive and list sauce for sale
router.get('/', auth, sauceCtrl.getAllSauces);
//save sauce to the database
router.post('/', auth, multer, sauceCtrl.createSauce);
//display a single sauce on  a page
router.get('/:id', auth, sauceCtrl.getOneSauce);
//update suaces with modifications
router.put('/:id', auth, multer, sauceCtrl.modifySauce);
//deletesauce from database and page
router.delete('/:id', auth, sauceCtrl.deleteSauce);
//like a sauce
router.post('/:id/like', auth, sauceCtrl.likeSauce);

module.exports = router;