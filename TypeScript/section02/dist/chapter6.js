//any 타입과 unknown 타입
//any, 특정 변수의 타입을 확실히 모를 때
//any타입은 타입스크립트의 이점을 포기함
let anyVar = 10;
anyVar = 'hello';
let num = 10;
num = anyVar;
//unknown, 타입에 맞는 메소드나, 타입이 맞는경우에만 사용가능 (타입 좁히기)
let unknownVar;
unknownVar = '';
unknownVar = 1;
unknownVar = () => { };
// num = unknownVar;
if (typeof unknownVar === 'number') {
    num = unknownVar;
}
export {};
