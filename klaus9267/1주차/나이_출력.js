function solution(age) {
    const today = new Date();
    const year = today.getFullYear() + 1;

    return year - age;
}
