//Array Destructuring
const fib = [1, 1, 2, 3, 5, 8, 13];
const [, a, , b] = fib;
console.log(a, b);

const line = [[10, 17], [14, 7]];
const [[p1x, p1y], [p2x, p2y]] = line;

console.log(p1x, p1y, p2x, p2y);

const people = ['chris', 'sandra'];
const [a1, b1, c1 = 'guest'] = people;
console.log(a1, b1, c1);

const people1 = ['chris', 'sandra', 'bob'];
const [a2, ...others] = people1;
console.log(others);

const dict = {
    duck: 'quack',
    dog: 'wuff',
    mouse: 'squeak',
    hamster: "squeak"
}
// выберет все элементы с 'squeak'
const res = Object.entries(dict)
    .filter((arr) => arr[1] === 'squeak');
console.log(res)