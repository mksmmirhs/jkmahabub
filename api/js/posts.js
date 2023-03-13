function fetchData() {
  fetch('https://jsonplaceholder.typicode.com/comments')
    .then(res => res.json())
    .then(data => postUi(data));
}

function postUi(posts) {
  const selectDiv = document.getElementById('post-container');
  for (post of posts) {
    const div = document.createElement('div');
    div.innerHTML = `
    <div class ="shadow-md p-8 mb-8 rounded-xl bg-sky-400 text-white">
    <h3 class="mb-2 text-xl">Commenter's name: ${post.name}</h3>
    <p> <span class="underline">comment:</span><br> ${post.body} </p>
    </div>
    `;
    selectDiv.appendChild(div);
  }
}
fetchData();
