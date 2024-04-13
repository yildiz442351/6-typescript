/*
* Optional Param (Opsiyonel Parametre)

* Normal şartlarda fonksiyonun çalışması için tüm parameetrelerini
* göndermemiz beklenir. Fakat bazı durumlarda bazı parametreler
* grekmeyebilir. Bu durumda parametreyi opsiyonel yaparız.

* Özellikler
* tanım: (a:number,b?:number)
* Opsiyonekl parametreler istersek undefined değeri gönderebiliriz.
* İstersek de hiç değer göndermeyebiliriz.

* Eğer opsiyonel paramereye değer göndermezsek hem tipi hem değeri 
* undefined olur.

* Opsiyonel param'lar hep en son yer almalı.
* Opsiyonel bir parametrenin ardından zorunlu bir param tanımlanamaz
*/

function exampleFn(param1: number, param2: string, param3?: object) {
    console.log('>>>>1-param ', param1, typeof param1);
    console.log('>>>>2-param ', param2, typeof param2);
    console.log('>>>>3-param ', param3, typeof param3);
  
    console.log('---------------------');
  }
  
  exampleFn(10, 'selam', { id: 1 });
  exampleFn(10, 'selam', undefined);
  exampleFn(10, 'selam');