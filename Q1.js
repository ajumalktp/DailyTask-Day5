function solution(str){
  const pairs = [];
  for (let i = 0; i < str.length; i += 2) {
    const pair = str.slice(i, i + 2);
    pairs.push(pair);
  }
  if (str.length % 2 !== 0) {
    pairs[pairs.length - 1] += '_';
  }
  return pairs;
}
let arr1=['abc']
let arr2=['abcdef']
console.log(solution(arr1))
console.log(solution(arr2))