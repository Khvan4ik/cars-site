const express = require("express");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));

const TG_BOT_TOKEN = process.env.TG_BOT_TOKEN || "";
const TG_CHAT_ID = process.env.TG_CHAT_ID || "";

// СЮДА СТАВИШЬ РЕАЛЬНЫЕ МАШИНЫ С ENCAR
const cars = [
  {
    id: 1,
    title: "Toyota Camry XV70",
    price: "$19,500",
    year: "2020",
    fuel: "Бензин",
    image: "https://images.unsplash.com/photo-1550355291-bbee04a92027?auto=format&fit=crop&w=1200&q=80",
    link: "ВСТАВЬ_СЮДА_ССЫЛКУ_ENCAR_1"
  },
  {
    id: 2,
    title: "Kia K5",
    price: "$17,900",
    year: "2021",
    fuel: "Гибрид",
    image: "https://images.unsplash.com/photo-1494976388531-d1058494cdd8?auto=format&fit=crop&w=1200&q=80",
    link: "ВСТАВЬ_СЮДА_ССЫЛКУ_ENCAR_2"
  },
  {
    id: 3,
    title: "Hyundai Grandeur GN7",
    price: "$24,000",
    year: "2023",
    fuel: "Бензин",
    image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1200&q=80",
    link: "ВСТАВЬ_СЮДА_ССЫЛКУ_ENCAR_3"
  }
];

app.get("/cars", (req, res) => {
  res.json(cars);
});

app.post("/lead", async (req, res) => {
  try {
    const { name, phone, car } = req.body || {};

    if (!name || !phone || !car) {
      return res.status(400).json({
        status: "error",
        message: "Заполните все поля"
      });
    }

    const text =
      `🔥 Новая заявка с сайта\n\n` +
      `👤 Имя: ${name}\n` +
      `📞 Телефон: ${phone}\n` +
      `🚘 Авто: ${car}`;

    if (TG_BOT_TOKEN && TG_CHAT_ID) {
      const response = await fetch(`https://api.telegram.org/bot${TG_BOT_TOKEN}/sendMessage`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          chat_id: TG_CHAT_ID,
          text
        })
      });

      const data = await response.json();

      if (!data.ok) {
        console.error("Telegram error:", data);
      }
    } else {
      console.log("TG_BOT_TOKEN или TG_CHAT_ID не заданы");
      console.log(text);
    }

    res.json({ status: "ok" });
  } catch (error) {
    console.error("Lead error:", error);
    res.status(500).json({
      status: "error",
      message: "Ошибка отправки"
    });
  }
});

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

app.listen(PORT, () => {
  console.log(`Server started on ${PORT}`);
});
