// Напиши скрипт який перевіряє можливість відкрити чат з користувачем. 
// Для цього користувач має бути: другом; онлайн; без режиму не турбувати. Вихідні дані:
// const isOnline = false; const isFriend = true; const isDnd = false;

const isOnline = false;
const isFriend = true;
const isDnd = false;

if (isFriend && isOnline && !isDnd) {
  console.log("Можливо відкрити чат з користувачем.");
} else {
  console.log("Не можливо відкрити чат з користувачем.");
}