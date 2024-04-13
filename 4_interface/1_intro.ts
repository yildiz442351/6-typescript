/*
 ! Interface
 * Interface, bir nesnenin yapısnı ve bu nesnenin
 * hangi özellikleri ve metholar sahip olucağını belirler

  ! Custom Type | Abstract Class | Interface
  * Birbirine benzer görevler yapmaktadır.
  
  ? Abstract Class - Interface Farkları
  * Class'lar sadece bir class'ı miras alabilir yani exten edebilir.
  * Interce ise birden fazla interface i miras alma yeteneğine sahiptir
  * Interface'lerde erişim belirteci bulunmuyor

  ? Type - Interface Farkları:
  * Tanımlama Yöntemi
  * Extend ve Implement Yetenekleri farklı
  
  ? Interface Özellikleri
  * Interface isimlendiriken
  * ya değişkenin isminin sonuna "Interface" takısı ekliyoruz.
  * ya da değişken isminin başına "I" takısı ekliyoruz
  * Yazılı olmayan bir kuraldır. Yazılımcılar birbinin yazdığı kodu
  * daha rahat interface olduklarını anlayabilmeleri için yapılır.
*/

//! Type ile Obje Tanınmı
type PersonType = {
    name: string;
  };
  
  const kisi: PersonType = {
    name: 'Ahmet',
  };
  
  //! Interface ile obje tanımı
  interface IPerson {
    name: string;
  }
  
  const kisi2: IPerson = {
    name: 'Rıfat',
  };
  
  // İleride oluşturcağımız bir geometrik şekil nesnensini
  // özelliklerinin tipini tanımladığımız bir interface yazalım
  
  interface IShape {
    width: number;
    height: number;
    radius?: number; //opsiyonel ifade
    calculateArea(): number | string; // metodun görevini yazmıyoruz
  }
  
  // Type'ı yukarıda tanımladığımız interface ile
  // belirtilmiş olan bir nesne oluşturlaım
  const square: IShape = {
    width: 200,
    height: 200,
  
    calculateArea() {
      return this.width * this.height;
    },
  };
  
  const circle: IShape = {
    width: 40,
    height: 1,
    radius: 25,
  
    calculateArea() {
      if (this.radius) {
        return Math.PI * this.radius * this.radius;
      } else {
        return 'Lütfen yazrı çap tanımlayınız';
      }
    },
  };
  
  console.log(circle.calculateArea());