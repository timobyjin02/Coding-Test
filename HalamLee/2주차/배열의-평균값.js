// https://school.programmers.co.kr/learn/courses/30/lessons/120817

function solution(numbers) {
  const total = numbers.reduce((pre, curr) => pre + curr, 0);
  return total / numbers.length;
}
