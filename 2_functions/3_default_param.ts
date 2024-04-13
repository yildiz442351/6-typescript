/*
 * Default Param (Varsayılan Değere Sahip Parametre)
 
 * Bazı opsiyonel parametrelerde değer göndermemdiğimiz zaman
 * değerin undefined olması yerine bizim belirdlediğimiz varsayılan
 * bir değer sahip olmasını isteyebilirz.
 
 * Özellikler
 * Default param veasyaılan değer verirken ""="" kullanırız.
 
 * Bu yöntemi parametreye göndermediğmiz zman undefined olmasını
 * istemiyorsak kullanırızç  

*/

function selamVer(isim: string = 'Dünya'): string {
    return 'Merhaba ' + isim;
  }
  
  console.log(selamVer()); // Merhaba Dünya
  console.log(selamVer('Ahmet')); // Merhaba Ahmet
  
  //* Herkes default paramereye sahip bir fonksiyon yazsın
  //* ardından hem parameteryi gönderek hemde göndermeyerek
  //* elde ettiğiniz sonuçları konsola yazdırın
  //* örn: kdv hesaplama / indirim hesaplama fonksiyonları
  
  function hesaplaKDV(maliyet: number, kdv: number = 0.18): number {
    return maliyet * kdv;
  }
  
  console.log(hesaplaKDV(300));
  console.log(hesaplaKDV(300, 0.08));