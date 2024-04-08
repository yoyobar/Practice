//Array.method 1
//요소 조작

//1. push, 배열 뒤에 요소 추가
//변경된 배열의 길이를 반환
let arr1 = [1, 2, 3];
const newLength = arr1.push(4);

//2. pop, 배열의 뒤의 요소 제거
//제거된 배열을 반환
let arr2 = [1, 2, 3];
const poppedItem = arr2.pop();

//shift,unshift는 동작이 살짝 느림

//3. shift, 배열의 앞의 요소 제거
//제거된 배열을 반환
let arr3 = [1, 2, 3];
const shiftedItem = arr3.shift();

//4. unshift, 배열의 앞의 요소 추가
//변경된 배열의 길이를 반환
let arr4 = [1, 2, 3];
const newLength2 = arr4.unshift(4);

//5. slice, 배열의 특정 범위를 잘라내서 새로운 배열을 반환
//시작하는 위치가 본인 기준, 원본 변화 X
let arr5 = [1, 2, 3, 4, 5];
const sliced = arr5.slice(2, 5);
const sliced2 = arr5.slice(2); //두번째 인자가 없을 경우 끝까지
const sliced3 = arr5.slice(-2); //뒤에서 부터는 음수

//6. concat, 두개의 서로다른 배열을 이어붙어서 새로운 배열을 반환
let arr6 = [1, 2];
let arr7 = [3, 4];
const concatArr = arr6.concat(arr7);
