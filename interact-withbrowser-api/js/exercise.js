// const obj = { firstName: 'Abraham', lastName: 'Linkon' };
// const stringObj = JSON.stringify(obj);
// localStorage.setItem('object', stringObj);
// const getObj = localStorage.getItem('object');
// console.log(JSON.parse(getObj));

const increaseFunction = () => {
  const getCountP = document.getElementById('count');
  let countNum = parseInt(getCountP.innerText);
  countNum++;
  getCountP.innerHTML = countNum;

  localStorage.setItem('count', countNum);
};

const setCountFromLocal = () => {
  const countFromLocal = localStorage.getItem('count');
  let count;
  if (countFromLocal) {
    count = parseInt(countFromLocal);
  } else {
    count = 0;
  }
  const getCountP = document.getElementById('count');
  getCountP.innerHTML = count;
};
setCountFromLocal();
