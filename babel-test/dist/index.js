"use strict";

require("core-js/modules/es6.function.name");

var _second = require("./second");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(0, _second.funcB)(); // let const 지금까지 car로 썻다면 let으로 변경

/**
 * var 는 함수단위 스코프
 * let, const 블록단위 스코프
 * 
//  */
// var name = 'linda';
// let age = 21;

var level = 220; //초기 값을 정하고 나중에 값이 수정 불가
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

setTimeout(function () {}, 2000);
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

var Person =
/*#__PURE__*/
function () {
  function Person(name) {
    _classCallCheck(this, Person);

    this.name = name;
  }

  _createClass(Person, [{
    key: "say",
    value: function say() {
      console.log(this.name);
    }
  }]);

  return Person;
}(); // var jack = new Person('jack');
// console.log(jack);
// jack.say();

/*
spread
*/
// var obj = { name: 'abc', age: 20 };
// // var name = obj.name;
// // var age = obj.age;
// let { name, age } = obj;