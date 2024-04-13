/*
 ! Readonly (Salt Okunur) Property;
 * Typescript'de bir sınıfın özelliğini veya bir nesnnin özelliğni
 * sadece okunabilir yapmaya yarar.
 * Read only ile tanımladığımız bir özellik class'larda sadece
 * constuctor kısmında değeri atanabilir.
 * nesnelerde ise değeri hiç değiştirlemez

*/
var kisi = {
    name: 'Mahmut',
    surname: 'Yıldırım',
    TCno: 2132353456845,
};
kisi.name = 'Mehmet';
// kisi.TCno = 342425; DEĞİŞTREMİYORUM
var Kitap = /** @class */ (function () {
    function Kitap(yeni_isim, yeni_sayfa) {
        console.log('constructor');
        this.isim = yeni_isim; // readonly özelikler constructor içerisnde değiştreiiblirz
        this.sayfa = yeni_sayfa;
    }
    Kitap.prototype.setYeniSayfa = function (en_yeni_sayfa) {
        this.sayfa = en_yeni_sayfa;
        // this.isim = 'asd'; // HATA VERİYOR
    };
    return Kitap;
}());
var hobbit = new Kitap('Hobbit', 500);
// hobbit.isim = 'Yüzüklerin...'; // HATA VERİYOR
hobbit.sayfa = 600;