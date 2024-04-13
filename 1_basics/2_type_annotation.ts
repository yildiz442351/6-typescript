/*
 * Type Annotiation:
 * Javascript değişkenin türünü belirlime gibi bir özellik söz konusu değil
 * Fakat typescript'de tanımladığımız değişkenlerin tipini de tanımlayabiliyoruz
 * Bu sayede değişkene değer ataması yaparken belirlenen tipin dışına çıkmıyoruz
 */

let userName: string = 'mehmet';

// string tipinde bir değer atadık
userName = 'ahmet';

// number tipinde bir değer atamyı denedik
// userName = 30;
// userName = { id: 40 };
// userName = ['asdas'];

// Soru: Type belirtmek zorunda mıyız?
let age = 40;

age = 80;

// age = "doksan";

// Cevap: Biz type tanımlasak bile ts otomatik olarak değişkenin değerinin tipi her neyse
// onu değişkenin tipi olarak tanımlar. Bazı durumlarda beklenmedik sonuçlar ortaya
// çıkabileceğinden ve biz öğrenme sürecinde olduğumuzdan dolayı bütün type'ları belirteriz.

/*
 ? Javascript'de bulunan tipler
 * string
 * number
 * array
 * object
 * boolean
 * null
 * undefined
 * function
 * symbol (pek kullanılmaz)
 * bigint (pek kullanılmaz)
 */

// soru: NaN bir veri tipi mi?
// cevap: hayır, bir değerdir

let name2: string = 'ali';

let age2: number = 50;

let has_licence: boolean = true;

let student: object = {
  id: 2,
  name: 'Ali',
  year: 2000,
};

let value: null = null;

let value2: undefined;