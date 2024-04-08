// callback function
function main(value) {
    //etc
    value();
    //etc
}

main(() => {
    // console.log('i am sub');
});

// 콜백함수 활용, 구조가 흡사한 함수 응용
function repeat(count, callback) {
    for (let idx = 1; idx <= count; idx++) {
        callback(idx);
        //함수 자체에게 처리를 넘김
    }
}

repeat(5, (idx) => console.log(idx));

repeat(5, (idx) => console.log(idx * 2));

repeat(5, (idx) => console.log(idx * 3));
