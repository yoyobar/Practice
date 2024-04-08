//Array method2
//순회와 탐색

//순회-----------------------------------------------------

//1.forEach 배열의 모든요소를 순회하며 특정동작 수행
let arr1 = [1, 2, 3];
arr1.forEach((item, idx, arr) => {
    // console.log(idx, item * 2);
});

//예시, x2를 적용
let doubledArr = [];
arr1.forEach((item) => {
    doubledArr.push(item * 2);
});

//탐색-----------------------------------------------------

//2. includes 배열에 특정 요소가 있는지 반환 (true/false)
let arr2 = [1, 2, 3];
let isInclude = arr2.includes(3);

//3. indexOf 특정 요소의 인덱스를 찾아서 반환, 0번부터
//객체 타입은 찾을 수 없음, 얕은 비교
let arr3 = [1, 2, 3];
let index = arr3.indexOf(2);

//4. findIndex 모든 요소를 순회하면서, 콜백함수를 만족하는 !인덱스를 반환!
//객체 타입도 찾을 수 있음, property 비교
let arr4 = [1, 2, 3, 4];
const findIndex = arr4.findIndex((item) => item % 2 === 0);

//5. find 모든 요소를 순회하면서, 콜백함수를 만족하는 요소를 찾고, !요소를 반환!
//객체 타입도 찾을 수 있음, property 비교
let arr5 = [{ name: '김민수' }, { name: '홍길동' }];

const find = arr5.find((item) => item.name === '김민수');
console.log(find);
