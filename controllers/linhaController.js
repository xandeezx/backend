const Linha = require('../models/Linha');

exports.listLinhas = async (req, res) => {
  const linhas = await Linha.find();
  res.json(linhas);
};

exports.getLinhaById = async (req, res) => {
  const linha = await Linha.findById(req.params.id);
  if (!linha) return res.status(404).json({ message: 'Linha não encontrada.' });
  res.json(linha);
};

exports.createLinha = async (req, res) => {
  const linha = await Linha.create(req.body);
  res.status(201).json(linha);
};

exports.updateLinha = async (req, res) => {
  const linha = await Linha.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true
  });
  if (!linha) return res.status(404).json({ message: 'Linha não encontrada.' });
  res.json(linha);
};

exports.deleteLinha = async (req, res) => {
  const linha = await Linha.findByIdAndDelete(req.params.id);
  if (!linha) return res.status(404).json({ message: 'Linha não encontrada.' });
  res.json({ message: 'Linha removida com sucesso.' });
};
