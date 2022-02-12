
function adds(a,b){
  return a + b;
}
let calculator = {
  PI: 3.14,
  add: (a,b) => a+b,
  subtract: (a,b) => a-b,
  multiply: (a,b) => a*b,
  divide: (a,b) => a/b,
}



//모듈 밖으로 add함수를 내보낸다. -> 다른 모듈에서 사용 가능하다.
//exports.add = add;

//모듈 밖에서 add를 사용 하려면 plus라고 불러와야 한다.
exports.plus = adds;

//모듈 내부의 것들을 모은 객체를 외부에 공개
module.exports = calculator;