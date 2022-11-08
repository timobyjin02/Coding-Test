function solution(array, height) {
  return array.filter((temp) => temp > height).length;
}
