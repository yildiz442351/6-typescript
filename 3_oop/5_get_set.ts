// Düz js'de getter ve setter methodu yazım örneği
// getter veri alamaya yarayan method
// setter verityi güncellemey yarayan method
class Car {
    private battery_power: number = 10;
    private key_status: 0 | 1 | 2 = 0;
    private starter_motor_runing: boolean = false;
    private engine_started: boolean = false;
  
    // mevcut bir property'nin değrini return eden fonksiyonlara getter method deneri
    getEngineStatus() {
      return this.engine_started
        ? 'çalışıyor ' + this.battery_power + ' batarya kaldı'
        : 'kapalı';
    }
  
    startEngine() {
      this.engine_started = true;
      this.battery_power -= 3;
    }
  }
  
  const tesla = new Car();
  
  // setter method çalıştırma
  tesla.startEngine();
  
  // getter method çalıştırma
  console.log(tesla.getEngineStatus());
  
  /*
   * Typescripte getter setter method tanımnın farklı bir yolu vardır
   */
  
  class ExampleClass {
    private _username: string = '';
  
    // getter method mutlaka bir değer döndürmek zorunddur
    get username() {
      console.log('username değişkenine erişilmeye çalıştı');
      return 'merhaba ' + this._username;
    }
  
    // her zaman 1 parametre alır
    // setter method değer döndüremez.
    set username(param1: string) {
      console.log('setter çalıştı');
      this._username = param1 + '435435345';
    }
  }
  
  const exa = new ExampleClass();
  
  exa.username; // erişmeye çalışınca getter çalışır
  
  exa.username = 'Furkan'; // değiştirmey çalışnca setter çalışır
  
  console.log(exa.username);
  
  // Kullanım Örnrği
  
  class Kisi {
    private _username: string = 'Ali';
    private _lastname: string = 'Yıldız';
  
    get fullname() {
      console.log(this._username + ' ' + this._lastname);
      return this._username + ' ' + this._lastname;
    }
  }
  
  const kisi = new Kisi();
  
  console.log(kisi.fullname);
  
  //! Örnek
  class Circle {
    private _radius: number;
  
    constructor(new_radius: number) {
      this._radius = new_radius;
    }
  
    // get methodu ile radius özelliğine erişme
    get radius() {
      return this._radius;
    }
  
    // get methodu ile alanı hesaplama
    get area() {
      return Math.PI * this._radius * this._radius;
    }
  
    // set methodu
    set radius(value: number) {
      if (value < 0) {
        console.log('Geçersiz yarıçap. Negatif olamaz');
        return;
      }
  
      this._radius = value;
    }
  }
  
  const circle = new Circle(40);
  
  console.log(circle.radius);
  console.log(circle.area);
  
  circle.radius = -20;
  
  console.log(circle.radius);