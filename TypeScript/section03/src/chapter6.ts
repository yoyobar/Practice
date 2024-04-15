//타입 단언, ...as
type Person = {
    name: string;
    age: number;
};

let person = {} as Person;
person.name = '이정환';
person.age = 27;

//초과 타입의 타입 단언
type Dog = {
    name: string;
    color: string;
};

let dog = {
    name: '돌돌이',
    color: 'brown',
    breed: '진도',
} as Dog;

//타입 단언의 규칙
//1. 값 as 단언 (단언식)
//2. A as B
//3. A가 B의 슈퍼타입이거나 B가 A의 슈퍼타입이어야 한다.
let num1 = 10 as never;
let num2 = 10 as unknown;
// let num3 = 10 as string;

let num3 = 10 as unknown as string;
//다중 단언은 강제로 할 수 있긴 함

//const 단언, readonly 대용으로도 가능
let num4 = 10 as const;

let cat = {
    name: '야옹이',
    color: 'yellow',
} as const;

//Non Null 단언, author값이 null과 undefined가 아닐것이라고 정함
type Post = {
    title: string;
    author?: string;
};

let post: Post = {
    title: '게시글1',
    author: '이정환',
};
const len: number = post.author!.length;
