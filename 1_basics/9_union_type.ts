// Bir değişkinin tipinin alabilceği birden
// fazla farklı veri tipi bulunuyorsa
let user: number | string;

user = 'Ahmwt';

user = 12343256;

// Kendi oluşturdğumuz tipler içinde bu yömtem geçerlidir
type ios = {
  ios_version: number;
  device: string;
};

type android = {
  android_version: number;
  device: string;
};

let phone: ios | android;

phone = {
  ios_version: 16,
  device: 'iphone',
};