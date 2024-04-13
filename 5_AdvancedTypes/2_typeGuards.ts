/*
     ! Type Guards

*/
// * Type Of
/* Bir değişkenin türünü kontrol etmek için kullanılır.
*/

//console.log (typeof 33);
//console.log (typeof 33);
//console.log (typeof true);
function logValue(input: string | number): void {
    console.log (typeof input);
    if (typeof input === "string") {
        console.log (`Girilen değer bir string: ${input.toUpperCase()}`);
    } 
}
logValue("selam");
logValue("12");

// * intanceof
/* 
    Bir nesnenin belirli bir sınıfın örneği olup olmadığını kontrol etmek için kullanılır.
*/
class Rabbit {}

let rabbit = new Rabbit();
console.log(rabbit instanceof Rabbit);

class Animal {
    sound(): void {
        console.log("ses çıkarma");
    }
}
class Dog extends Animal {
    bark(): void {
        console.log("havlıyor");
    }
}
function makeSound(animal: Animal): void {
    // eğer animal bir dog sınıfı örneği ise
    if (animal instanceof Dog) {
        animal.bark(); // dog sınıfına özgü methodu çağırır
    } else {
        animal.sound(); // diğer durumda genel methodu çağırır
    }
}
const myAnimal = new Dog();
makeSound(myAnimal);
//!in
 type User = {
    // name: string;
    age: number;
 };
 function processUSer(user: USer | string | number): void {
    console.log(typeof user);
    if (typeof user === "object" && "name" in user) {
        console.log {`Kullanıcı adı: ${user.name}`};
        //console.log(`Kullanıcı yaşı: ${user.age}`);
    } else if (typeof user === "string") {
        console.log (`Girilen isim:${user}`);
    } else {
        console.log("Geçersiz kullanıcı");
    }
 }
 processUSer("selam");
 processUSer({name: "test", age: 22});
 processUSer(55); //geçersiz kullanıcı
 // processUser(true);

 class Product {
    name: string;
    price: number;
    constructor(name: string, price: number) {
        this.name = name;
        this.price;
    }
 }
// Elektronik ürünleri tamsil eden sınıf 
 class ElectronicProduct extends Product {
    brand: string;
    constructor(name: string, price: number,brand:string) {
        super(name,price)
        this.brand = brand;
    }
    charge(): void {
        console.log(`${this.brand} ürünüşarj ediliyor`);
    }
 }
 class ApparelProduct extends Product {
    size: string;
    constructor(name: string, price: number, size: string) {
        super(name,price);
        this.size =size;
    }
    tryOn(): void {
        console.log(`Bu giyim ürünü ${this.size} beden olarak denenebilir`);
    }
 }
 // Fonksiyon, product nesnesinin ElectronicProduct tipinde olup olmadığını kontrol eder
 // Eğer ElectronicProduct tipindeyse true, değilse false döndürür
 function iseElektronicProduct(product: Product): product is ElektronicProduct {
    return (product as ElectronicProduct).charge !== undefined;
 }
 function isApparelProduct(product: Product): product is ApparelProduct {
    return (product as ApparelProduct).tryOn !== undefined;
 }
 const product:Product[] = [
    new ElectronicProduct("Laptop", 2500, "Dell"),
    new ApparelProduct("T-Shirt", 300, "M"),
    new ElectronicProduct("Phone", 3000, "Iphone"),
 ];
 for (sonst product of products) {
    console.log(product);
    if (iseElectronicProduct (product)) {
        // Eğer ürün bir elektronik ürünse , özel metotlara erişim sağlanabilir
        product.charge(); 
    } else if (isApparelProduct(product)) {
        product.tryOn();
    }
    comsole.log("----------"); 
}