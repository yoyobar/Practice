//조건부 타입
//삼항연산자를 활용해 조건에 따라 타입 변경

type A = number extends string ? string : number;
//
type ObjA = {
    a: number;
};
type ObjB = {
    a: number;
    b: number;
};
type B = ObjB extends ObjA ? number : string;
//

//제네릭과 조건부 타입

type StringNumberSwitch<T> = T extends number ? string : number;

let varA: StringNumberSwitch<number>;
let varB: StringNumberSwitch<string>;

//함수로 해보기
function removeSpaces<T>(text: T): T extends string ? string : undefined;
function removeSpaces(text: any) {
    if (typeof text === 'string') {
        return text.trim();
    } else {
        return undefined;
    }
}
let result = removeSpaces('hi im Yoyobar');
let result2 = removeSpaces(undefined);
