const multer = require('multer');

// Set extension for file name
const MIME_TYPES = {
    'image/jpg': 'jpg',
    'image/jpeg': 'jpeg',
    'image/png': 'png'
};

// Call "diskStorage()"" method from multer module
const storage = multer.diskStorage({
    // Set destination
    destination: (req, file, callback) => {
        callback(null, 'images')
    },
    // Set filename
    filename: (req, file, callback) => {
        const name = file.originalname.split(' ').join('_');
        const extension = MIME_TYPES[file.mimetype];
        callback(null, name + Date.now() + '.' + extension);
    }
});


module.exports = multer({ storage }).single('image');