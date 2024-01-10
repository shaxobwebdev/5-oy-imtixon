const url =
  "https://openlibrary.org/people/mekBot/books/currently-reading.json"; // Replace with the actual URL of your JSON data

const bookBox = document.querySelector(".shop_content");

fetch(url)
  .then((response) => {
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    return response.json();
  })
  .then((data) => {
    data.reading_log_entries.map(
      ({
        work: { title, author_names, first_publish_year, logged_edition },
      }) => {
        console.log(data.reading_log_entries);

        const cardDiv = document.createElement("div");
        cardDiv.className = "book-box";

        bookBox.appendChild(cardDiv);
        cardDiv.innerHTML = `
      <img src="https://b.kisscc0.com/20230604/bqe/kisscc0-bookcase-shelf-with-plants-stack-of-books-shelves-647d573591dc34.4171731316859359255975.png" alt="img">
        <h1>${title}</h1>
      <p>${author_names}</p>
      <span>${first_publish_year}</span>

      <div class="btn-title">
      <button class="btn_shop_1">Bookmark</button>
      <button class="btn_shop_1">More Info</button>
    </div>
    <div class="box-shopping">
      <button class="btn-shop_2">Read</button>
    </div>
      `;
      }
    );
    const { title, author, year } = data.reading_log_entries;
  })
  .catch((error) => {
    console.error(`Error occurred: ${error}`);
  });
