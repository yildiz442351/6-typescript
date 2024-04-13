/* 
     ! Type Casting (Tür Dönüşümü)
*/

 let productFromAPI: any = {
    name: "Laptop",
    price: "1500.09",
 };
 console.log(productFromAPI.price);
 let productPrice: number = parseInt(productFromAPI.price) as number;
 console.log(typeof productPrice);
interface Product {
    price: any;
};
console.log(productFromAPI.price);
let productPrice: number = parseInt (productFromApi.price as number);
console.log(productPrice);
let discountedPrice: number = productPrice -100;
console.log(discountedPrice);

const mixedData: any = {
    name: "Test",
    age:25,
    isStudent: true,
    courses: ["Math", "English","History"],
};
console.log(typeof mixedData);
if (typeof mixedData === "object" && mixedData !== null) {
    const personData: {
        name: string;
        age: number;
        isStudent: boolean;
        id: number;
    } = mixedData as {
        name: string;
        age: number;
        isStudent: boolean;
        id: number;
    };
    console.log(
        `Name: ${personData.name},Age:${personData.age},Is Student: ${personData.isStudent}`
        );
} else {
    console.log("Veri tipi uygun değil");
}