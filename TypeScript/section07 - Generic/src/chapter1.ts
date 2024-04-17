//제네릭 사용 사례

//1. 스왑

function swap<T, U>(a: T, b: U) {
    return [b, a];
}

const [a, b] = swap('1', 2);

//2. 혼합 배열

function returnFirstValue<T>(data: [T, ...unknown[]]) {
    return data[0];
}

let num = returnFirstValue([0, 1, 2]);
let str = returnFirstValue([1, 'hello', 'myName']);

//3. 타입 변수의 프로퍼티 제한

function getLength<T extends { length: number }>(data: T) {
    return data.length;
}

let var1 = getLength([1, 2, 3]);
let var2 = getLength('12345');
let var3 = getLength({ length: 10 });
// let var4 = getLength(10);
