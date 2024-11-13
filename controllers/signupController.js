const User = require('../models/user');
const bcrypt = require('bcrypt');

// Kayıt sayfasını render eden fonksiyon
exports.signupPage = (req, res) => {
  res.render('signup', { title: 'Kayıt Ol', error: null });
};

// Kayıt işlemi fonksiyonu
exports.signup = async (req, res) => {
  try {
    const { username, password, firstName, lastName, email } = req.body;

    // Eksik alan kontrolü
    if (!username || !password || !firstName || !lastName || !email) {
      return res.render('signup', { title: 'Kayıt Ol', error: 'Lütfen tüm alanları doldurun.' });
    }

    // Şifreyi hashleyin
    const hashedPassword = await bcrypt.hash(password, 10);

    // Yeni kullanıcı oluşturun ve veritabanına kaydedin
    const newUser = new User({
      username,
      password: hashedPassword,
      firstName,
      lastName,
      email
    });

    await newUser.save(); //Bu satır, kullanıcıyı veritabanına kaydeder.

    // Başarılı kayıt mesajı ile başarılı sayfasına yönlendirme
    res.render('signup-success', { title: 'Kayıt Başarılı' });
  } catch (error) {
    console.error('Kayıt sırasında hata:', error);
    res.render('signup', { title: 'Kayıt Ol', error: 'Bu kullanıcı adı veya e-posta zaten kayıtlı!' });
  }
};
