const express = require('express'); // Express.js framework'ünü dahil eder.
const path = require('path'); // Node.js'in path modülünü dahil eder.
const bodyParser = require('body-parser'); // body-parser paketini dahil eder.
const app = express(); // Yeni bir Express uygulaması oluşturur.
const port = 3000; // Uygulamanın çalışacağı portu belirler.

// Middleware: İstekleri loglama
const requestLogger = (req, res, next) => {
  console.log(`${req.method} ${req.url}`); // İstek metodunu ve URL'yi konsola yazdırır.
  next(); // Bir sonraki middleware fonksiyonuna geçiş yapar.
};

// Middleware: Kimlik doğrulama (örnek)
const authenticate = (req, res, next) => {
  const auth = req.headers.authorization; // İstek başlıklarından Authorization başlığını alır.
  if (auth === 'secret-token') { // Authorization başlığı 'secret-token' ise
    next(); // Bir sonraki middleware fonksiyonuna geçiş yapar.
  } else {
    res.status(401).send('Unauthorized'); // Değilse, 401 Unauthorized yanıtı gönderir.
  }
};

// Pug ayarları
app.set('views', path.join(__dirname, 'views')); // Pug şablonlarının bulunduğu dizini ayarlar.
app.set('view engine', 'pug'); // Pug'ı şablon motoru olarak ayarlar.

// Static dosyalar için public dizinini kullanma
app.use(express.static(path.join(__dirname, 'public'))); // Public dizinini static dosyalar için kullanır.

// body-parser middleware'ini kullanma
app.use(bodyParser.urlencoded({ extended: true })); // URL-encoded veri için body-parser'ı kullanır.
app.use(bodyParser.json()); // JSON veri için body-parser'ı kullanır.

// Middleware'leri kullanma
app.use(requestLogger); // requestLogger middleware'ini kullanır.

// Rotalar
const mainRoutes = require('./routes/mainRoutes'); // mainRoutes dosyasını dahil eder.
const authRoutes = require('./routes/authRoutes'); // authRoutes dosyasını dahil eder.
app.use('/', mainRoutes); // Ana rotaları kullanır.
app.use('/auth', authRoutes); // Kimlik doğrulama rotalarını kullanır.

// Kimlik doğrulama gerektiren rotalar
app.use(authenticate); // authenticate middleware'ini kullanır.

app.listen(port, () => {
  console.log(`Uygulama http://localhost:${port} adresinde çalışıyor.`); // Sunucunun çalıştığını konsola yazdırır.
});
