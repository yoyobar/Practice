//타입 별칭
type User = {
    id: number;
    name: string;
    nickname: string;
    birth: string;
    bio: string;
    location: string;
};

let user: User = {
    id: 1,
    name: '이정환',
    nickname: 'winterload',
    birth: '1997.01.07',
    bio: '안녕하세요',
    location: '부천시',
};

let user2: User = {
    id: 2,
    name: '이정환',
    nickname: 'winterload',
    birth: '1997.01.07',
    bio: '안녕하세요',
    location: '부천시',
};

// 인덱스 시그니처 (키와 밸류의 타입을 기준으로 유연하게 조정)
// 규칙을 위반하지만 않으면 문제없이 작동함
type CountryCodes = {
    [key: string]: string;
};
type CountryNumbers = {
    [key: string]: number;
};

let countryCodes: CountryCodes = {
    Korea: 'ko',
    UnitedState: 'us',
    UnitedKingdom: 'uk',
};

let countryNumberCodes: CountryNumbers = {
    Korea: 410,
    UnitedState: 840,
    UnitedKingdom: 826,
};
