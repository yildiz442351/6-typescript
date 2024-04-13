/* 
     ! Generic:
      * Bir fonksiyonun, type'ın, calass'ın veya interface'in içerisindeki bazı türlerin
      * dinamik olarak değişebilmesini sağlayan yapıdır.
      
    !!
     * 1.fonksiyonlar
*/

function exampleFn(param1: string, param2: number): number {
    return param2;

    function exampleFn_1<ExampleGenericType>(
        param1: string,
        param2: ExampleGenericType
    ): ExampleGenericType {
        return param2;
    }
}

const example = exampleFn_1("test", "example");
console.log(example, typeof example);
console.log(
    "**************************************************************************"
);
function exampleFn_2<Generic1, Generic_2, Generic_3>(
    param1: Generic_1;
    param2: Generic_2;
    param3: Generic_3;
): Generic {
    console.log("param1", param1, typeof param1);
    console.log("param2", param2, typeof param2);
    console.log("param3", param3, typeof param3);
    return param1;
}
exampleFn_2("test", 341, true);
console.log("fonksiyonun türü", typeof exampleFn_2("test", 341, true));
exampleFn_2({ id: 1, name: "test"}, false, null);
console.log(
    "fonksiyonun türü",
    typeof exampleFn_2({id: 1, name: "test" }, false, null)
);
/*
     * const [name,setName] = useState("")
setName("isim")
*/

//! useState() fonksiyonunu generic kullanarak yazalım

function useState<StateType>(
    initialState: StateType
): [StateType, (newvalue: StateType) => void] {
    return [
        initialState, 
        (newValue: StateType) => {
            console.log("set state fonksiyonu çağrıldı", naewValue);
        },
    ];
}
// burada ise generic type'ın türünü burada otomatik olarak set etmiş oluruz
const [counter, setCounter] = useState(500);
console.log(">>> counter", counter);
setCounter(43);
// Generic type'ın türünü burada spesfik olarak belirleriz
const [counter1, setCounter1] = useState<number>(66);
const [text, setText] = usState<string>("test");
setText("123123");

const [day, setDay] = useState<number | string | null>("pazartesi");
setDay("salı");
setDay(2);
setDay(null);
// genel bir tuple yapısı oluşturmak için bir generic kullanımı
function createTuple<Generic1, Generic2>(
    first: Generic1,
    second: Generic2,
): [Generic1, Generic2] {
    return [first, second];
}
// örnek kullanım
const stringAndNumberTuple = createTuple<string, number>("selam", 90);
console.log(stringAndNumberTuple);
