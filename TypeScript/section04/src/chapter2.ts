//함수 타입의 호환성 **어려움**

//특정 함수 타입을 다른 함수 타입으로 취급해도 괜찮은가 판단
//1. 반환값의 타입이 호환?
//2. 매개변수의 타입이 호환?

// 기준1. 반환값이 호환되는가?
type A = () => number;
type B = () => 10;

let a: A = () => 10;
let b: B = () => 10;

a = b; //허용, 업 캐스팅
//b = a; 비허용, 다운 캐스팅

// 기준2. 매개변수의 타입이 호환되는가?
// 2-1. 매개변수의 개수가 같을 때!
type C = (value: number) => void;
type D = (value: 10) => void;

let c: C = (value) => {};
let d: D = (value) => {};

// c = d; 비허용, 업캐스팅, 안됨, 이 매개변수가, 얘한테는 없으니까
d = c; // 허용, 다운캐스팅, 됨, 이 매개변수가, 얘한테는 존재하니까

// 왜이러는가?
type Animal = {
    name: string;
};
type Dog = {
    name: string;
    color: string;
};
let animalFunc = (animal: Animal) => {
    console.log(animal.name);
};
let dogFunc = (dog: Dog) => {
    console.log(dog.name);
    console.log(dog.color);
};
// animalFunc = dogFunc, 안됨, animal이 슈퍼타입
// 더 서브타입일 경우에는 안되는 것임, 표현 할 수 없으니까

let testFunc2 = (dog: Dog) => {
    console.log(dog.name);
};

// 2-2. 매개변수의 개수가 다를 때

type Func1 = (a: number, b: number) => void;
type Func2 = (a: number) => void;

let func1: Func1 = (a, b) => {};
let func2: Func2 = (a) => {};

func1 = func2; // 허용, 업캐스팅, 매개변수가 더 많음
// func2 = func1 비허용, 다운캐스팅, 매개변수의 개수가 변하니까
