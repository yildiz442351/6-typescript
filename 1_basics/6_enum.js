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
var renkler = {
    red: 'Kırmızı',
    green: 'Yeşil',
    yellow: 'Sarı',
};
// typescript'de nasıl yapıyoruz
var Renkler;
(function (Renkler) {
    Renkler[Renkler["K\u0131rm\u0131z\u0131"] = 0] = "K\u0131rm\u0131z\u0131";
    Renkler[Renkler["Yesil"] = 1] = "Yesil";
    Renkler[Renkler["Sari"] = 2] = "Sari";
})(Renkler || (Renkler = {}));
var araba_renk = Renkler.Sari;
// örnek 2
var Gunler;
(function (Gunler) {
    Gunler[Gunler["Pazartesi"] = 0] = "Pazartesi";
    Gunler[Gunler["Sali"] = 1] = "Sali";
    Gunler[Gunler["Carsamba"] = 2] = "Carsamba";
    Gunler[Gunler["Persembe"] = 3] = "Persembe";
    Gunler[Gunler["Cuma"] = 4] = "Cuma";
    Gunler[Gunler["Cumartesi"] = 5] = "Cumartesi";
    Gunler[Gunler["Pazar"] = 6] = "Pazar";
})(Gunler || (Gunler = {}));
var day = Gunler.Pazartesi; // 0
var day2 = Gunler[0]; // Pazartesi
var day3 = Gunler[Gunler.Sali]; // Salı
console.log('Gunler.Pazartesi', day);
console.log('Gunler[0]', day2);
console.log('Gunler[Gunler.Sali]', day3);
// Enum içerisinde değişken değerini tanımlama
var Durum;
(function (Durum) {
    Durum["set"] = "Haz\u0131rlan\u0131yor";
    Durum["travel"] = "Seyehat Ediyor";
    Durum["done"] = "Seyahat Tamamland\u0131";
})(Durum || (Durum = {}));
console.log(Durum.set);