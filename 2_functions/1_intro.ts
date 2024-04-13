/*
 * Function Type
 * Typescript'de fonksiyonlarını tipini tanımlamaktan kastımız
 * Fonksiyonun aldığı parametreleri ve döndürdürğü değerin
 * tipini tanımlamaktır.
 
 
 * Jasvascript Fonksiyonları
 * 1- İsimli Fonksiyon
 * 2- İsimsiz Fonksiyon
 * 3- Arrow (Ok) Fonksiyon
 * 4- Singlelin(teksatır) Fonksiyon
 * 5- Immediate call function

*/

//? 1) İsimli Fonksiyon
function hesaplama(a: number, b: number): string {
    return 'Hesaplama Sonucu' + a + b;
  }
  
  const sonuc = hesaplama(19, 56);
  
  //? 2) İsimsiz Fonksiyon
  const noNameFunc = function (par1: number): number {
    return par1 * 10;
  };
  
  //? 3) Ok Fonksiyonu
  const arrowFunc = (par1: number): number => {
    const total = par1 * 5;
    const sum = total / 10;
    return par1 * 10;
  };
  
  //? 4) Tek Satır Fonksiyon
  const singleLineFunc = (par1: number): number => par1 * 10;
  
  //? 4) Tek Satır 2.yöntem
  const singleLineFunc2: FuncType = (par1) => par1 * 10;
  
  /*
   Fonksiyon tipi tanımlamanın aslında 2 farklı yöntemi bulunuyor
   
   1- yukarıdaki örneklerded yaptığımız doğrudan fonk üzerinde partam ve 
   return type'ı tanımlama
  
   2- fonksiyonun tanımı bir type'a taam ve o type'ı çağırma
   
  */
  type FuncType = (par1: number) => number;
  
  // 2 farklı sayı alıp çarpımlarını geri döndüren bir fonksiyon yazınız.
  // tip tanımlarken type yöntemini kullanalım
  
  // 1- type tanımı
  type MathFnType = (a: number, b: number) => number;
  
  // 2- Fonksiyon tanımı
  const calculate: MathFnType = (a, b) => a * b;
  
  const total = calculate(10, 45);
  console.log(total);
  
  //* Kişinin bulunduğu konumu ve oranaın derecesşnş parametre olarak alıp
  //* Geriye "Merhaba, ... konumundaki hava derecesi .... derece" şeklinde
  //* bir metin döndüren fonksiyon yazınız. Type'ınıda ayrıca tanımlayınız
  
  type locType = (loc: string, degree: number) => string;
  
  const useLoc: locType = (loc, degree) => {
    return `Merhaba, ${loc} konummundaki hava derecesi ${degree} derece.`;
  };
  
  const konum = 'Türkiye';
  const derece = 25;
  const text = useLoc(konum, derece);
  
  console.log(text);
  
  //? 5) Immediate call function
  // Hemeen Çağrılan Fonkisiyon
  // Tanımladnığı gibi çağrılan fonksiyonlara verilen isim
  // Dosya içerisnde bir daha kullanılmıyacaksa tercih ederiz
  // Bir ekre çağrılması gerekn fonksiyonları bu şekilde tanımlayabiliyoruz
  
  const sonuc2 = (function (a: number) {
    return a + 'merhaba acil çağrıldım';
  })(10);
  
  console.log(sonuc2);