//분산적인 조건부 타입

type A<T> = T extends string ? string : number;

let a: A<number>;
let b: A<string>;

//유니온 타입을 넣을경우, 분산적인 조건부타입으로 바뀜
//한번은 number, 한번은 string
let c: A<number | string>;

let d: A<boolean | number | string>; //number, string, number

//예제
//특정 타입을 제거
type Exclude<T, U> = T extends U ? never : T;

type a = Exclude<number | string | boolean, string>;

//number, never, boolean, number | boolean

//예제
//특정 타입을 추가
type Extract<T, U> = T extends U ? T : never;

type b = Extract<number | string | boolean, string>;
