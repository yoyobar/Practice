//void, 아무것도 없음을 의미함

function func1(): string {
    return 'hello';
}

//void가 아닐 경우, 진짜 null을 반환해야함, undefined 사용가능
function func2(): void {
    console.log('hello');
}

//never, 불가능한 타입 (공집합)
function func3(): never {
    while (true) {}
}

function fun4(): never {
    throw new Error();
}

let a: never;
// a = 1;
// a = {};
// a = '';
// a = undefined;
// a = null,
//어떤 값도 넣을 수 없음
