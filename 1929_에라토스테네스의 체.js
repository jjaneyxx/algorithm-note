// 문제 설명 : M 이상 N 이하 소수를 모두 출력하기
// 핵심 개념 : 에라토스테네스의 체
// 시간복잡도 : O(NloglogN)

let [M, N] = require("fs").readFileSync("./input.txt").toString().trim().split(" ").map(Number);

// [true, true, ..., true] 의 N+1 길이의 배열 만듬
const prime = new Array(N + 1).fill(true);

// 1은 소수가 아니므로 false
prime[1] = false;

// 2부터 각 소수의 모든 배수를 찾아 false 로 만듬
// 각 수의 배수를 지우는 시작점은 그 수의 제곱부터임 (i*i)
for (let i = 2; i <= Math.sqrt(N); i++) {
  if (prime[i]) {
    // prime[i] 가 true 라면 (i가 소수라면)
    for (let j = i * i; j <= N; j += i) {
      // i의 제곱부터 N까지 i의 배수를 찾아 false 로 만듬
      prime[j] = false;
    }
  }
}

const results = [];

for (let i = M; i <= N; i++) {
  // 문제 범위 (M~N) 에서 true인 값(소수) 를 찾아 push
  if (prime[i]) results.push(i);
}

// 배열을 줄바꿈을 기준으로 문자열로 만듬 (join)
console.log(results.join("\n"));
