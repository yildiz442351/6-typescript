// Soyut Sınıf
abstract class DataFetcher {
    constructor(apiURL: string) {}
  
    // soyut methodlar
    abstract getData(apiKey: string): object[];
    abstract deleteData(id: string, apiKey: String): void;
  }
  
  // Abstract sınıfı miras alan yeni bir sınıf oluşturucaz
  // sınıfın içindeki yarım kalan abstract methodları tamamlıyıcaz (implement etme)
  class Spotify extends DataFetcher {
    // soyut sınıfta tipi tanımlanmış ama görevi tanımlanmamış methodu inplement edelim
    getData(apiKey: string): object[] {
      console.log('api ile haberleşiliyor...');
  
      const response = {
        ok: true,
        status: 200,
        data: [{ name: 'Müzik1' }, { name: 'Müzik2' }],
      };
  
      return response.data;
    }
  
    deleteData(id: string, apiKey: String): void {
      console.log(id + ' li eleman için silme isteği atıldı');
  
      const response = {
        ok: true,
      };
    }
  }
  
  const spotify = new Spotify('www.api/spotify.com');
  
  console.log(spotify.getData('asdas313421'));
  spotify.deleteData('id123', 'asdas313421');
  
  // abstract sınıfı yine miras alan ama bu sefer
  // methodlarını farklı şekillerde implement edenn
  // bir sınıf daha oluşturlaım.
  class Shazam extends DataFetcher {
    getData(apiKey: string): object[] {
      console.log('api ile haberleşiliyor..');
  
      const res = {
        ok: true,
        data: [{ name: 'Müzik1' }, { name: 'Müzik2' }],
      };
  
      return res.data;
    }
  
    deleteData(id: string, apiKey: String): void {
      console.log(
        'shazman veri tabnından ' + id + ' li eleman siliniyor.'
      );
    }
  }
  
  const shazam = new Shazam('www.api.shazam.com');
  
  console.log(shazam.getData('apiKey12321'));
  
  shazam.deleteData('id12356', 'apiKey12321');
  
  // Özetler abstract sınıflar, diğer sınıfların genel davranışlarını
  // belirlemek için kullnılırlar. Vee doğrudan örnekleri oluşturulamazlar.
  // Soyut class'ı miras alan diğer class'larda bu ortak methodların görev tanımı yapılır (implement)