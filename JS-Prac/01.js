//함수 선언식, 호이스팅
function funcA() {
    // console.log('funcA');
}
let varA = funcA;

//익명 함수 (함수 표현식)
let varB = function () {
    // console.log('funcB');
};

varB();

// arrow function

let varC = (value) => {
    console.log(value);
    return value + 1;
};
console.log(varC(10));

// callback function

function main(value) {
    value();
}

function sub() {
    return console.log('sub');
}

main(sub);
