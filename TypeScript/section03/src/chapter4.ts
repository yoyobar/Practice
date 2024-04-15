//대수 타입
//여러개의 타입을 합성해서 새롭게 만들어낸 타입

//합집합 타입 (Union) |

let a: string | number | boolean;
a = 1;
a = 'hello';
a = true;

let arr: (number | string | boolean)[] = [1, 'hello', true];

// 객체의 합집합
type Dog = {
    name: string;
    color: string;
};

type Person = {
    name: string;
    language: string;
};

type Union = Dog | Person;
let union1: Union = {
    name: '',
    color: '',
};
let union2: Union = {
    name: '',
    language: '',
};
let union3: Union = {
    name: '',
    color: '',
    language: '',
};
// let union4: Union = {
//     name: '',
// };
//color가 없어서 Dog가 아니고, language가 없어서 Person도 아니다. 따라서 외곽

//---------------------------------------------------------------------------------

// 교집합 타입 (Intersection)
let variable: number & string;

//객체의 교집합
//모든게 겹치는 경우만 가능함

type Intersection = Dog & Person;
let intersection1: Intersection = {
    name: '',
    color: '',
    language: '',
};
