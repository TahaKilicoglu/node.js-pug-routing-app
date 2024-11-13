// Giriş sayfası için kontrolör fonksiyonu
exports.loginPage = (req, res) => {
  res.render('login', { title: 'Giriş Yap', error: null });
};

// Giriş işlemi için kontrolör fonksiyonu
exports.login = (req, res) => {
  const { username, password } = req.body;
  // Basit kimlik doğrulama kontrolü
  if (username === 'admin' && password === 'admin') {
    res.render('login-success', { title: 'Giriş Başarılı' });
  } else {
    res.render('login', { title: 'Giriş Yap', error: 'Giriş başarısız! Lütfen tekrar deneyin.' });
  }
};
