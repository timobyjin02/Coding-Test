// https://school.programmers.co.kr/learn/courses/30/lessons/120824

function solution(num_list) {
  const answer = [];
  const even = num_list.filter((el) => el % 2 === 0).length;
  const odd = num_list.filter((el) => el % 2 !== 0).length;
  answer.push(even);
  answer.push(odd);

  return answer;
}
