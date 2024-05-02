//Array method3
//변형

//1. filter
//기존 배열에서 조건을 만족하는 요소만 필터링하여 배열로 반환
let arr1 = [
    { name: '김민수', hobby: '컴퓨터' },
    { name: '홍길동', hobby: '테니스' },
    { name: '김효빈', hobby: '테니스' },
];

let tennisFilter = arr1.filter((item) => item.hobby !== '테니스');
//? true를 반환하는것만 따로 배열로 만들어서 반환하다.

//2. map
// 배열의 모든 요소를 순회하며, 각각 콜백함수를 실행하고, 결과값을 새로운 배열로 반환
let arr2 = [1, 2, 3];
let mapResult1 = arr2.map((item) => item * 2);
let mapResult2 = arr1.map((item) => item.name);

//3. sort
// 배열을 사전순으로 정렬, 원본배열에 적용
let arr3 = ['b', 'a', 'c'];
arr3.sort();

arr3 = [10, 3, 5];
arr3.sort(); //미작동

// let sortResult1 = arr3.sort((a, b) => a - b); //오름차
// let sortResult2 = arr3.sort((a, b) => b - a); //내림차
// console.log(sortResult1);
// console.log(sortResult2);

//4. toSorted
// 배열을 사전순으로 정렬, 새 배열로 반환

let sortResult1 = arr3.toSorted((a, b) => a - b); //오름차
let sortResult2 = arr3.toSorted((a, b) => b - a); //내림차
console.log(sortResult1);
console.log(sortResult2);

//5. join
// 배열의 모든요소를 하나의 문자열로 합침
let arr6 = ['hi', 'im', 'minsu'];
const joined = arr6.join('');
console.log(joined);
