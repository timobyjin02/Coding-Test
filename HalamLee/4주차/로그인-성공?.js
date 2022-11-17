// https://school.programmers.co.kr/learn/courses/30/lessons/120883

function solution(id_pw, db) {
  const dataObj = {};
  for (let i of db) {
    dataObj[i[0]] = i[1];
  }

  if (id_pw[0] in dataObj) {
    if (dataObj[id_pw[0]] === id_pw[1]) {
      return 'login';
    } else {
      return 'wrong pw';
    }
  } else {
    return 'fail';
  }
}
