const express = require('express');
const app = express();

app.use(express.json());

let cars = [
  {
    id: 1,
    title: "Toyota Camry 2020",
    price: "$20,000",
    link: "https://www.encar.com"
  },
  {
    id: 2,
    title: "Kia K5 2021",
    price: "$18,500",
    link: "https://www.encar.com"
  }
];

app.get('/cars', (req, res) => {
  res.json(cars);
});

app.post('/lead', (req, res) => {
  const { name, phone, car } = req.body;

  console.log("Новая заявка:");
  console.log("Имя:", name);
  console.log("Телефон:", phone);
  console.log("Авто:", car);

  res.json({ status: "ok" });
});

app.listen(3000, () => {
  console.log('Server started on 3000');
});
