// Array
let numArr: number[] = [1, 2, 3];
let strArr: string[] = ['hello', 'im', 'kms'];

//제네릭 방식
let boolArr: Array<boolean> = [true, false, true];

//배열의 요소가 다양할 경우
let multiArr: (string | number)[] = [1, 'hello'];

//다차원 배열
let doubleArr: number[][] = [
    [1, 2, 3],
    [4, 5],
];

//튜플, 길이와 타입이 고정된 배열
let tup1: [number, number] = [1, 2];
let tup2: [number, string, boolean] = [1, '2', true];

//배열의 형식을 맞추는데 활용 가능
const users: [string, number][] = [
    ['이정환', 1],
    ['이아무개', 2],
];
