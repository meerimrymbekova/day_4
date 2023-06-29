//и&& или|| не 

// условие "и"
const age = 18;

//console.log(true && false)
console.log(true && false && true)
console.log(5<3 && age > 18 && 5<6) //false
console.log(false && true && true) //false

// условие 'или'
console.log(true || false ||false || false); //true

const age = 19;

console.log(age>21 || age>18); //true
console.log(false || true); //true
console.log(false|| false); //false

const isAdmin = false;
const text = "main/js";
//когда в тексте   в кавыччказ нет текста то будет false,а если есть что то true
const result = isAdmin || text;
//console.log(result)

const isAdmin =false;
const text ="main/js";
//const result = false|| true
const result =isAdmin || text;
console.log(result);


//переменная чтобы не изменялась const

//выводится текст "hello"

// !!book   =    boolean(true)одно и то же
// null-false
const book = "Hello";
const author = null;
const title= "";
 const result = book || title || "1" ||author;
 console.log(result)

 console.log(true||(false&& true));//true приотитет у "и"
console.log(("Hello" && false || null&& true)); //null
(true && false) || (true && null);
false || null
null

console.log(""||(30&& '1'&&10 ===10)||false);
""|| (30&& '1'&&10===10)||false
false||true||false

console.log(2134 && '1') //выходит 1

console.log(!true);//false
console.log(!'');//true
console.log(!5);//false
console.log(!0)//true

console.log(!!false);//false
console.log(!!50);//true

console.log(!true|| !"")


//преобразователи
const stringNumber = "100";
// console.log(!!stringNumber);
// console.log(+stringNumber)
console.log(+true); //1
console.log(+false); //0
console.log(+null); //false
console.log(underfined)//Nan
console.log(+"5h")//Nan
console.log(+"h5")//Nan

// parseInt()
// console.log(parseInt("23"));//23
console.log(parsInt("h50"))//Nan
console.log(parsInt("50h"))//50
console.log(parsInt("50true"))//50

//приоритетность 1) ! 2) && 3) ||
const x = true;

const result = x && name1; // ошибка из за name1