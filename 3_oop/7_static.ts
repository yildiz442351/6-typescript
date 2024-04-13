/*
 * Static kelimesi bir sınıf örneği (instance) olmdan doğrudan
 * sınıfa ait olduğu anlamına gelir. Bu bir sınıfın örneği 
 * oluşturulmadan da sınıf üzerinden erişlebilen method
 * ve özellikleri tanımlamak için kullanılır

*/

//! Static Method

class Matematik {
    topla(x: number, y: number): number {
      return x + y;
    }
  
    static carp(x: number, y: number): number {
      return x * y;
    }
  }
  
  // methodu kullanaiblmek için class'ın örneğini oluşturmalıyız
  const mat = new Matematik();
  console.log(mat.topla(67, 76));
  
  // çarp methodu statik olduğu için doğrudan erişilebilir.
  console.log(Matematik.carp(10, 20));
  
  //! Static Değişken
  
  class Ogrenci {
    public isim: string;
    public static mevcutOgrenciSayisi: number = 0;
  
    constructor(yeni_isim: string) {
      this.isim = yeni_isim;
      // constructor > her yeni öğrenci oluşrurluğunda tetiklenir
      // static değişkeni bir arttırır
      Ogrenci.mevcutOgrenciSayisi++;
    }
  }
  
  console.log('sayı>>>', Ogrenci.mevcutOgrenciSayisi);
  
  const ogrenci1 = new Ogrenci('Ali');
  console.log(ogrenci1.isim);
  const ogrenci2 = new Ogrenci('Ayşe');
  const ogrenci3 = new Ogrenci('Fatma');
  const ogrenci4 = new Ogrenci('Fırat');
  
  console.log('sayı>>>', Ogrenci.mevcutOgrenciSayisi);