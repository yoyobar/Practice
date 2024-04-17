// 제네릭
// 종합적인 (제너럴)
//제네릭 함수 (범용적인 함수)
//타입 변수 T, 타입을 담는 T
//호출 될 당시를 기준으로 타입변수가 추론됨
//매개변수 -> 함수타입 -> 함수
function func(value) {
    return value;
}
//함수 리턴으로 뭐가 올지 뻔할 때, 조정한다.
let num = func(10);
let bool = func(true);
let str = func('str');
//호출 당시에 타입을 지정하면 해당 값을 기준으로 리턴한다.
let arr = func([1, 2, 3]);
let boolArray = ['a', 'b', 'c'];
export {};
