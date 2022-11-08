function solution(array, height) {
    return array.reduce((acc, cur) => {
        return cur > height ? ++acc : acc;
    }, 0);
}
