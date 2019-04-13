//ES6
import { funcB } from './second'
funcB();

// let const 지금까지 car로 썻다면 let으로 변경
/**
 * var 는 함수단위 스코프
 * let, const 블록단위 스코프
 * 
//  */
// var name = 'linda';
// let age = 21;

const level = 220; //초기 값을 정하고 나중에 값이 수정 불가
// level = 21; // error발생 

//arrow fuction
//메소드의 경우 에로우 함수 보단 기존의 함수를 사용
// function funcA() {

// }

// const funcA = () => {}

// //-------------------------
// setTimeout(function() {

// }, 2000);

// // 위에 코드와 동일
setTimeout(() => {

}, 2000)



/*
class

*/
//생성자 함수
// function Person(name) {
//     this.name = name;
// }

// var jack = new Person('jack');
// Person;
//class 함수
class Person {
    constructor(name) {
        this.name = name;
    }
    say() {
        console.log(this.name);
    }
}

// var jack = new Person('jack');
// console.log(jack);
// jack.say();

/*
spread
*/

// var obj = { name: 'abc', age: 20 };
// // var name = obj.name;
// // var age = obj.age;

// let { name, age } = obj;