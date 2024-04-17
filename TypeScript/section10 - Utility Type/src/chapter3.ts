//조건부 타입 기반의 유틸리티 타입

//Exclude<T,U>
//제외, 추방
//T에서 U를 제거
type A = Exclude<string | boolean, boolean>;

type Exclude<T, U> = T extends U ? never : T;

//Extract
//추출
//T에서 U를 추출
type B = Extract<string | boolean, boolean>;
type Extract<T, U> = T extends U ? T : never;

//ReturnType
//함수의 반환값을 추출하는 타입

function funcA() {
    return 'hello';
}

function funcB() {
    return 10;
}

type ReturnA = ReturnType<typeof funcA>;

type ReturnType<T extends (...args: any) => any> = T extends (...args: any) => infer R ? R : never;
