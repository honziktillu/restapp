const info = document.getElementById("info");
const getBookByIdEvent = async () => {
  try {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const id = urlParams.get("id");
    const res = await fetch(`http://127.0.0.1:3000/book/${id}`, {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      method: "GET",
    });
    const data = await res.json();
    info.innerHTML += `
      <div class="card">
      <div class="card-content">
        <div class="media">
          <div class="media-left">
            <figure class="image is-48x48">
              <img src="https://bulma.io/images/placeholders/96x96.png" alt="Placeholder image">
            </figure>
          </div>
          <div class="media-content">
            <p class="title is-4">${data.name}</p>
            <p class="subtitle is-6">${data.year}</p>
          </div>
        </div>
      </div>
    </div>
      
      `;
  } catch (error) {
    info.innerHTML = `<p>Book not found!</p>`;
  }
};

window.onload = () => {
  getBookByIdEvent();
};
