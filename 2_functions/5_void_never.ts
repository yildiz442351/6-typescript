// void:
// genellikle bir fonksiyonun bir şey dödnürmdeiğini ifade etmek için kullanılır
// void varsa return satırı yoktur(varsada değer döndürmez)
// returnde değer dönüyosa tip asla void değildir

function selamla(): void {
    console.log('merhaba');
  
    // fonksiyonu durdurmaya yarayan return kullanılabilir
    return;
  }
  
  const sonuc = selamla();
  console.log(sonuc);
  
  // Never: hata üreten fonksiyonlarda kullanılır
  // Örenğin bir fonksiyon sürekli olarak ahat fırlatması durumu
  // "Hiç bir zamn bu noktaya ulaşılamaz" durmunu ifade eder
  
  function hataFonksiyonu(message: string): never {
    throw new Error(message);
  
    let x = 1 + 6;
  }
  
  try {
    hataFonksiyonu('selam');
    console.log('işlem başarılı');
  } catch (err) {
    console.log(err);
  }
  
  /*
   * Sonuç Olarak
   * any de type belli olmaığı her şey dönebilir.
   * void'de hiç bir şey dönmez
   * never'da herhangi bir hata fırlatırlı (yeni return satırı hiç olmaz)
   */