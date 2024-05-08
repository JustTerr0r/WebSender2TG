const { Telegraf } = require('telegraf');
const cors = require('cors');
const express = require('express');
const bodyParser = require('body-parser');

const PORT = 3000;
const TOKEN = '7014991822:AAGHKmU1IdUknRap-l1Kr2JSbBBh1apua-M'; // Замени на свой токен бота
const app = express();
const bot = new Telegraf(TOKEN);

app.use(bodyParser.json());
app.use(cors());
app.post('/send-message', (req, res) => {
  const { message } = req.body;
  bot.telegram.sendMessage(6411432980, message) // Замени на свой chat_id.
    .then(() => {
      res.status(200).send('Message sent!');
    })
    .catch((error) => {
      res.status(500).send(error);
    });
});

app.listen(PORT, () => {
  console.log("Server running on port ${PORT}");
});