//템플릿 리터럴 타입

type Color = 'red' | 'black' | 'green';
type Animal = 'dog' | 'cat' | 'chicken';

//유니온 조합을 만드는 경우
type ColoredAnimal = `${Color}-${Animal}`;
