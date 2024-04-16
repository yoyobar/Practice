//함수 오버로딩
//동일한 함수를 매개변수의 개수나 타입에 따라 여러가지로 정의하는 방법

// 버전 명시 -> 오버로드 시그니처
function func(a: number): void;
function func(a: number, b: number, c: number): void;

//함수의 실제 구현 -> 구현 시그니처
//매개변수를 선택적 프로퍼티로 줘야함

//a만 주어질경우 a를 출력
//a,b,c가 주어질경우 a+b+c를 출력

function func(a: number, b?: number, c?: number) {
    if (typeof b === 'number' && c) {
        return console.log(a + b + c);
    } else {
        return console.log(a);
    }
}

func(1);
func(1, 2, 3);
