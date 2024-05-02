//동기와 비동기

//동기 : console.log등, 쓰레드에서 동기적으로 진행되는 요소
//비동기 : timerInterval등, 쓰레드에서 비동기적으로 진행되는 요소, Web APIs에서 별도로 실행됨

// function add(a, b, callback) {
//     setTimeout(() => {
//         const sum = a + b;
//         callback(sum);
//     }, 3000);
// }

// add(1, 2, (value) => {
//     console.log(value);
// });

//비동기의 데이터를 이용하고자한다면, 콜백으로 가져와서 처리할 수 있겠다.
//1. 매개변수로 콜백함수를 넣는다
//2. 콜백함수를 호출하고, 인수로 결과값을 전달한다.
function orderFood(callback) {
    setTimeout(() => {
        const food = '제육볶음';
        callback(food);
    }, 3000);
}
function coolDownFood(food, callback) {
    setTimeout(() => {
        const coolDownedFood = `식은 ${food}`;
        callback(coolDownedFood);
    }, 2000);
}
function freezeFood(food, callback) {
    setTimeout(() => {
        const freezedFood = `냉동된 ${food}`;
        callback(freezedFood);
    }, 1500);
}

//콜백 지옥

orderFood((food) => {
    console.log(food);
    coolDownFood(food, (coolFood) => {
        console.log(coolFood);
        freezeFood(coolFood, (freezeFood) => {
            console.log(freezeFood);
        });
    });
});
