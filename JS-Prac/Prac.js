// let arr = [1, 2, 3, 4, 5];

// function map(arr, fn) {
//     const result = [];
//     arr.forEach((item) => {
//         result.push(fn(item));
//     });

//     return result;
// }

// const newArr = map(arr, (item) => {
//     return item + 1;
// });

// function filter(arr, fn) {
//     const result = [];

//     arr.forEach((item) => {
//         if (fn(item)) {
//             result.push(item);
//         }
//     });
//     return result;
// }

// const newArr2 = filter(arr, (item) => {
//     return item % 2 === 0;
// });

// //? Reduce --> 누산기 (현재값, 다음값 어떤식으로 처리할건지 니가정해라)
// //! 데이터 축소 또는 집계
const numbers = [1, 2, 3, 4, 5];
const sum = numbers.reduce((누산값, 현재값) => {
    return 누산값 + 현재값;
    //0, 1  1
    //1 2  3
    //3 4 ...
}, 5);

// //! 데이터 변환
const doubled = numbers.reduce((acc, cur) => {
    return (acc += cur * 2);
});

// //! 중첩 배열 펼치기
const doubleArr = [
    [1, 2],
    [3, 4],
    [5, 6],
];
//forEach
const newDoubleArr = doubleArr.reduce((누산, 현재) => {
    return 누산 + 현재;
}, []);
console.log(newDoubleArr);
