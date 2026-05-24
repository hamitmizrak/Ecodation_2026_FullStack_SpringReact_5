// Single commet

/* multiple comment */

/*
1995 Brendan Eich tarafından geliştiriliyor
Single thread
Betik diller ailesinden interpreter(yorumlama)
web side çalışan ancak Nodejs yapısıyla Server Side
*/

/*
Dynamics types
OOP
Cross Platform
Lightweight
*/

/*
Kullanan şirket
- Google
- eBay
- Facebook
- Linkedin
- Netflix
- PayPal
- E-Devlet
- Tesla
*/

/* JavaScript

Libraries            Framework
---------           -----------
jQuery              Angular
React               NodeJS
                    Vue js
*/

//**** ÇIKTI ****************************
// console.log('Console log');
// console.info('Console info');
// console.warn('Console warning');
// console.error('Console error');

// window.alert("Window alert")
// alert("Deneme")

//**** USER ****************************
// var userVariable = prompt("Adınız Soyadınız");
// document.write("Adınız & Soyadınız: " + userVariable+ "<br/>Diğer satır");

// "" double quotes
// '' single quotes
// `` backtick

//**** USER ****************************
// var globalVariable = 'Merhabalar';
// console.log(globalVariable);

//**** GLOBAL/LOCAL ***********************
// var globalVariable = 44;
// console.log(globalVariable);

// globalVariable = 44.23;
// console.log(globalVariable);

// globalVariable = true;
// console.log(globalVariable);

// ES6 (2015)
// Yapılmaz
// let localVariable = 44
// console.log(localVariable);

// let localVariable = 25;
// console.log(localVariable);

// let localVariable = 44;
// console.log(localVariable);

// localVariable = 23;
// console.log(localVariable);

// const localVariable2 = 1453;
// console.log(localVariable2);
// localVariable2 = 99;
// console.log(localVariable2);

//**** TYPE ***********************
// let data1="merhabalar veriler"
// console.log(data1)
// console.log(typeof data1)

// let data2 = 44;
// console.log(data2);
// console.log(typeof data2);

// let data3 = 44.23;
// console.log(data3);
// console.log(typeof data3);

// let data4 = 3>1;
// console.log(data4);
// console.log(typeof data4);

//**** VARIABLE ROLES ***********************
// üğşçöİÜĞŞÇÖ
// let $_data5="merhabalar veriler"
// console.log($_data5);

//**** COMMON OBJECT ************************
let vocabulary = 'Javascript öğreniyorum';
let condition = true; // 3<1
let number = 44;
let floatingPoint = 44.23;
let object = {};
let arrayData = [4, 5, 6, 8, 'merhabalar', true];

//**** OPERATORS ************************
let number1 = 23,
  number2 = 3;

// console.log('Toplama: ' + (number1 + number2));
// console.log('Çıkarma: ' + (number1 - number2));
// console.log('Çarpma: ' + number1 * number2);
// console.log('Bölme: ' + number1 / number2);
// console.log('Kalan:' + (number1 % number2));

// =
// ==
// ===
// & = VE
// | = VEYA

//**** CAST ************************
// Number() ==> sayıya çevirir
// String() ==> kelimeye çevirir
let number6 = '20',
  number7 = 40;
// console.log(number6 + number7);
// console.log(Number(number6) + number7);

//**** MATH ************************
// console.log('E: ' + Math.E);
// console.log('PI: ' + Math.PI);
// console.log('Küçük: ' + Math.min(5, 6, 3, 900, -100));
// console.log('Büyük: ' + Math.max(5, 6, 3, 900, -100));
// console.log('Mutlak: ' + Math.abs(-100));
// console.log('Karekök: ' + Math.sqrt(25));
// console.log('üslü: ' + Math.pow(2, 5));
// console.log('üslü: ' + Math.pow(2, '5'));
// console.log('üslü: ' + Math.pow(2, Number('5')));
// console.log('NaN: Not A Number: ' + Math.pow('asd', '5'));

// console.log('aşağı yuvarla: ' + Math.floor(4.9));
// console.log('yukarı yuvarla: ' + Math.ceil(4.1));
// console.log('aşağı/yukarı yuvarla: ' + Math.round(8.4));
// console.log('aşağı/yukarı yuvarla: ' + Math.round(8.5));
// console.log('aşağı/yukarı yuvarla: ' + Math.round(8.6));

// console.log('Sinüs: ' + Math.sin(45));
// console.log('Cosinüs: ' + Math.cos(45));

//**** STRING **********************
let vocabularyData = ' javascript ÖĞReniyoruM javascript ';
// console.log(vocabularyData);
// console.log(vocabularyData.length);
// console.log(vocabularyData.trim().length);
// console.log(vocabularyData.toLowerCase());
// console.log(vocabularyData.toUpperCase());

// //javascript ÖĞReniyoruM javascript
// vocabularyData = vocabularyData.trim();
// console.log(vocabularyData.startsWith('javascript'));
// console.log(vocabularyData.endsWith('javascript'));

// console.log(vocabularyData.concat('.INC').concat('.data'));

// //  charAt(pos: number): string;
// console.log(vocabularyData.charAt(0));
// console.log(vocabularyData.indexOf('javascript'));
// console.log(vocabularyData.lastIndexOf('javascript'));

// console.log(vocabularyData.substring(1));
// console.log(vocabularyData.substring(1,4));  // 1<=X<=4-1

// console.log(vocabularyData.split(""))

// Kullanıcıdan alınan bir kelimenin yukarıda öğrendiğiniz  yapılarla benzer örnekler yapınız

//**** FUNCTION ********************
// 1- parametresiz, returnsuz
function calculatorData1() {
  console.log('parametresiz, returnsuz');
}
// calculatorData1();

// 2- parametreli, returnsuz
function calculatorData2(data) {
  console.log('parametreli, returnsuz ' + data);
}
// calculatorData2('Merhabalar');

// 3- parametresiz, returnlu
function calculatorData3() {
  return 'parametresiz, returnlu ';
}
const data3 = calculatorData3();
// console.log(data3);

// 4- parametreli, returnsuz
function calculatorData4(data) {
  return 'parametreli, returnlu ' + data;
}
const data4 = calculatorData4('Merhabalar');
// console.log(data4);
console.log('****************************');

//**** FUNCTION INTERMEDIA ***************
// 1-Normal Function
function calculatorNormal() {
  console.log('Normal Function');
}
// calculatorNormal();

// 2-Anonymous Function
const calculatorAnonymous = function () {
  console.log('Anonymous Function');
};
// calculatorAnonymous();

// 3-Arrow Function
const calculatorArrowFunction=  () => {
  console.log('Arrow Function ');
};
// calculatorArrowFunction();

// 4-) Immedia Function
// ()(()=>{})


//**** CONDITION *******************
const condition1=()=>{
  let number = 20;
  if(number>0){
    console.log("Sayı pozitif");
  }else {
    console.log('Sayı negatif');
  }
}
condition1();


// ternary
const condition2 = () => {
  let number = 20;
  let result = number > 0 ? 'Sayı pozitif' : 'Sayı negatif'; 
  console.log(result);
  
};
condition2();

const condition3 = () => {
  let number = 5;
  if (number == 1) {
    console.log('Sayı 1');
  } else if (number == 2) {
    console.log('Sayı 2');
  } else if (number == 3) {
    console.log('Sayı 3');
  } else if (number == 4) {
    console.log('Sayı 4');
  } else if (number == 5) {
    console.log('Sayı 5');
  } else {
    console.log('1<=SAYI<=5 dışındadır');
  } 
};
condition3();

const condition4 = () => {
  let number = 5;
  
  switch (number) {
    case 1:
      console.log('Sayı 1');
      break;
    case 2:
      console.log('Sayı 2');
      break;
    case 3:
      console.log('Sayı 3');
      break;
    case 4:
      console.log('Sayı 4');
      break;
    case 5:
      console.log('Sayı 5');
      break;

      default:
         console.log('1<=SAYI<=5 dışındadır');
         break;

  }
};
condition4();




//**** LOOP ************************
//**** ARRAY ***********************
// console.log(vocabularyData.split(""))
//**** OBJECT **********************
