/*
 * Abstract Class (Soyut Sınıf);
 * Abstract Class'lar alt sınıflar için birer şema görevi görür
 * Soyut sınıflar sayesinde oluşturucağımız sınıfların özelliklerini,
 * methodlarını  ve bunların tipini belirleri

 ! Soyut Sınıfların Doğrudan örnekleri oluşturlamazlar.
 * Alt sınıfların ortak davranışlarını tanımlamak için kullanılılarlar
*/

abstract class TakePhoto {
    constructor(cameraMode: string, filter: string) {}
  
    // abstract method tanımlama
    // bir soyut method tanımlarken methodun görevini değil
    // sadece tipini tanımlarız.
    // instagramdaki görevi farklı olur twitterdaki görvi farklı olur
    abstract share(send_to: string): void;
  }
  
  // new TakePhoto() // SOYUT SINIFLARIN DOĞRUDAN ÖRNEĞİ OLUŞTURULAMAZ
  
  // Ama abstract class'ın özelliklerini ve methodlarını miras alan
  // yeni bir class oluşturup. Oluşturuğumuz bu class'ın içerisnde
  // yarım kalan / görevi tanımlanmamış / implement edilmemiş olan
  // methodları tamamlayıp bir örnek oluşturabiliyoruz.
  
  class Instagram extends TakePhoto {
    constructor(cameraMode: string, filter: string) {
      super(cameraMode, filter);
    }
  
    share(send_to: string): void {
      // bu alanı doldurduğumu zaman
      // yani methodun görevini ttanımladığımız zman
      // onu implement etmiş oluyoruz
      console.log('Çekilen fotoğraf ' + send_to + ' ile paylaşılıyor');
    }
  }
  
  const insta = new Instagram('ön kamera', 'gece filtresi');
  insta.share('mehmet');
  
  // soyut sınıfı 2. bir şekilde implement edelim
  class Twitter extends TakePhoto {
    constructor(cameraMode: string, filter: string, tweet_id: number) {
      super(cameraMode, filter);
    }
  
    share(send_to: string): void {
      // burada abstract olan yeni görevi tanımlanammış
      // olan methodun görevini tanımlayacağız
      console.log(
        'Çekilen fotoğraf' + send_to + 'kişisine tweet olarak atıldı'
      );
    }
  }