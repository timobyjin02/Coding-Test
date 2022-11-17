function solution(numbers) {
  let answer = numbers.reduce((sum, value) => sum + value);
  return answer / numbers.length;
}
