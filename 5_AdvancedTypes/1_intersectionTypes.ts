/*
    ! Intersection Types
*/
// union type
type typeA = {
    propA: string;
};
type typeB = {
    propB: number;
};
type unionType = TypeA typeB;
let varName: unionType;
varName = { porpA: "selam"}; // veya 
varName = {propB: 22 };
varName = {propA: "selam", propB: 44};
/*
   Intersection Type
   *Intersection type iki veya daha fazla ürün özelliklerini birleştiren türdür.
*/

type typeC = {
    propD: string;
    ortakProp: number;
};
type typeD = {
    propD: boolean;
    ortakProp: number;
};
// Hem typeC nin hemde typeD nin özelliklerini içermelidir.
type intersectionType = typeC & typeD;
let varName1: inetersectionType;

//varName1 ={propC: "selam", ortakProp: 42 }; hata verir
//varName1 ={propD: true, ortakProp: 55 }; hata verir

varName1 ={propC: "hello", PropD: true, ortakProp: 66 };

interface BusinessPartner {
    name: string;
    credit: number;
}
interface Identity  {
    id: number;
    name: string;
}
interface Contact {
    email: string;
    phone: string;
}
type employe = Identity & Contact;
type Customer = BusinessPartner & Contact;
let e: Employe = {
    id: 100,
    name: "test"
    email: "asdwfwf@dfg",
    phone:"123123",
};
let c: Customer = {
    name: "dasd",
    credit: 1000000,
    email: "sşödsşöşd@şl"
    phone:"23423423",
};
type Employe = Identity & BusinessPartner & Contact;
let el: Employee = {
    id: 123123,
    credit:123123123,
    name: "test",
    email: "asdffr"
    phone: 324234,
};
/*
    Mevcut türlerin tüm özellikleri yeni bir tür oluşturmak için kullanırız