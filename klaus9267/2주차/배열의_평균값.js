function solution(numbers) {
    const result = numbers.reduce((acc, cur, idx) => {
        return idx + 1 === numbers.length
            ? (acc = (acc + cur) / (idx + 1))
            : (acc += cur);
    }, 0);

    return result;
}
