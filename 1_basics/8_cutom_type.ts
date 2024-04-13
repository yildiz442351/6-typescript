/*
 * Custom Type
 * Şuana kadar tip atamsı yaparken her zaman js'de var olan temel tipleri kullandık
 * Gerçek projelrde o anki yaptığımız işe özel daha spesif bir type'a ihtiyacımız olabilir.
 * Bunları tanımlamak için "type" anahatar keliemsini tanımlayp kendi ver tipimiz oluşturabiliriz.
  
 * Nedene İhtiyacımız Var?
 * Çünkü belirlediğimiz bir type'ın projenin birden çok alanında
 * kullanılması gerebilir. Bu durumda custom_type olamdan yapavileceğimiz 
 * tek şey kopyala yapıştır.
 
 * Ama custom type ile birlikte bir type tanımlayıp projenin her yerinde bunu kullanbiliyoruz.   
 */

// SORUN
// KOD KALABILIĞI

let user_1: {
    name: string;
    age: number;
  } = {
    name: 'ahmet',
    age: 38,
  };
  
  let user_2: {
    name: string;
    age: number;
  } = {
    name: 'ali',
    age: 45,
  };
  
  // ÇÖZÜM
  // TYPE ALIASES
  
  type UserType = {
    id: string;
    name: string;
    age: number;
  };
  
  let user_3: UserType = {
    id: 'asdas',
    name: 'fatma',
    age: 97,
  };
  
  let user_4: UserType = {
    id: 'asdas',
    name: 'ayşe',
    age: 11,
  };
  
  // oluşturudğumuz bu custom type'ı type tanımlanbilen her yerde kullanbilir
  const user_list: UserType[] = [
    {
      id: '123',
      name: 'alik',
      age: 68,
    },
    {
      id: '123',
      name: 'bilala',
      age: 44,
    },
  ];