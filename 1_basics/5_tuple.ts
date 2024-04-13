/*
 * Tuple
 * typescript ile birlikte hayatıma giren veri tipidir.
 * Uzunluğu sabit ve elamanlarının sırası / tipi belirli olan dizilerde kullanırız.

 * Bir dizi içersindeki verilerin type'larını sırlarız
 * Örn: [number,string,string,object]

*/

// örnek 1

const ders1: [string, number] = ['programlama', 3];
const ders2: [string, number] = ['matematik', 3];

// örnek 2

const gradient: [string, number, number] = ['to right', 45365, 54665];
const gradient2: [string, number, number] = ['to bottom', 1238, 9745];

//  soru: | bu işlevin farklı tanımlaması gibi mi?

// cevap: hayır, benzer ama işlevsel anlamda biraz daha farklı
// unionTypes'da dizideki eleman sayısını veya sırasını belirlemeyeiz
// sadece elemanların sahip olucağı tipi söyleri
// tuple sayesinde dizideki elemnalrın sırasınıda sayısınıda tipini de ifade edebiliriz.

// örnek 3

// bir css renginin verilerini dizi içerisnde tutmak istedik
// rgb(123,68,34)
// rgba(123,68,34,0.9)

// yukarıdaki örnekte opacity değerinin opsiyonel olması gerkir
// tuple'da bir değeri opsiyonel yapmak için tipinin sonuna ? koyarız

let color: [number, number, number, number?];

color = [123, 78, 67];
color = [123, 78, 67, 0.97];

// opsiyonel bir değerin ardında gelicek olan değer zorunlu olamaz ve mutlaka opsiyonel olmalı
let data: [number, string?, string?];

// 3 değeride tanımladık
data = [123, '2134', '2134'];

// ilk iki değeri tanımladık
data = [123, '2134'];

// sadece ilk değeri tanımladık
data = [123];

// 1. ve 3.değeri tanımladık
data = [123, undefined, 'asdasd'];

//* Gerçek proje örneği

//* useState methodu her zaman iki değere sahip dizi döndürrü
//* birinci değer her zman değişken ikşince değerse her zaman fonskiyon olur
//* biz useState tarzında bir hooku kendimiz yazmak istersek tuple kullanılması gerekir

//* const [text,setText] = useState()

//* type > [string,function]