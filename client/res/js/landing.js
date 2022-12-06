const info = document.getElementById("info");
const getAllBooksEvent = async () => {
    try {
      const res = await fetch("http://127.0.0.1:3000/book", {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        method: "GET",
      });
      const data = await res.json();
      info.innerHTML = "";
      data.books.map((book) => {
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
              <p class="title is-4">${book.name}</p>
              <p class="subtitle is-6">${book.year}</p>
              <a href="book.html?id=${book._id}">View</a>
            </div>
          </div>
        </div>
      </div>
        
        `;
        info.innerHTML += `<p><br></p>`;
      });
    } catch (error) {
      info.innerText = error;
    }
  };


window.onload = () => {
    getAllBooksEvent();
}