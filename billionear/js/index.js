const getAllBillion = () => {
  fetch('https://forbes400.onrender.com/api/forbes400')
    .then(res => res.json())
    .then(data => console.log(data))
    .catch(err => console.log(err));
};
getAllBillion();
