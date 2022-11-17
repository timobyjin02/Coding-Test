function solution(n) {
    let result = 0;
    for (let idx = 0; idx <= n; idx++) {
        if (idx % 2 === 0) {
            result += idx;
        }
    }

    return result;
}
