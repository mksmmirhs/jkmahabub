const loadFood = searchText => {
  fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`)
    .then(res => res.json())
    .then(data => loadFoodToUi(data.meals));
};

const loadFoodToUi = meals => {
  const cardDiv = document.getElementById('card-section');
  cardDiv.innerText = '';
  meals.forEach(food => {
    const createDiv = document.createElement('div');
    createDiv.innerHTML = `
    <div class="card card-compact w-96 bg-base-100 shadow-xl" id="card-div">
    <figure>
      <img
        src="${food.strMealThumb}"
        alt="Shoes"
      />
    </figure>
    <div class="card-body">
      <h2 class="card-title">${food.strMeal}</h2>
      <p>If a dog chews shoes whose shoes does he choose?</p>
    </div>
    <label for="my-modal" class="btn" onclick="loadModal(${food.idMeal})">Details</label>
  </div>`;
    cardDiv.appendChild(createDiv);
  });
};

const searchFood = () => {
  const searchText = document.getElementById('search-text').value;
  loadFood(searchText);
};

const loadModal = idMeal => {
  const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`;
  fetch(url)
    .then(res => res.json())
    .then(data => updateModal(data.meals[0]));
};
const updateModal = data => {
  const modalTitle = document.getElementById('modal-title');
  modalTitle.innerHTML = '';
  const imageTag = document.getElementById('set-image');
  imageTag.innerHTML = '';
  modalTitle.innerText = data.strMeal;
  imageTag.setAttribute(`src`, `${data.strMealThumb}`);
};
loadFood('fish');
