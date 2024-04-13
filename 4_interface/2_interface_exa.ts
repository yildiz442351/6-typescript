// Interface yardımı ile tip tanımı yapalım
interface IAdress {
    city: string;
    street: string;
    zipCode: number;
  }
  
  interface IEducation {
    degree: string;
    school: string;
    graduationYear: number;
    isGraduated: boolean;
  }
  
  interface IJob {
    company: string;
    startDate: Date;
    title: string;
  }
  
  interface IPerson {
    id: number;
    firstname: string;
    lastname: string;
    age: number;
  
    adress: IAdress; // farklı bir interface'i çağrıdık
  
    education?: IEducation; // opsiyonel bir alan tanımladık
  
    job?: IJob[]; // birden fazla işte çalışabilceğinde veya hiç çalışamayacağından
  
    sayHello(): string;
  }
  
  // Elimizdeki Veri
  const faruk: IPerson = {
    id: 1,
    firstname: 'Faruk',
    lastname: 'Kaya',
    age: 45,
  
    adress: {
      city: 'İstanbul',
      street: '45665sk',
      zipCode: 35510,
    },
  
    education: {
      degree: '56',
      school: 'İstanbul Üni',
      graduationYear: 2023,
      isGraduated: false,
    },
  
    job: [
      {
        company: 'X Şirketi',
        startDate: new Date(),
        title: 'FrontEnd',
      },
    ],
  
    sayHello() {
      return 'Merhabalar ben ' + this.firstname + this.lastname;
    },
  };
  
  // Interface'leri class'ların tipini tanımlarken kullanabiliriz.
  interface IMusicPlayer {
    api: string;
  
    play(song: string): void;
    pause(): void;
  }
  
  // 1) Obje tanımı yaparken interface'i kullanalım
  const Spotify: IMusicPlayer = {
    api: 'www.spotify.api.com',
  
    play(song) {
      console.log('Spotify veritabanından veri çekiliyor...');
      console.log(song + ' çalıyor...');
    },
  
    pause() {
      console.log('Çalan müzik durduruldu');
    },
  };
  
  // 2) Class tanımı yaparken interface'i kullanalım
  class AppleMusic implements IMusicPlayer {
    api: string = 'www.apple.api.com';
  
    play(song: string): void {
      console.log('apple müzik veritbanı ile iletişime geçildi...');
      console.log(song + 'çalıyor...');
    }
  
    pause(): void {
      console.log('Çalan müzik durduruldu');
    }
  }