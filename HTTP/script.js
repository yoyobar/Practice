const idInput = document.getElementById('idInput');
const nameInput = document.getElementById('nameInput');
const submitBtn = document.getElementById('submit');
const deleteBtn = document.getElementById('delete');
const viewBtn = document.getElementById('view');

let id = '';
let name = '';

idInput.addEventListener('change', (e) => {
    id = e.target.value;
});
nameInput.addEventListener('change', (e) => {
    name = e.target.value;
});

//! GET 조회
viewBtn.addEventListener('click', () => {
    axios.get('http://localhost:3001/users').then((res) => {
        console.log(res.data);
    });
});

//! POST 수정
editBtn.addEventListener('click', () => {
    axios.post('http://localhost:3001/users', { id, name });
});
