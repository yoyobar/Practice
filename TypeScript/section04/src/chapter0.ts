//함수 타입 정의
//어떤 [타입]의 매개변수를 받고, 어떤 [타입]의 결과값을 반환하는지

function func(a: number, b: number) {
    return a + b;
}

//화살표 함수
const add = (a: number, b: number) => a + b;

//함수 매개변수, 선택적 매개변수는 항상 뒤에 있어야함!
function introduce(name = '이정환', age: number, tall?: number) {
    console.log(`name : ${name}`);
    if (typeof tall === 'number') {
        console.log(`tall : ${tall + 10}`);
    }
}

// introduce(1)
introduce('이정환', 27);
introduce('이정환', 27, 175);

//rest type을 지정
function getSum(...rest: number[]) {
    let sum = 0;
    rest.forEach((it) => (sum += it));

    return sum;
}
getSum(1, 2, 3); //6
getSum(1, 2, 3, 4, 5); // 15

//tuple을 활용하여 매개변수를 제한 할 수 있음
function getSum2(...rest: [number, number, number]) {
    let sum = 0;
    rest.forEach((it) => (sum += it));

    return sum;
}
getSum2(1, 2, 3); //6
