# Gençlik Merkezi Üye Başvuru formu ve Kurs Kayıt Ekranı
Repository Açıklaması: Gençlik Merkezi Üyelik ve Kurs Yönetim Sistemi
Proje Açıklaması:

Bu proje, gençlik merkezine ait üyelik başvuru ve kurs yönetim süreçlerini dijital ortamda yönetmek üzere geliştirilmiş kapsamlı bir web uygulamasıdır. Proje iki ana bölümden oluşmaktadır:

# Üyelik Sistemi:

Gençlik Merkezi Üyelik Başvuru Formu / Sign Up Sayfası:
Üyelik başvurusunda bulunacak adaylar, ad, soyad, T.C. kimlik numarası, doğum tarihi, ikametgah adresi gibi kişisel bilgilerini içeren detaylı bir formu dolduracaklar.
Amaç: Üyelerin kayıt altına alınması ve veritabanında saklanması.
Özellik: Geniş kapsamlı kişisel bilgi girişi; form verileri, güvenli bir şekilde Firebase (veya tercih edilen veri tabanı) üzerinde saklanır.
Kurs Yönetim Sistemi:

# Lider Giriş Ekranı:
Liderlere özel, sadece onlara ait olan ve el ile veri tabanına eklenen lider bilgileriyle giriş yapabilecekleri bir log in sayfası bulunuyor.
Kurs Duyuru Ekranı:
Giriş yapmış liderler, mevcut tüm kursları ve kurs açıklamalarını görebilecek; ayrıca yeni kurs duyuruları ekleyebilecekler.
Kurs Başvuru Ekranı:
Üyeler sisteme giriş yaptıktan sonra, mevcut kurslara başvuru yapabilecekler. Bu ekran üzerinden üyelerin kurs başvuruları alınır ve ilgili veri tabanına kaydedilir.
Teknolojiler:

# Frontend: 
HTML, CSS, JavaScript (İsteğe bağlı olarak modern frameworkler entegre edilebilir)
# Backend & Veritabanı: 
Firebase Realtime Database/Firestore (ücretsiz kullanım kapsamında) ve Firebase Authentication
# Hosting: 
GitHub Pages ile statik içerik barındırma, Firebase Hosting entegrasyonu seçenekleri
Özellikler:

# Üyelik Başvuru: 
Geniş kapsamlı formlar aracılığıyla üyelerin veritabanına kaydedilmesi.
# Kullanıcı Doğrulama: 
Üyeler için sign up ve log in; liderler için sadece log in (lider bilgileri el ile veri tabanına eklenir).
# Gerçek Zamanlı Güncellemeler: 
Firebase kullanarak form verilerinde ve kurs duyurularında gerçek zamanlı güncellemeler.
# Kurs Yönetimi: 
Liderlerin kurs duyurusu yapabilmesi ve üyelerin kurslara başvurabilmesi.
# Proje Amacı: 
Bu projenin amacı, gençlik merkezi üyelerinin ve liderlerinin ihtiyaç duyduğu tüm formlama, kayıt, duyuru ve başvuru işlemlerini tek bir sistem üzerinden güvenli ve verimli bir şekilde yönetebilmektir.

