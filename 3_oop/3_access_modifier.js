/*
 ! Access Modifiers (Erişim Beliretçleri)
 * Class elemanları hassas bilgileri tutacakları zaman
 * bu bilegelerin class'ın dışından erişilip erişlmeyceğini
 * belirlemek isteyebiliriz.
 
 * Örneğin kredikartı bilgierlini tutan bir class olsun
 * Bu class'ıb tutğu bilgler dışarıdan erişilmesi güvenlikü
 * zaafiyeti oluşturabilir. Erişiminin kısıtlanması gerekiyır
 
 ! 3 adet erişim belirteci vardır
 * public: hem class dışarısından hemde class'ı extend eden diğer class'lardan erişelbilir.
 * protected: sadece class'ın kendisi ve onu miras alan diğer class'lardan erişilir.
 * private: Sadece tanımladığımız class içerisinden erişilebilir
 
 */
 var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
//! Public
var Arac = /** @class */ (function () {
    function Arac(yeni_marka) {
        this.marka = yeni_marka; // kendi içerisiinden erişlebilir
    }
    return Arac;
}());
var Motor = /** @class */ (function (_super) {
    __extends(Motor, _super);
    function Motor() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Motor;
}(Arac)); //  miras alınandan erişlebilir
var ford = new Arac('ford');
ford.marka; // dışarısındana erişilebilir
//! Protected
var EvcilHayvan = /** @class */ (function () {
    function EvcilHayvan(ad) {
        this.ad = ad; // kendi içinden erişiliyor
    }
    return EvcilHayvan;
}());
var Kopek = /** @class */ (function (_super) {
    __extends(Kopek, _super);
    function Kopek() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Kopek.prototype.havla = function () {
        console.log(this.ad); // miras alaınan yerlerde erişilir
    };
    return Kopek;
}(EvcilHayvan));
var kopek = new Kopek('Bıncuk');
// kopek.ad; // dışarıdan erişlemez
//! Private
var OzelPersonel = /** @class */ (function () {
    function OzelPersonel(yeni_isim) {
        this.isim = yeni_isim;
    }
    OzelPersonel.prototype.getPersonel = function () {
        console.log(this.isim); // içeriden erişim var
    };
    return OzelPersonel;
}());
// miras alınıp erişlemez
var GumrukPersonel = /** @class */ (function (_super) {
    __extends(GumrukPersonel, _super);
    function GumrukPersonel() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    GumrukPersonel.prototype.isminiYaz = function () {
        // console.log(this.ad);
    };
    return GumrukPersonel;
}(OzelPersonel));
// dışarıdan erişelemz
var mahmut = new OzelPersonel('mahmut');
// mahmut.isim;
/*
 * Not: Erişim belirteçeleri aynı bütün ts'ye özel bütün kodlarda
 * olduğu gibi kodu yazarkenn geliştirme ortamında işimize yarar.
 * Kodu js'ye derledğimiz zaman  erişim belirteçleri silinir.
 * yani hepsi public olur.

*/