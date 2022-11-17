function solution(angle) {
    if (angle > 90) {
        return angle == 180 ? 4 : 3;
    }
    return angle == 90 ? 2 : 1;
}
