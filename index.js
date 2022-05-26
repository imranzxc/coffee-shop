const express = require("express");
const mongoose = require("mongoose");

const app = express();


app.use(express.json())
app.use(require('./routes/drinks.route'))



mongoose.connect("mongodb+srv://nanoface:mistersea42@cluster0.fhte6.mongodb.net/?retryWrites=true&w=majority", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => console.log('Успешно соединились с сервером MongoDB'))
.catch(() => console.log('Ошибка при соединении с сервером MongoDB'))


app.listen(3000, () => {
  console.log('Сервер запущен успешно')
})