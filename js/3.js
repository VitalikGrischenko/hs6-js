// Напиши скрипт входження числа у відрізок зазначений в х1 та х2: до х1; після х1; 
// від х1 до х2; до х1 або після х2. Вихідні дані:
// const x1 = 10; const x2 = 30;const number = 45; 
const x1 = 10;
const x2 = 30;
const number = 45;

if (number < x1) {
  console.log('Число знаходиться перед x1');
} else if (number > x2) {
  console.log('Число знаходиться після x2');
} else if (number <= x2) {
  console.log('Число знаходиться від x1 до x2');
} else {
  console.log('Число знаходиться до x1 або після x2');
}