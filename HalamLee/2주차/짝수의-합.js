// https://school.programmers.co.kr/learn/courses/30/lessons/120831

function solution(n) {
  let sum = 0;

  for (let i = 0; i <= n; i++) {
    if (i % 2 === 0) {
      sum += i;
    }
  }

  return sum;
}
