const mongoose = require('mongoose');

const linhaSchema = new mongoose.Schema(
  {
    numero: { type: String, required: true, trim: true },
    nome: { type: String, required: true, trim: true },
    origem: { type: String, required: true, trim: true },
    destino: { type: String, required: true, trim: true }
  },
  { timestamps: true }
);

module.exports = mongoose.model('Linha', linhaSchema);
