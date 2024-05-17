//? 클로저?
//? 닫힌, 닫혀있는

//? 하나의 생성자가 되었다고 생각하셔도 됩니다.
function count(data) {
    let count = data;
    return function (number) {
        count += number;
        console.log(count);
    };
}
