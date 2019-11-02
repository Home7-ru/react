// выберет chris и создаст новый масив others = 'sandra', 'bob'

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