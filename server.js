<!DOCTYPE html>
<html lang="ru">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Авто из Кореи в Казахстан</title>
  <style>
    * { box-sizing: border-box; }
    body {
      margin: 0;
      font-family: Arial, sans-serif;
      background: #0b1020;
      color: #fff;
    }
    .hero {
      padding: 70px 20px 50px;
      background:
        linear-gradient(135deg, rgba(13,18,37,.92), rgba(20,36,84,.88)),
        url('https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&w=1600&q=80') center/cover no-repeat;
    }
    .wrap {
      max-width: 1180px;
      margin: 0 auto;
    }
    .badge {
      display: inline-block;
      padding: 8px 14px;
      border: 1px solid rgba(255,255,255,.22);
      border-radius: 999px;
      font-size: 14px;
      margin-bottom: 16px;
      backdrop-filter: blur(8px);
    }
    h1 {
      margin: 0;
      font-size: 42px;
      line-height: 1.08;
      max-width: 760px;
    }
    .sub {
      margin-top: 16px;
      max-width: 720px;
      font-size: 18px;
      color: #dbe5ff;
      line-height: 1.6;
    }
    .hero-actions {
      display: flex;
      gap: 12px;
      flex-wrap: wrap;
      margin-top: 28px;
    }
    .btn, .btn-outline {
      display: inline-block;
      padding: 14px 20px;
      border-radius: 14px;
      text-decoration: none;
      font-weight: 700;
      transition: .2s;
    }
    .btn {
      background: #2f6bff;
      color: white;
    }
    .btn-outline {
      border: 1px solid rgba(255,255,255,.28);
      color: white;
    }
    .section {
      padding: 38px 20px;
    }
    .section-light {
      background: #f5f7fb;
      color: #111827;
    }
    .section h2 {
      margin: 0 0 18px;
      font-size: 30px;
    }
    .features {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
      gap: 16px;
      margin-top: 22px;
    }
    .feature {
      background: rgba(255,255,255,.06);
      border: 1px solid rgba(255,255,255,.08);
      border-radius: 18px;
      padding: 18px;
    }
    .section-light .feature {
      background: white;
      border: 1px solid #e5e7eb;
      box-shadow: 0 8px 30px rgba(17,24,39,.06);
    }
    .cars {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
      gap: 20px;
      margin-top: 24px;
    }
    .card {
      background: white;
      border-radius: 22px;
      overflow: hidden;
      box-shadow: 0 14px 40px rgba(17,24,39,.08);
      border: 1px solid #edf1f7;
    }
    .card img {
      width: 100%;
      height: 210px;
      object-fit: cover;
      display: block;
    }
    .card-body {
      padding: 18px;
    }
    .card h3 {
      margin: 0 0 10px;
      font-size: 24px;
      color: #111827;
    }
    .meta {
      color: #6b7280;
      font-size: 14px;
      margin-bottom: 12px;
    }
    .price {
      font-size: 22px;
      font-weight: 800;
      color: #2f6bff;
      margin-bottom: 14px;
    }
    .card-actions {
      display: flex;
      gap: 10px;
      flex-wrap: wrap;
    }
    .small-btn {
      display: inline-block;
      padding: 12px 16px;
      border-radius: 12px;
      text-decoration: none;
      font-weight: 700;
      border: none;
      cursor: pointer;
    }
    .small-btn.primary {
      background: #111827;
      color: white;
    }
    .small-btn.link {
      background: #eef3ff;
      color: #2f6bff;
    }
    .lead-box {
      display: grid;
      grid-template-columns: 1.1fr .9fr;
      gap: 24px;
      align-items: start;
    }
    .lead-info {
      color: #374151;
      line-height: 1.7;
    }
    .form-card {
      background: white;
      border-radius: 22px;
      padding: 24px;
      box-shadow: 0 14px 40px rgba(17,24,39,.08);
      border: 1px solid #edf1f7;
    }
    .form-card input, .form-card button {
      width: 100%;
      padding: 15px 16px;
      border-radius: 14px;
      border: 1px solid #dbe3ef;
      margin-top: 12px;
      font-size: 16px;
    }
    .form-card button {
      background: #2f6bff;
      color: white;
      font-weight: 800;
      border: none;
      cursor: pointer;
    }
    #status {
      margin-top: 12px;
      font-weight: 700;
    }
    footer {
      padding: 26px 20px 40px;
      background: #0b1020;
      color: #95a1c4;
      text-align: center;
    }
    @media (max-width: 860px) {
      h1 { font-size: 32px; }
      .lead-box { grid-template-columns: 1fr; }
    }
  </style>
</head>
<body>
  <section class="hero">
    <div class="wrap">
      <div class="badge">Авто из Кореи • Под ключ • Казахстан</div>
      <h1>Подбор, проверка и доставка автомобилей из Кореи</h1>
      <div class="sub">
        Помогаем подобрать живые автомобили с Encar, проверяем варианты,
        согласовываем бюджет и отправляем авто под клиента.
      </div>
      <div class="hero-actions">
        <a class="btn" href="#cars-block">Смотреть авто</a>
        <a class="btn-outline" href="#lead-block">Оставить заявку</a>
      </div>

      <div class="features">
        <div class="feature">Проверка вариантов перед покупкой</div>
        <div class="feature">Подбор под бюджет клиента</div>
        <div class="feature">Работаем с реальными лотами Encar</div>
        <div class="feature">Заявки сразу приходят в Telegram</div>
      </div>
    </div>
  </section>

  <section class="section section-light" id="cars-block">
    <div class="wrap">
      <h2>Актуальные модели</h2>
      <div class="cars" id="cars"></div>
    </div>
  </section>

  <section class="section section-light" id="lead-block">
    <div class="wrap lead-box">
      <div>
        <h2>Оставить заявку</h2>
        <div class="lead-info">
          Напиши, какой автомобиль тебе нужен, и мы подберём варианты из Кореи.
          После отправки заявки ты получишь ответ, а сообщение сразу придёт тебе в Telegram.
        </div>
      </div>

      <div class="form-card">
        <input type="text" id="name" placeholder="Ваше имя" />
        <input type="text" id="phone" placeholder="Ваш телефон / WhatsApp" />
        <input type="text" id="car" placeholder="Какой автомобиль интересует" />
        <button onclick="sendLead()">Отправить заявку</button>
        <div id="status"></div>
      </div>
    </div>
  </section>

  <footer>
    © 2026 • Авто из Кореи в Казахстан
  </footer>

  <script>
    async function loadCars() {
      const res = await fetch('/cars');
      const cars = await res.json();
      const container = document.getElementById('cars');

      container.innerHTML = cars.map(car => `
        <div class="card">
          <img src="${car.image}" alt="${car.title}">
          <div class="card-body">
            <h3>${car.title}</h3>
            <div class="meta">${car.year} • ${car.fuel}</div>
            <div class="price">${car.price}</div>
            <div class="card-actions">
              <a class="small-btn link" href="${car.link}" target="_blank">Открыть Encar</a>
              <button class="small-btn primary" onclick="chooseCar('${car.title}')">Хочу этот авто</button>
            </div>
          </div>
        </div>
      `).join('');
    }

    function chooseCar(title) {
      document.getElementById('car').value = title;
      document.getElementById('lead-block').scrollIntoView({ behavior: 'smooth' });
    }

    async function sendLead() {
      const name = document.getElementById('name').value.trim();
      const phone = document.getElementById('phone').value.trim();
      const car = document.getElementById('car').value.trim();
      const status = document.getElementById('status');

      if (!name || !phone || !car) {
        status.innerText = 'Заполните все поля';
        status.style.color = 'crimson';
        return;
      }

      const res = await fetch('/lead', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, phone, car })
      });

      const data = await res.json();

      if (data.status === 'ok') {
        status.innerText = 'Заявка отправлена';
        status.style.color = 'green';
        document.getElementById('name').value = '';
        document.getElementById('phone').value = '';
        document.getElementById('car').value = '';
      } else {
        status.innerText = data.message || 'Ошибка отправки';
        status.style.color = 'crimson';
      }
    }

    loadCars();
  </script>
</body>
</html>

