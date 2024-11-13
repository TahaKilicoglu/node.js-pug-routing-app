// Ana sayfa için kontrolör fonksiyonu
exports.home = (req, res) => {
  res.render('index', { title: 'Ana Sayfa', message: 'Hoş geldiniz, bu bir test mesajıdır!' });
};

// Hakkında sayfası için kontrolör fonksiyonu
exports.about = (req, res) => {
  res.render('about', { title: 'Hakkında', message: 'Bu bir yönlendirme uygulamasıdır.' });
};
