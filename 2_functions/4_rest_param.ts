/*
 * Rest Param
 * Parametre listesinin belirsiz veya sınırsız
 * olduğu durumlarda rest param kullanılır.
 
 * Özellikler 
 * Bir parametreyi rest param haline getirmek için
 * (...) kullanırız
 
 * Bir rest paramın ardından başka bir parametre yazılamaz.
 * Çünkü gönderilen bütün paramlar rest paramın bir parçası gibi algılanır                                                           

 * Gönderilen parametreler rest ile bir dizi haline glir
*/

function toplam(metin: string, ...sayilar: number[]): string {
    return metin + sayilar.reduce((toplam, sayi) => toplam + sayi, 0);
  }
  
  console.log(toplam('sonuç1 ', 123, 45, 67, 89, 989, 12));
  console.log(toplam('sonuç2 ', 12, 34));
  console.log(toplam('sonuç3 ', 12, 34, 34, 45, 6, 687, 6, 342, 34));
  
  // Aldığı iki parametreyi toplayan
  // İlk iki tanesinin devamında aldğı bütün paramterleri çapran
  // bir fonksiyon yazınız
  // Bu fonksiyon sonuç olarak ilk iki değerini toplamını
  // ve diğer değerlerin çağrımını bir obje olarak döndürsün ({toplam:12312,çarpım:3456})
  // çarpılacakları rest param olarak tanımlayın
  
  function hesapla2(
    sayi1: number,
    sayi2: number,
    ...sayilar: number[]
  ) {
    // ilk iki parameteryi topla
    let toplam = sayi1 + sayi2;
  
    // geriye kalanları çarp
    let carpim = sayilar.reduce((toplam, sayi) => toplam * sayi, 1);
  
    return { toplam, carpim };
  }
  
  console.log(hesapla2(34, 56, 123, 5, 46, 687, 89, 342, 234));