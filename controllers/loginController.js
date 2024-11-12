// Giriş sayfası için kontrolör fonksiyonu
exports.loginPage = (req, res) => {
    res.render('login', { title: 'Giriş Yap' }); // login.pug şablonunu render eder ve başlık olarak 'Giriş Yap' gönderir.
  };
  
  // Giriş işlemi için kontrolör fonksiyonu
  exports.login = (req, res) => {
    const { username, password } = req.body; // req.body'den username ve password değerlerini alır.
    // Basit kimlik doğrulama kontrolü
    if (username === 'admin' && password === 'admin') { // Kullanıcı adı 'admin' ve şifre 'password' ise
      res.send('Giriş başarılı!'); // 'Giriş başarılı!' yanıtını gönderir.
    } else {
      res.status(401).send('Giriş başarısız!'); // Değilse, 401 Unauthorized yanıtı gönderir.
    }
  };
  