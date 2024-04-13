/*
 ! Readonly (Salt Okunur) Property;
 * Typescript'de bir sınıfın özelliğini veya bir nesnnin özelliğni
 * sadece okunabilir yapmaya yarar.
 * Read only ile tanımladığımız bir özellik class'larda sadece
 * constuctor kısmında değeri atanabilir.
 * nesnelerde ise değeri hiç değiştirlemez

*/

type Person = {
    name: string;
    surname: string;
    readonly TCno: number;
  };
  
  const kisi: Person = {
    name: 'Mahmut',
    surname: 'Yıldırım',
    TCno: 2132353456845,
  };
  
  kisi.name = 'Mehmet';
  // kisi.TCno = 342425; DEĞİŞTREMİYORUM
  
  class Kitap {
    public readonly isim: string;
    public sayfa: number;
  
    constructor(yeni_isim: string, yeni_sayfa: number) {
      console.log('constructor çalıştı...');
      this.isim = yeni_isim; // readonly özelikler constructor içerisnde değiştreiiblirz
      this.sayfa = yeni_sayfa;
    }
  
    setYeniSayfa(en_yeni_sayfa: number) {
      this.sayfa = en_yeni_sayfa;
      // this.isim = 'asd'; // HATA VERİYOR
    }
  }
  
  const hobbit = new Kitap('Hobbit', 500);
  const hobbit2 = new Kitap('Hobbit', 500);
  // hobbit.isim = 'Yüzüklerin...'; // HATA VERİYOR
  hobbit.sayfa = 600;