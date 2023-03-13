const myArr = [1, 2, 4, 5, 6, 7, 8, 9, 10];
const findEven = myArr.map(num => {
  if (num % 2 === 0) {
    return num;
  } else {
    return;
  }
});
console.log(findEven);
