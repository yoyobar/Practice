//함수 타입 표현식과 호출 시그니쳐(타입 별도로 지정)

//함수 타입 표현식
type Operation = (a: number, b: number) => number;

//중복되는 타입정의 스킵
const add: Operation = (a, b) => a + b;
const sub: Operation = (a, b) => a - b;
const multi: Operation = (a, b) => a * b;

//호출 시그니처 (콜 시그니처), 함수도 객체
type Operation2 = {
    (a: number, b: number): number;
    name: string;
};

const add2: Operation2 = (a, b) => a + b;
const sub2: Operation2 = (a, b) => a - b;
const multi2: Operation2 = (a, b) => a * b;

//하이브리드 타입, 함수에도 객체를 할당시켜 사용할 수 있음
add2.name;
