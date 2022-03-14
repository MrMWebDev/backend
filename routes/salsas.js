const express = require('express');
const router = express.Router();

const auth = require('../middleware/auth');
const multer = require('../middleware/multer-config');

const salsasCtrl = require('../controllers/salsas');

//retreive and list sauces for sale
router.get('/', auth, salsasCtrl.getAllSauce);
//save sauces to the database
router.post('/', auth, multer, salsasCtrl.createSauce);
//display a single sauce on  a page
router.get('/:id', auth, salsasCtrl.getOneSauce);
//update suaces with modifications
router.put('/:id', auth, multer, salsasCtrl.modifySauce);
//deletesauce from database and page
router.delete('/:id', auth, salsasCtrl.deleteSauce);
//like a sauce
router.post('/:id/like', auth, salsasCtrl.likeSauce);

module.exports = router;