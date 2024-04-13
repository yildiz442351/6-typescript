/*
 * OOP (Object Orianted Programming - Nesne Tabanlı Programlama ):
 * Bugüne kadar projelerimizde hep fonksiyonlar kullanarak geliştridik.
 * Fakat projeinin kapmsaı arttıkça kullanıdğımız yaklaşım proje 
 * yönetimini zorlaştıraibilir.Bu yüzden mühendissler büyük projleri yaparken
 * yazılımcıların işini kolaylaştıabilicek programlama arayışına gidiyorlar.
  
 * OOP: Etrafımızda bulunan nesnelerin özellik ve davranışlarına göre modelleyerek
 * yapılan programalam yöntemi.
 
 * OOP yaklaşımının içerisnde iki farklı tür bulunur.
 * Bunlar class ve interface'lerdir.
 * Sıkça karşılacağımız terimler
 * Class | Interface | Extends | InstanceOf  | Implements

*/

class Old_Phone {
    // Burası class'ın gövdesidir. Buraya property ve methods gelir.
  
    // Örnek property'leri aşağıya yazılım
    telefon_tipi: 'entegre' | 'ayrılmış' = 'entegre';
    tus_takim_tipi: 'döner' | 'santral' = 'döner'; //string lit
    govde: string = 'yatay';
  
    // örnek methodları aşağıya yazalım
    ahizeAc() {
      console.log('Ahize açılıyor....');
    }
  
    numarayiCevir(telNum: number): boolean {
      console.log(
        this.tus_takim_tipi === 'döner'
          ? 'Numara çevriliyor... '
          : 'Normal tuşlanıyor..' + telNum
      );
  
      console.log('Telefon çalıyor.');
  
      return true;
    }
  
    ahizeKapat() {
      console.log('Ahize kapatılıyor...');
    }
  }
  
  /*
   * Class'ların kullanımı:
   * Bir class'ı tanımlamak aynı bir type'ı veya fonksiyonu tanımlamak gibidir.
   * Bir class'î kullanmak yani aktif etmek için new keyword'u kullanılır.
   * Bu sayede class'ın çalışan bir kopyasını oluştumuş oluyoruz
   * Bu kopyaya'da object(nesne) denir.
   */
  
  // Bu satırda bir obje oluşturduk ve referansını değişkene aktardık
  const antika_telefon = new Old_Phone();
  const antika_telefon2 = new Old_Phone();
  
  console.log(antika_telefon);
  console.log(antika_telefon2);
  
  antika_telefon.ahizeAc();
  
  antika_telefon.numarayiCevir(324345433456);
  
  antika_telefon.ahizeKapat();
  
  /*
   * Obje be class arasındaki ilişki şu şekildedir:
   * Class'lar tanımlanmış olan ifadelerdir objeler ise
   * tanımlanmış olan bu ifadelerin çalışan halleridir
   
   * Class'lar bilgisayarın hafızasında yani RAM'de yer kaplamaz .
   * Ama objeler için RAM'de yer ayrılır.
   
   * Bir fırın benzetmesi yapabilir. Fırındaki ekemek kalıbı bir class ise
   * o kalıptan çıkan ekemek bir obje'dir.
  
   * Json Objesi ile Class objesi.
  
   * Her ikiside bir objedir.
   * Class onbjelerinin bir ismi vardır.
   * Json nobjelerin bu yoktur (anonimdir)
   * Json objelerinde objeinin type'ını yazarız.
   * Class objelerinde buna gerek klamaz
   * Json Objeleri arasında miras alama olmaz. Ama class'lar arasında olabilir.
  */
  
  // json objesi
  const json_object = {
    name: 'merhaba',
  };
  
  // class objesi
  const class_object = new Old_Phone();
  
  console.log('json_obje', json_object);
  console.log('class_obje', class_object);
  
  /*
   * this kullanımı:
   * Bir classın birden fazla kopyası (objesi) oluşturulabilir
   * ve her objeinin kendine ait özellik ve methodları bulunur.
   * Bu özellikleri obje kendi içerinden erişebilmesi için
   * "this" anahtar kelimesi kullanılır.
   *
   * Bu sayde objedki bir method içerisnden objenin sahip oludğu diğer
   * özellik veya methodlara erişebiliriz.
   */
  
  class Modal_Class {
    baslik: string = '';
    acilma_sayisi: number = 0;
    acik_mi: boolean = false;
  
    modali_ac(yeniBaslik: string) {
      // class içerisndeki bir değer erişme
      this.baslik = yeniBaslik;
      this.acilma_sayisi = this.acilma_sayisi + 1;
      this.acik_mi = true;
    }
  
    modali_kapat() {
      this.baslik = '';
      this.acik_mi = false;
    }
  }
  
  const uyari_modal = new Modal_Class();
  
  console.log('önce >>>>', uyari_modal);
  
  uyari_modal.modali_ac('Günlük saat sınırını aştınız');
  
  console.log('açıkken >>>>', uyari_modal);
  
  uyari_modal.modali_kapat();
  
  console.log('sonra >>>>', uyari_modal);