function solution(num_list) {
  let answer = [0, 0];
  answer[0] = num_list.filter((i) => i % 2 == 0).length;
  answer[1] = num_list.filter((i) => i % 2 != 0).length;

  return answer;
}
