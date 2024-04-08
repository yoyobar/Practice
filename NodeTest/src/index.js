import mul, { add, sub } from './math.js';
import randomColor from 'randomcolor';

//객체 분해구조 할당
//ESmodule 사용시 .js 명시 필수
//default는 기본값, 원하는이름으로 설정 가능

// console.log('안녕 Node.js');
// console.log(add(3, 2));
// console.log(sub(3, 2));
// console.log(mul(3, 2));

const color = randomColor();
console.log(color);
