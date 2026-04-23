const express = require('express');
const router = express.Router();
const paradaController = require('../controllers/paradaController');

router.get('/', paradaController.listParadas);
router.get('/:id', paradaController.getParadaById);
router.post('/', paradaController.createParada);
router.put('/:id', paradaController.updateParada);
router.delete('/:id', paradaController.deleteParada);

module.exports = router;
