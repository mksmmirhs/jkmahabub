const allCountries = () => {
  fetch('https://restcountries.com/v3.1/all')
    .then(res => res.json())
    .then(countries => showCountries(countries));
};

const showCountries = countries => {
  const countryDiv = document.getElementById('country-names');
  countries.forEach(country => {
    const countryElDiv = document.createElement('div');
    countryElDiv.classList.add('country');
    countryElDiv.innerHTML = `
    <h2>Country name: ${country.name.common}</h2>
    <p>Capital City: ${country.capital ? country.capital[0] : 'noCapital'}</p>
    <button onclick= "showFlagUrl('${country.cca2}')"> Show Flag </button>
    `;
    countryDiv.appendChild(countryElDiv);
  });
};
const showFlagUrl = cca2 => {
  const url = `https://restcountries.com/v3.1/alpha/${cca2}`;
  fetch(url)
    .then(res => res.json())
    .then(country => showCountryDetail(country));
};

const showCountryDetail = country => {
  console.log(country[0].name.common);
  const sectionSelect = document.getElementById('flag-area');
  sectionSelect.innerHTML = `
  <h2>Country Name: ${country[0].name.common} </h2>
  <img src="${country[0].flags.png}" >
  `;
};
allCountries();
