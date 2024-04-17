//조건부 타입에서 타입추론하기 (Infer)

//R은 참으로 만들게끔 추론하여 동작함
type FuncA = () => string;
type FuncB = () => number;

type ReturnType<T> = T extends () => infer R ? R : never;

type A = ReturnType<FuncA>;
type B = ReturnType<FuncB>;

//뭐가 되도 불가능함, any여도
type C = ReturnType<Number>;

//다른 예제
type PromiseUnpack<T> = T extends Promise<infer R> ? R : never;

// 1. T는 프로미스 타입이여야함
// 2. 프로미스 타입의 결과값 타입을 반환해야함

type PromiseA = PromiseUnpack<Promise<number>>;
type PromiseB = PromiseUnpack<Promise<string>>;
