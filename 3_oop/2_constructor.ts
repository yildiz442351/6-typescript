/*
 * Constructor - İnşa Etme Methodu
 * Bir sının constructor'ı o sınıftan bir nesne oluşturulduğunda
 * ilk çağrılan methoddur. Bu method objenin özelliklerinin
 * başlangıç değerlerinin atnmasına ve class'a dışarıdan veri alınmaısna yarar.
 */

class Person {
    //1) sınıfın özelliklerinin belirleme
    ad: string = 'mehmet';
    soyad: string = 'yıldız';
    yas: number = 40;
  
    // 2) constructor tanımı ile başlangıç değeri atama
    constructor(
      yeni_isim: string,
      yeni_soyad: string,
      yeni_yas: number
    ) {
      this.ad = yeni_isim;
      this.soyad = yeni_soyad;
      this.yas = yeni_yas;
    }
  
    // 3) methodlarını tanımlama
    kendiniTanit() {
      console.log(
        `Merhaba benim adım ${this.ad} ${this.soyad} ve ${this.yas} yaşındayım`
      );
    }
  }
  
  const kisi1 = new Person('Ahmet', 'Demir', 45);
  const kisi2 = new Person('Ali', 'Yıldız', 22);
  
  kisi1.kendiniTanit();
  kisi2.kendiniTanit();
  
  //! Soru: bir bilgisayar donanımı için class yazını
  //! Bu class  bilgilerini constructor ile dışarıdan alsın
  //! en az bir methoda sahip olsun
  
  class Bilgisayar {
    monitor = 'hp';
    ram = '16gb';
    isnew = false;
  
    constructor(monitor: string, ram: string, isNew: boolean) {
      this.monitor = monitor;
      this.ram = ram;
      this.isnew = isNew;
    }
  
    getData() {
      console.log(`${this.monitor} ${this.ram} ${this.isnew}`);
    }
  }
  
  const pc = new Bilgisayar('Samsung', '32gb', true);
  
  pc.getData();