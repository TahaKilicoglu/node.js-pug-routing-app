const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const path = require('path');
const authRoutes = require('./routes/authRoutes');
const mainRoutes = require('./routes/mainRoutes');

const app = express();

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Static Files (e.g., for CSS, JS)
app.use(express.static(path.join(__dirname, 'public')));

// View Engine Setup (Pug)
app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));

// Routes
app.use('/auth', authRoutes);
app.use('/', mainRoutes);

// MongoDB Connection
mongoose.connect('mongodb+srv://mobicomtaha:KCNwcp8lX4FnT2iv@routing-app.qvwg2.mongodb.net/?retryWrites=true&w=majority&appName=routing-app')
  .then(() => {
    console.log("MongoDB bağlantısı başarılı");
  })
  .catch(err => {
    console.error("MongoDB bağlantı hatası:", err);
  });

// Start Server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Sunucu ${PORT} portunda çalışıyor...`);
});
