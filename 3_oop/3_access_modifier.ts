/*
 ! Access Modifiers (Erişim Beliretçleri)
 * Class elemanları hassas bilgileri tutacakları zaman
 * bu bilegelerin class'ın dışından erişilip erişlmeyceğini
 * belirlemek isteyebiliriz.
 
 * Örneğin kredikartı bilgierlini tutan bir class olsun
 * Bu class'ıb tutğu bilgler dışarıdan erişilmesi güvenlikü
 * zaafiyeti oluşturabilir. Erişiminin kısıtlanması gerekiyır
 
 ! 3 adet erişim belirteci vardır
 * public: hem class dışarısından hemde class'ı extend eden diğer class'lardan erişelbilir.
 * protected: sadece class'ın kendisi ve onu miras alan diğer class'lardan erişilir.
 * private: Sadece tanımladığımız class içerisinden erişilebilir
 
 */

//! Public
class Arac {
    public marka: string;
  
    constructor(yeni_marka: string) {
      this.marka = yeni_marka; // kendi içerisiinden erişlebilir
    }
  }
  
  class Motor extends Arac {} //  miras alınandan erişlebilir
  
  const ford = new Arac('ford');
  ford.marka; // dışarısındana erişilebilir
  
  //! Protected
  
  class EvcilHayvan {
    protected ad: string;
  
    constructor(ad: string) {
      this.ad = ad; // kendi içinden erişiliyor
    }
  }
  
  class Kopek extends EvcilHayvan {
    havla() {
      console.log(this.ad); // miras alaınan yerlerde erişilir
    }
  }
  
  const kopek = new Kopek('Bıncuk');
  // kopek.ad; // dışarıdan erişlemez
  
  //! Private
  class OzelPersonel {
    private isim: string;
  
    constructor(yeni_isim: string) {
      this.isim = yeni_isim;
    }
  
    getPersonel() {
      console.log(this.isim); // içeriden erişim var
    }
  }
  
  // miras alınıp erişlemez
  class GumrukPersonel extends OzelPersonel {
    isminiYaz() {
      // console.log(this.ad);
    }
  }
  
  // dışarıdan erişelemz
  const mahmut = new OzelPersonel('mahmut');
  // mahmut.isim;
  
  /*
   * Not: Erişim belirteçeleri aynı bütün ts'ye özel bütün kodlarda
   * olduğu gibi kodu yazarkenn geliştirme ortamında işimize yarar.
   * Kodu js'ye derledğimiz zaman  erişim belirteçleri silinir.
   * yani hepsi public olur.
   */
  
  /*
   *             Kendi İçerisinden * Extend Edenler * Dışarıdan
   *  public:           ✔                 ✔               ✔
   *  protected:        ✔                 ✔               ×
   *  private:          ✔                 ×                ×
   */