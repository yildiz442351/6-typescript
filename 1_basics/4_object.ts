/*
 * Object Type:
 * Normal şartlarda typescripte'de bir object type ı mevcutur.
 * Object type'ı ucu çok açık bir tip olduğu için kullanılması
 * tercih edilmez.
 
 * Js, nesne tabanlı bir programlama dili olduğu için bir çok
 * yapı nesnelerden oluşur.
 * Ve biz object type kullanırsak net bir şekilde type'ıe belirtemiyoruz
 
 * Biz genelde daha sepesifk bir şekilde özellikleri olan objeler çalışırız.
 * Bu sayada hem özelliklerinin tipi tanımlı objelerle çalışmış oluruz
 * hem de ts'nin otomatik tamamlama desteği devreye girer ve hatalardan daha
 * çabuk kurtuluruz 
 */

let data: object = {};
let data2: object = [];
let data3: object = new Date();
let data4: object = function () {};

// Değişkenin tipini tanımladık
let student: {
  id: number;
  firstname: string;
  lastname: string;
  isGraduated: boolean;
  age?: number; // değeri opsiyonel yaptık
};

// Değişkenin değerini tanımladık
student = {
  id: 576,
  firstname: 'Ali',
  lastname: 'Bey',
  isGraduated: true,
  // age:"asd"
};

// örnek: API'dan gelen bir verinin tipini tanımla

let user: {
  id: number;
  name: string;
  username: string;
  email: string;
  address: {
    street: string | number;
    suite: string | number;
    city: string;
    zipcode: string | number;
    geo: {
      lat: string | number;
      lng: string | number;
    };
  };
  phone: string | number;
  website: string;
  company: {
    name: string;
    catchPhrase: string;
    bs: string;
  };
};

// değer ataması
user = {
  id: 1,
  name: 'Leanne Graham',
  username: 'Bret',
  email: 'Sincere@april.biz',
  address: {
    street: 'Kulas Light',
    suite: 'Apt. 556',
    city: 'Gwenborough',
    zipcode: '92998-3874',
    geo: {
      lat: '-37.3159',
      lng: '81.1496',
    },
  },
  phone: '1-770-736-8031 x56442',
  website: 'hildegard.org',
  company: {
    name: 'Romaguera-Crona',
    catchPhrase: 'Multi-layered client-server neural-net',
    bs: 'harness real-time e-markets',
  },
};

// otomatik tamamlama testi
console.log(user.address.suite);
console.log(user.company.name);

// ts-node komutu ts dosyları önce derler sonra çalıştırır