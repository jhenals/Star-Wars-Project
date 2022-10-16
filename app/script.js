const searchBar = document.querySelector(".search-bar");
const searchButton = document.querySelector(".btn-search");
const cardContainer = document.querySelector(".card-container");

var arrayCardContainer = new Array();

// TODO add tutti i film qui sotto - oK
// TODO Cambiare alt description - OK
// TODO Alert No Result Found - ok
// TODO Solo se riesci, fare in modo che non ci siano card doppioni - ok
// TODO Refactor searchBar.value etc. perché non è efficiente ora come ora - ok

searchButton.addEventListener("click", () => {
  addCard();
});

searchBar.addEventListener("keypress", function (event) {
  if (event.keyCode === 13) {
    addCard();
  }
});

function addCard() {
  let i;
  const searchBarValue = searchBar.value
    .replace(/\s+/g, " ")
    .trim()
    .toLowerCase();
  if (searchBarValue === "The Phantom Menace".toLowerCase()) {
    i = 0;
  } else if (searchBarValue === "Attack of the Clones".toLowerCase()) {
    i = 1;
  } else if (searchBarValue === "Revenge of the Sith".toLowerCase()) {
    i = 2;
  } else if (searchBarValue === "A New Hope".toLowerCase()) {
    i = 3;
  } else if (searchBarValue === "The Empire Strikes Back".toLowerCase()) {
    i = 4;
  } else if (searchBarValue === "Return of the Jedi".toLowerCase()) {
    i = 5;
  }

  let alertMessage = "No Result Found";

  if (i !== undefined) {
    if (!arrayCardContainer.includes(JSON.stringify(films[i].episode_id))) {
      arrayCardContainer.push(JSON.stringify(films[i].episode_id));
      cardContainer.innerHTML += `<div class="card" id="${films[i].episode_id}">
            <img class="card-image" src="images/${films[i].episode_id}.jpeg" alt="${films[i].img_alt}" />
            <div class="texts-container">
              <h2 class="card-title">${films[i].title}</h2>
              <p class="episode-number">Episode ${films[i].episode_id}</p>
              <p class="card-director">${films[i].director}</p>
              <p class="card-producer">${films[i].producer}</p>
              <p class="release-date">${films[i].release_date}</p>
            <div>
          </div>`;
      document.getElementById(films[i].episode_id).style.backgroundColor =
        films[i].card_color;
    } else {
      alert("The movie was already selected");
    }
  } else window.alert(alertMessage);
}

const films = [
  {
    title: "The Phantom Menace",
    episode_id: 1,
    img_alt: "The Phantom Menace image",
    director: "George Lucas",
    producer: "Rick McCallum",
    release_date: "1999-05-19",
    card_color: "#533616",
  },
  {
    title: "Attack of the Clones",
    episode_id: 2,
    img_alt: "Attack of the Clones image",
    director: "George Lucas",
    producer: "Rick McCallum",
    release_date: "2002-05-16",
    card_color: "#ac927b",
  },
  {
    title: "Revenge of the Sith",
    episode_id: 3,
    img_alt: "Revenge of the Sith image",
    director: "George Lucas",
    producer: "Rick McCallum",
    release_date: "2005-05-19",
    card_color: "#3f120f",
  },
  {
    title: "A New Hope",
    episode_id: 4,
    img_alt: "A New Hope image",
    director: "George Lucas",
    producer: "Gary Kurtz, Rick McCallum",
    release_date: "1977-05-25",
    card_color: "#3f1a21",
  },
  {
    title: "The Empire Strikes Back",
    episode_id: 5,
    img_alt: "The Empire Strikes Back image",
    director: "Irvin Kershner",
    producer: "Gary Kurtz, Rick McCallum",
    release_date: "1980-05-17",
    card_color: "#21345e",
  },
  {
    title: "Return of the Jedi",
    episode_id: 6,
    img_alt: "Return of the Jedi image",
    director: "Richard Marquand",
    producer: "Howard G. Kazanjian, George Lucas, Rick McCallum",
    release_date: "1983-05-25",
    card_color: "#355047",
  },
];
