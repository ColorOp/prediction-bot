const TelegramBot = require('node-telegram-bot-api');
const token = 7802919272:AAFeYFSbtMl7wtgEW4MiqZdzs11eF-S7E8M
const bot = new TelegramBot(token, { polling: true });

const colors = ['Red', 'Green', 'Violet'];
function getPrediction() {
  return colors[Math.floor(Math.random() * colors.length)];
}

let users = new Set();

bot.onText(/\/start/, (msg) => {
  const chatId = msg.chat.id;
  users.add(chatId);
  bot.sendMessage(chatId, "Welcome to Prediction Master! You'll now receive color predictions every 5 seconds.");
});

setInterval(() => {
  const prediction = getPrediction();
  const message = `Prediction Master:\nNext Color: *${prediction}*`;
  users.forEach(chatId => {
    bot.sendMessage(chatId, message, { parse_mode: 'Markdown' });
  });
+}, 5000);
