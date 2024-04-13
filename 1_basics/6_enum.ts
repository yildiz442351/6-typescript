/*
 * Enum (numaralandırma)
 * Belirli değerler kümesi
 * Eleman sayası ve alabilceği değrler belirli olan değişkenlerin
 * değerlerini bir grup halinde tutmak için kullanıyoruz
 
 * Genelde az miktarda faklı değer sahip olan verileri gruplandırmak
 * için tercih ederiz
  
 * Enum isimlendiriken sonuna "enum" takısı koymak faydalıdır.
 * İsimlendiriken dğişken isimlendirme kurallarına sadık kalırız. 
 * İlk harfi büyük olmalı
 */

// klsik js'de nasıl yapardık
const renkler = {
    red: 'Kırmızı',
    green: 'Yeşil',
    yellow: 'Sarı',
  };
  
  // typescript'de nasıl yapıyoruz
  enum Renkler {
    Kırmızı,
    Yesil,
    Sari,
  }
  
  let araba_renk = Renkler.Sari;
  
  // örnek 2
  enum Gunler {
    Pazartesi,
    Sali,
    Carsamba,
    Persembe,
    Cuma,
    Cumartesi,
    Pazar,
  }
  
  let day = Gunler.Pazartesi; // 0
  let day2 = Gunler[0]; // Pazartesi
  let day3 = Gunler[Gunler.Sali]; // Salı
  
  console.log('Gunler.Pazartesi', day);
  console.log('Gunler[0]', day2);
  console.log('Gunler[Gunler.Sali]', day3);
  
  // Enum içerisinde değişken değerini tanımlama
  enum Durum {
    set = 'Hazırlanıyor',
    travel = 'Seyehat Ediyor',
    done = 'Seyahat Tamamlandı',
  }
  
  console.log(Durum.set);