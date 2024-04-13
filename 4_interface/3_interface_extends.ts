/*
    *Interfaceler typeda olduğu farklı bir interface'in
    *özelliklerini miras alabilir.
    *Bunu "extends" anahtar kelimesi ile yaparız.
    *istersek birden fazla interface özelliklerini miras alabiliriz.

    */

    interface EvEsyasi {
        name: string;
        price: number;
    }

    //tanımladığımız bu interface evEsyasi interfaceni miras alacak
    interface Mobilya extends EvEsyasi {
        color: string;
    }
    const masa: Mobilya = {
        name: "Yemek Masasının",
        price: 5000, 
        color: "Black",
    };

    interface Elektronic {
        marka: string;
        garanti Suresi: number;
    }
    //birden fazla interface miras alma
    interface Urun extends EvEsyasi, Elektronic {}

    const tv:Urun={
        name: "Akıllı",
        price: 5000,
        garantiSuresi: 3,
        marka:"Lg",
    };
    // fonksiyonlarda kullanımı
    const esyaCAlistir =(esya: Urun): void => {
        cansole. log(esya.name,"temizleniyor");
        cansole. log(esya.marka);
    };
    esyaCAlistir(tv)
    interface Hayvan {
        ad: string
        yas: number;
        sesCikar(): void;

    } 
    interface Kus extends Hayvan {
        ucabilir: boolean;
        kanatUzunlugu: number;
    }
    interface Kedi extends Hayvan {
        fareyakalar:() => void;
    }
    const kizilMartilar: Kus = {
        ad: "Kuş",
        yas: 3,
        kanatUzunlugu: 20,
        ucabilir: true,
        sesCikar() {
            console.log ("uçuyor");
        },
    };