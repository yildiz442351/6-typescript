/*
 * Array:
 *  Typescript'de dizilerin t,ipini tasnımarken sadce bu değişken
 * bir dizi olucak demiyoruz. Bu dizinin içerisnde şu tipte elemamlar
 * olucak şeklinde tanım yapıyoruz.
 * Sonuç olrak dizinin elemanlarının veri tipinede söylememeiz gereker 

 * Tanım:
 * tip[]
*/

let users: string[] = ['Gül', 'Fatma', 'Ali'];

// users = [12,45,78]

users.push('Veli');
// users.unshift(60);
// users.push(60);

//* Not: Bütün dizi methodlarıda belirlediğimi tipe uygun çalışır.

const ages: number[] = [123, 56, 89];
ages.push(67);

const licences: boolean[] = [true, false, true];

/*

* Soru: Bir dizinin içinde farkı veri tipi tutmak istersek ne yapparız?

* Cevap: Normalde dizinin içerisnde tek bir türde veri olması beklenir.
* Bazı durumlarda birden faklı türde veri alan diziler olabilir.
* Birden fazla türde veri alan diziler tanımlayabilmek için "unionTypes"
* Union Types (Birleşik Tipler) oluşturabilmek için "|" kullanırlır
* string | number > "ya string olsun ya number olsun"
*/

// dizide ya string olsun yada null olabilir
let teachers: (string | null | number)[] = [
  'Uğur',
  null,
  'Ahmet',
  null,
  'Ali',
  56,
];

/*
 * Ben böyle hayal etmiştim  let users:string[] || number[] 😄
 */

// ya stringlerden oluşan bir dizi olsun yada numberlardan oluşan bir dizi olsun
let test_arr: string[] | number[];

test_arr = ['asdass', 'asdasd', 'asdasd'];
test_arr = [11, 56, 678, 2345, 56];
// test_arr = ['sasd', 1231];