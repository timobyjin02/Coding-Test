function solution(array, n) {
    return array.reduce((acc, cur) => {
        return cur === n ? ++acc : acc;
    }, 0);
}
