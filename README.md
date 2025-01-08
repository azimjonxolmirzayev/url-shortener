# URL Shortener - URL Manzillarni Qisqartiruvchi Tizim


![image](https://github.com/user-attachments/assets/0bb8f53d-bbc0-4b81-bbd1-0cb8344afccc)


## 📌 Loyiha Haqida

URL Shortener - bu uzun internet manzillarini qisqa va qulay ko'rinishga o'tkazuvchi web-ilova. Bu tizim ijtimoiy tarmoqlarda, messenjer va elektron pochta xabarlarida uzun havolalarni ulashishda juda foydali.

### 🎯 Nima Uchun Bu Loyiha Kerak?

1. **Qulaylik**: Uzun URL manzillarni (100-200 belgili) 10-15 belgili qisqa havolaga aylantirib beradi
2. **Xavfsizlik**: Havola orqali yuborilgan traffikni kuzatish va nazorat qilish imkoniyati
3. **Analitika**: Havolaning qancha marta ishlatilgani, qaysi mamlakatlardan kirilgani kabi statistikalarni ko'rish
4. **Tezkorlik**: Redis kesh tizimi orqali tez-tez ishlatiladigan havolalarga kirishni tezlashtirish

### 💡 Asosiy Imkoniyatlar

- URL manzilni qisqartirish
- QR kod generatsiya qilish
- Havola statistikasi
- Havolaning amal qilish muddatini o'rnatish
- Maxsus nom berish (custom URL)
- Havola xavfsizligini tekshirish

## 🛠 Texnologiyalar

- **Frontend**: HTML, CSS, JavaScript
  - Foydalanuvchi interfeysi
  - Responsive dizayn
  - Real-time validatsiya

- **Backend**: Node.js, Express.js
  - RESTful API
  - URL validatsiya
  - Xavfsizlik tekshiruvlari
  - QR kod generatsiyasi

- **Ma'lumotlar bazasi**: PostgreSQL
  - URL ma'lumotlarini saqlash
  - Foydalanuvchi ma'lumotlari
  - Statistika

- **Kesh**: Redis
  - Tez-tez ishlatiladigan URL lar uchun
  - Yuqori tezlikda ishlash
  
- **Server**: Nginx
  - Load balancing
  - Reverse proxy
  - Static file serving



🔄 Tizimning ishlash jarayoni
![image](https://github.com/user-attachments/assets/e41b1fea-6a70-479c-98e4-f04d92ab150d)
![image](https://github.com/user-attachments/assets/d34da090-c5a7-4564-b6b0-e5f940649ec0)

![image](https://github.com/user-attachments/assets/6ab4b9f2-acff-420c-a258-5390117829cc)




## ⚙️ O'rnatish Yo'riqnomasi

### Talab qilinadigan dasturlar
- Node.js (v14 yoki yuqori)
- PostgreSQL
- Redis
- Docker (ixtiyoriy)

### Lokal kompyuterda o'rnatish

1. **Repozitoriyani klonlash**:
```bash
git clone https://github.com/azimjonxolmirzayev/url-shortener.git
cd url-shortener
```

2. **Kerakli paketlarni o'rnatish**:
```bash
npm install
```

3. **Muhit o'zgaruvchilarini sozlash**:
```bash
cp .env.example .env
```

`.env` faylida quyidagi sozlamalarni o'zgartiring:
```env
PORT=3000
DB_HOST=localhost
DB_USER=postgres
DB_PASSWORD=your_password
DB_NAME=urlshortener
REDIS_HOST=localhost
REDIS_PORT=6379
```

4. **Ma'lumotlar bazasini yaratish**:
```bash
createdb urlshortener
```

5. **Migratsiyalarni ishga tushirish**:
```bash
npm run migrate
```

6. **Ilovani ishga tushirish**:
```bash
npm run dev  # development mode
npm start    # production mode
```

### Docker orqali o'rnatish

```bash
docker-compose up -d
```

## 🔍 API Reference

### 1. URL ni qisqartirish

```http
POST /api/shorten
```

**Request**:
```json
{
  "url": "https://example.com/very/long/url",
  "customAlias": "mylink",     // ixtiyoriy
  "expiresIn": "24h"          // ixtiyoriy
}
```

**Response**:
```json
{
  "shortUrl": "http://localhost:3000/mylink",
  "originalUrl": "https://example.com/very/long/url",
  "qrCode": "data:image/png;base64,...",
  "expiresAt": "2024-01-09T10:00:00Z",
  "statistics": {
    "clicks": 0,
    "createdAt": "2024-01-08T10:00:00Z"
  }
}
```

### 2. URL statistikasini olish

```http
GET /api/stats/:shortCode
```

**Response**:
```json
{
  "clicks": 150,
  "countries": {
    "UZ": 100,
    "RU": 30,
    "US": 20
  },
  "browsers": {
    "Chrome": 80,
    "Firefox": 40,
    "Safari": 30
  },
  "devices": {
    "mobile": 90,
    "desktop": 60
  }
}
```

## 🔒 Xavfsizlik

- URL validatsiya
- Rate limiting
- SQL injection himoyasi
- XSS himoyasi
- CSRF token
- HTTPS protokoli

## 📊 Monitoring

Tizim ishlashini monitoring qilish uchun quyidagi ko'rsatkichlar kuzatiladi:
- CPU va RAM foydalanish
- API so'rovlar soni va latency
- Ma'lumotlar bazasi bog'lanishlar soni
- Xatolar soni
- Cache hit/miss ratio

## 🤝 Loyihaga Hissa Qo'shish

1. Fork qiling
2. O'z branch'ingizni yarating (`git checkout -b feature/NewFeature`)
3. O'zgarishlarni commit qiling (`git commit -m 'Yangi funksiya qo'shildi'`)
4. Branch'ni push qiling (`git push origin feature/NewFeature`)
5. Pull Request yarating

## 📞 Bog'lanish

- GitHub: [@azimjonxolmirzayev](https://github.com/azimjonxolmirzayev)
- Email: azimjonxolmirzayev30@gmail.com
