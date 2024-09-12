// 문제 설명 : 최대공약수와 최소공배수 구하기
// 핵심 개념 : 유클리드 호제법

let [a, b] = require("fs").readFileSync(0).toString().trim().split(" ").map(Number);

function gcd(a, b) {
  if (b === 0) return a;
  return gcd(b, a % b);
}

let lcm = (a * b) / gcd(a, b);

console.log(`${gcd(a, b)}\n${lcm}`);

// 최대공약수(gcd) : 두 수 가장 작은 수까지 범위를 확인, 두 수 모두 나누어떨어지는 가장 큰 수를 구할 수 있음
// 최소공배수(lcd) : 한 수의 배수를 while 문에 넣어서 돌림, 결과가 다른 수와 나누어 떨어지는 순간 break, 결과가 lcd
