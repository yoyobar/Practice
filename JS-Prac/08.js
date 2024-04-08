//async, await 프로미스 처리
//객체를 결과값으로 가지는 promise

async function getData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({
                name: '김민수',
                id: 'yoyobar',
            });
        }, 1500);
    });
}

//await로 getData()가 끝나고, 가져올 수 있다.
async function printData() {
    const data = await getData(); //!!종료 후 할당!!
    console.log(data);
}

printData();
