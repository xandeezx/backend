const Parada = require('../models/Parada');

exports.listParadas = async (req, res) => {
  const paradas = await Parada.find();
  res.json(paradas);
};

exports.getParadaById = async (req, res) => {
  const parada = await Parada.findById(req.params.id);
  if (!parada) return res.status(404).json({ message: 'Parada não encontrada.' });
  res.json(parada);
};

exports.createParada = async (req, res) => {
  const parada = await Parada.create(req.body);
  res.status(201).json(parada);
};

exports.updateParada = async (req, res) => {
  const parada = await Parada.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true
  });
  if (!parada) return res.status(404).json({ message: 'Parada não encontrada.' });
  res.json(parada);
};

exports.deleteParada = async (req, res) => {
  const parada = await Parada.findByIdAndDelete(req.params.id);
  if (!parada) return res.status(404).json({ message: 'Parada não encontrada.' });
  res.json({ message: 'Parada removida com sucesso.' });
};
