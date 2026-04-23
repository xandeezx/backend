const express = require('express');
const router = express.Router();
const linhaController = require('../controllers/linhaController');

router.get('/', linhaController.listLinhas);
router.get('/:id', linhaController.getLinhaById);
router.post('/', linhaController.createLinha);
router.put('/:id', linhaController.updateLinha);
router.delete('/:id', linhaController.deleteLinha);

module.exports = router;
