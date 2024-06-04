const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json());

//dSj5Z2sitHEySrCL
mongoose.connect('mongodb+srv://thinphcv5:dSj5Z2sitHEySrCL@cluster0.u5rccyd.mongodb.net/gensimp?retryWrites=true&w=majority&appName=Cluster0', { useNewUrlParser: true, useUnifiedTopology: true });
mongoose.connection.once('open', () => {
  console.log('Connected to MongoDB');
});

app.use('/character', require('./routes/character'));
app.use('/element', require('./routes/element'));
app.use('/weapon', require('./routes/weapon'));
app.use('/rarity', require('./routes/rarity'));
app.use('/arm', require('./routes/arm'));

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});