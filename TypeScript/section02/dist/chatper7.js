//void, 아무것도 없음을 의미함
function func1() {
    return 'hello';
}
//void가 아닐 경우, 진짜 null을 반환해야함, undefined 사용가능
function func2() {
    console.log('hello');
}
//never, 불가능한 타입 (공집합)
function func3() {
    while (true) { }
}
function fun4() {
    throw new Error();
}
let a;
export {};
// a = 1;
// a = {};
// a = '';
// a = undefined;
// a = null,
//어떤 값도 넣을 수 없음
