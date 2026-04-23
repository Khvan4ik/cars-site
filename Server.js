const express = require("express");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));

const TG_BOT_TOKEN = process.env.TG_BOT_TOKEN || "";
const TG_CHAT_ID = process.env.TG_CHAT_ID || "";

let views = 0;

const cars = [
  {
    id: 1,
    title: "Toyota Camry XV70",
    subtitle: "Надёжный седан для города и трассы",
    price: "от 18,000$",
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
    subtitle: "Стильный бизнес-седан из Кореи",
    price: "от 16,500$",
    year: "2020+",
    fuel: "Бензин / LPG / Гибрид",
    image:
      "https://images.unsplash.com/photo-1494976388531-d1058494cdd8?auto=format&fit=crop&w=1200&q=80",
    link:
      "https://car.encar.com/list/car?page=1&search=%7B%22type%22%3A%22car%22%2C%22action%22%3A%22%28And.Hidden.N._.MultiView2Hidden.N._.%28C.CarType.Y._.Manufacturer.%EA%B8%B0%EC%95%84.%29%29%22%2C%22toggle%22%3A%7B%7D%2C%22layer%22%3A%22%22%2C%22sort%22%3A%22MobileModifiedDate%22%7D"
  },
  {
    id: 3,
    title: "Hyundai Grandeur Hybrid GN7",
    subtitle: "Премиум-комфорт и гибридная экономичность",
    price: "от 24,000$",
    year: "2023+",
    fuel: "Гибрид",
    image:
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1200&q=80",
    link:
      "https://car.encar.com/list/car?page=1&search=%7B%22type%22%3A%22car%22%2C%22action%22%3A%22%28And.Hidden.N._.MultiView2Hidden.N._.MultiViewHidden.N._.%28C.CarType.Y._.%28C.Manufacturer.%ED%98%84%EB%8C%80._.%28C.ModelGroup.%EA%B7%B8%EB%9E%9C%EC%A0%80._.Model.%EA%B7%B8%EB%9E%9C%EC%A0%80+%ED%95%98%EC%9D%B4%EB%B8%8C%EB%A6%AC%EB%93%9C+%28GN7%29.%29%29%29%29%22%2C%22toggle%22%3A%7B%7D%2C%22layer%22%3A%22%22%2C%22sort%22%3A%22MobileModifiedDate%22%7D"
  }
];

app.get("/cars", (req, res) => {
  res.json(cars);
});

app.get("/views", (req, res) => {
  views++;
  res.json({ views });
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
