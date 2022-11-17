function solution(slice, n) {
    return Math.floor(n % slice ? n / slice + 1 : n / slice);
}
