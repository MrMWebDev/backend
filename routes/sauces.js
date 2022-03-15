const express = require('express');
const router = express.Router();

const auth = require('../middleware/auth');
const multer = require('../middleware/multer-config');

const saucesCtrl = require('../controllers/sauces');

//retreive and list sauces for sale
router.get('/', auth, saucesCtrl.getAllSauces);
//save sauces to the database
router.post('/', auth, multer, saucesCtrl.createSauce);
//display a single sauce on  a page
router.get('/:id', auth, saucesCtrl.getOneSauce);
//update suaces with modifications
router.put('/:id', auth, multer, saucesCtrl.modifySauce);
//deletesauce from database and page
router.delete('/:id', auth, saucesCtrl.deleteSauce);
//like a sauce
router.post('/:id/like', auth, saucesCtrl.likeSauce);

module.exports = router;