function log(data) {
    return console.log(data);
}

//? 프로미스?, 약속 나는 비동기적으로 동작할것 약속한다
//? 주문1을 끝내면, 주문2를하고.. 그다음에 결과를 알려줘
//? async, await
//! async, await은 프로미스랑 하는짓은 똑같다, 문법적으로 더 편함
//! 대부분 현업에서는 async, await을 씀

function order1() {
    return new Promise(function (resolve, reject) {
        setTimeout(() => {
            resolve('1번째 주문 완료');
        }, 3000);
    });
}

function order2() {
    return new Promise(function (resolve, reject) {
        setTimeout(() => {
            resolve('2번째 주문 완료');
        }, 1500);
    });
}

//! then은 성공시의 무엇을할지 선언하는것
//! catch는 실패시에 무엇을할지 선언하는겁니다.
//! async를 함수에 붙여서 사용, await은 기다릴 목표물한테 설정

async function order() {
    const result1 = await order1();
    console.log(result1);
    const result2 = await order2();
    console.log(result2);
}
async function apiRequest() {
    try {
        const response = await fetch(
            'https://api.openweathermap.org/data/2.5/weather?lat=37.5683&lon=126.9778&lang=KR&appid=e83cbcd7f0cb5b4bb7a22680f6cdd447'
        );
        const json = await response.json();
        const temp = Math.floor(json.main.temp - 273.15);
        const name = json.name;
        const weather = json.weather[0].description;

        const newData = {
            temp: temp + '도',
            name: '도시 : ' + name,
            weather: '날씨 : ' + weather,
        };
        console.log(newData);
    } catch (error) {
        console.error(error, '에러가 발생했다.');
    }
}

apiRequest();
