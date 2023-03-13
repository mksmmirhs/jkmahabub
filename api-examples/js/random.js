const getUser = () => {
  fetch('https://randomuser.me/api/?gender=female')
    .then(res => res.json())
    .then(user => showUser(user));
};
const showUser = user => {
  const picture = document.getElementById('image');
  picture.setAttribute(`src`, `${user.results[0].picture.medium}`);
  const fullName = `${user.results[0].name.title} ${user.results[0].name.first} ${user.results[0].name.last}`;
  document.getElementById('name').innerText = fullName;
  const city = user.results[0].location.city;
  document.getElementById('city').innerText = city;
  document.getElementById(
    'address'
  ).innerText = `${user.results[0].location.street.number}, ${user.results[0].location.street.name}`;
};

getUser();
