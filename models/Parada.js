const mongoose = require('mongoose');

const paradaSchema = new mongoose.Schema(
  {
    nome: { type: String, required: true, trim: true },
    endereco: { type: String, required: true, trim: true },
    referencia: { type: String, trim: true }
  },
  { timestamps: true }
);

module.exports = mongoose.model('Parada', paradaSchema);
