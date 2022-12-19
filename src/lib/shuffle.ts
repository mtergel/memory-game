/* eslint-disable @typescript-eslint/no-explicit-any */
export default function shuffle(arr: Array<any>) {
  const n = arr.length;
  for (let i = n - 1; i > 0; i--) {
    let j = randomIntRange(0, i);
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }

  return arr;
}

function randomIntRange(min: number, max: number) {
  return Math.floor(Math.random() * (max - min + 1) + min)
}
