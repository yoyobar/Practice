//promise 비동기작업처리
//비동기 작업 실행
//실제로 비동기작업을 실행, executor
function log(msg) {
    console.log(msg);
}

function add10(num) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (typeof num === 'number') {
                resolve(num + 10);
            } else {
                reject('num이 숫자가 아닙니다.');
            }
        }, 2000);
    });
}

add10(0)
    .then((result) => {
        console.log(result);
        return add10(result);
    })
    .then((result2) => {
        console.log(result2);
        return add10(result2);
    })
    .then((result3) => {
        console.log(result3);
    })
    .catch((err) => {
        console.log(err);
    });
//프로미스 체이닝, 또다시 콜백지옥
