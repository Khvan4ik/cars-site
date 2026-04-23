const express = require('express');
const path = require('path');

const app = express() app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

const TG_BOT_TOKEN = process.env.TG_BOT_TOKEN || '';
const TG_CHAT_ID = process.env.TG_CHAT_ID || '';

const cars = [
  {
    id: 1,
    title: "Toyota Camry XV70",
    price: "Под заказ из Кореи",
    year: "2019+",
    fuel: "Бензин / Гибрид",
    image:
      "https://images.unsplash.com/photo-1550355291-bbee04a92027?auto=format&fit=crop&w=1200&q=80",
    link:
      "https://car.encar.com/list/car?page=1&search=%7B%22type%22%3A%22car%22%2C%22action%22%3A%22%28And.Hidden.N._.%28C.CarType.N._.%28C.Manufacturer.%EB%8F%84%EC%9A%94%ED%83%80._.%28C.ModelGroup.%EC%BA%A0%EB%A6%AC._.Model.%EC%BA%A0%EB%A6%AC+%28XV70%29.%29%29%29%29%22%2C%22toggle%22%3A%7B%7D%2C%22layer%22%3A%22%22%2C%22sort%22%3A%22MobileModifiedDate%22%7D"
  },
  {
    id: 2,
    title: "Kia K5",
    price: "Под заказ из Кореи",
    year: "2020+",
    fuel: "Бензин / LPG / Гибрид",
    image:
      "https://images.unsplash.com/photo-1494976388531-d1058494cdd8?auto=format&fit=crop&w=1200&q=80",
    link:
      "https://car.encar.com/list/car?page=1&search=%7B%22type%22%3A%22car%22%2C%22action%22%3A%22%28And.Hidden.N._.Manufacturer.%EA%B8%B0%EC%95%84._.%28C.ModelGroup.K5.%29%29%22%2C%22toggle%22%3A%7B%7D%2C%22layer%22%3A%22%22%2C%22sort%22%3A%22MobileModifiedDate%22%7D"
  },
  {
    id: 3,
    title: "Hyundai Grandeur GN7",
    price: "Под заказ из Кореи",
    year: "2022+",
    fuel: "Бензин / Гибрид",
    image:
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1200&q=80",
    link:
      "https://car.encar.com/list/car?page=1&search=%7B%22type%22%3A%22car%22%2C%22action%22%3A%22%28And.Hidden.N._.%28C.CarType.Y._.%28C.Manufacturer.%ED%98%84%EB%8C%80._.%28C.ModelGroup.%EA%B7%B8%EB%9E%9C%EC%A0%80._.Model.%EA%B7%B8%EB%9E%9C%EC%A0%80+%28GN7%29.%29%29%29%29%22%2C%22toggle%22%3A%7B%7D%2C%22layer%22%3A%22%22%2C%22sort%22%3A%22MobileModifiedDate%22%7D"
  }
];

app.get('/cars', (req, res) => {
  res.json(cars);
});

app.post('/lead', async (req, res) => {
  try {
    const { name, phone, car } = req.body || {};

    if (!name || !phone || !car) {
      return res.status(400).json({
        status: 'error',
        message: 'Заполните имя, телефон и интересующее авто'
      });
    }

    const text =
      `🔥 Новая заявка с сайта\n\n` +
      `👤 Имя: ${name}\n` +
      `📞 Телефон: ${phone}\n` +
      `🚘 Авто: ${car}`;

    if (TG_BOT_TOKEN && TG_CHAT_ID) {
      const tgUrl = `https://api.telegram.org/bot${TG_BOT_TOKEN}/sendMessage`;

      const tgRes = await fetch(tgUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          chat_id: TG_CHAT_ID,
          text
        })
      });

      const tgData = await tgRes.json();

      if (!tgData.ok) {
        console.error('Telegram error:', tgData);
      }
    } else {
      console.log('TG_BOT_TOKEN или TG_CHAT_ID не заданы');
      console.log(text);
    }

    res.json({ status: 'ok' });
  } catch (error) {
    console.error('Lead error:', error);
    res.status(500).json({ status: 'error', message: 'Ошибка отправки заявки' });
  }
});

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Server started on ${PORT}`);
});
