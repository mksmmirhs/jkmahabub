const loadData = async (input, more) => {
  const url = `https://openapi.programming-hero.com/api/phones?search=${input}`;
  const fetchData = await fetch(url);
  const jsonData = await fetchData.json();
  ShowDataToUI(jsonData.data, more);
};
const ShowDataToUI = (phones, more) => {
  const gridDiv = document.getElementById('grid-ui');
  gridDiv.innerText = '';
  const btnShowMore = document.getElementById('btn-more');
  const noPhoneText = document.getElementById('device-not-found');
  if (phones.length === 0 && more) {
    console.log('zero');
    noPhoneText.classList.remove('d-none');
    loadingSpinner(false);
  } else {
    noPhoneText.classList.add('d-none');
  }
  if (more && phones.length > 10) {
    phones.splice(10);
    btnShowMore.classList.remove('d-none');
  } else {
    btnShowMore.classList.add('d-none');
  }
  phones.forEach(phone => {
    const createDiv = document.createElement('div');
    createDiv.classList.add('col');
    createDiv.innerHTML = `
    <div class="card p-4">
              <img src="${phone.image}" class="card-img-top" alt="..." />
              <div class="card-body">
                <h5 class="card-title">${phone.phone_name}</h5>
                <p class="card-text">
                  This is a longer card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </p>
                <button
                type="button"
                class="btn btn-primary"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal"
                onclick="showModalData('${phone.slug}')"
              >
                Load Details
              </button>
      
              </div>
      </div>
    `;
    gridDiv.appendChild(createDiv);
    loadingSpinner(false);
  });
};
const sentSearchText = more => {
  const searchText = document.getElementById('input-text').value;
  loadData(searchText, more);
};
document.getElementById('btn-search').addEventListener('click', () => {
  sentSearchText(true);
  loadingSpinner(true);
});
document
  .getElementById('input-text')
  .addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
      sentSearchText(true);
      loadingSpinner(true);
    }
  });
const showAllToUi = () => {
  sentSearchText(false);
  loadingSpinner(true);
};

const loadingSpinner = status => {
  const loadingSection = document.getElementById('spinner-loading');
  if (status === true) {
    loadingSection.classList.remove('d-none');
  } else {
    loadingSection.classList.add('d-none');
  }
};
const showModalData = async id => {
  const url = `https://openapi.programming-hero.com/api/phone/${id}`;
  const data = await fetch(url);
  const jsonData = await data.json();
  const title = document.getElementById('exampleModalLabel');
  title.innerText = jsonData.data.name;
  const modalBody = document.getElementById('modal-body');
  modalBody.innerHTML = `
  
  <img src="${jsonData.data.image}" alt="" class="img-fluid ml-0">
  <P>hhhhhhhhhh<P>
  
  
  `;
  console.log(jsonData.data);
};
loadData();
