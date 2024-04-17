//인터페이스와 클래스
//인터페이스는 무조건 퍼블릭 필드만 정의할 수 있음!

interface CharacterInterface {
    name: string;
    moveSpeed: number;
    move(): void;
}

//implements 구현하다
class Character implements CharacterInterface {
    constructor(public name: string, public moveSpeed: number) {}

    move(): void {
        console.log(`${this.moveSpeed}속도로 이동`);
    }
}
