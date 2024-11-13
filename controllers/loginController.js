const User = require('../models/user');
const bcrypt = require('bcrypt');  // bcrypt'i içeri aktar

// Giriş sayfasını render eden fonksiyon
exports.loginPage = (req, res) => {
  res.render('login', { title: 'Giriş Yap', error: null });
};

// Giriş işlemi fonksiyonu
exports.login = async (req, res) => {
  try {
    const { username, password } = req.body;

    // Eksik alan kontrolü
    if (!username || !password) {
      return res.render('login', { title: 'Giriş Yap', error: 'Lütfen tüm alanları doldurun.' });
    }

    // Kullanıcıyı veritabanında ara
    const user = await User.findOne({ username });

    // Eğer kullanıcı yoksa
    if (!user) {
      return res.render('login', { title: 'Giriş Yap', error: 'Kullanıcı bulunamadı.' });
    }

    // Şifreyi doğrulama
    const match = await bcrypt.compare(password, user.password);

    // Şifre doğru değilse
    if (!match) {
      return res.render('login', { title: 'Giriş Yap', error: 'Şifre yanlış.' });
    }

    // Giriş başarılıysa, kullanıcıyı yönlendir
    res.redirect('/');  // Ana sayfaya yönlendir
  } catch (error) {
    console.error('Giriş sırasında hata:', error);
    res.render('login', { title: 'Giriş Yap', error: 'Bir hata oluştu. Lütfen tekrar deneyin.' });
  }
};
