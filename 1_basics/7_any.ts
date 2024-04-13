/*
 * "Any" Type: Bir değişkene farklı türlerde derğer atanamsını istedğimiz zman
 * değişkenin türünü any olarak belirleriz. Bu sayda değişken herhangi bir
 * tür kısıtlamsına maruz kalmaz.
 
 * Any type ile tanımlana değişken javascript değişkeni gibi davranır.
 * Yaniş herhangi bir türde veri atamsı yapabiliriz.
 
 * Otomatik tamamlama devre dışı kalır

 * Normal şartlrda any ts'in mantığına aykırıdır.
 * Çünkü ts'deki amaç her değişkinin türünün belli olması.
 
 * Any genelde "geçici" olarak acil durumlarda kullanılır.
 * Örn: api'dan gelen bir veri var ve biz bu verinin tipini bilmiyoruz
 * kodu çalıştırıp gelen cevabı incelyene kadar değişkenin tipini belirli
 * bir süreliğine any olarak tanımlayabiliriz.

 * Mutlaka any tipleri bir noktadan sonra koddan kaldırılıp doğru tiplerle tanımlanmalı.
 * Sadece geçici olarak kullanılmalı. 
*/

let foo: any;

foo = 'string';
foo = 45;
foo = undefined;
foo = [];
foo = true;
foo = () => {};