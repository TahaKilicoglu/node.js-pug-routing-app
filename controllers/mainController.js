// Ana sayfa için kontrolör fonksiyonu
exports.home = (req, res) => {
    res.render('index', { title: 'Ana Sayfa', message: 'Hoş geldiniz!' }); // Ana sayfa şablonunu render eder ve verileri gönderir.
  };
  
  // Hakkında sayfası için kontrolör fonksiyonu
  exports.about = (req, res) => {
    res.render('about', { title: 'Hakkında', message: 'Bu bir yönlendirme uygulamasıdır.' }); // Hakkında sayfası şablonunu render eder ve verileri gönderir.
  };
  