const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => res.json({ message: 'API do App Bus funcionando.' }));

app.use('/api/linhas', require('./routes/linhaRoutes'));
app.use('/api/paradas', require('./routes/paradaRoutes'));

mongoose.connect(process.env.MONGO_URI || 'mongodb://127.0.0.1:27017/app_bus')
  .then(() =>
    app.listen(process.env.PORT || 3000, () =>
      console.log('Servidor rodando')
    )
  );
