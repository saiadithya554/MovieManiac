const movieGrid = document.getElementById("movieGrid");
const searchInput = document.getElementById("searchInput");
const industryHub = document.getElementById("industryHub");
const backBtn = document.getElementById("backToIndustries");

const movieIndustryMap = {
  "C/o Kancharapalem": "Tollywood",
  "Jersey": "Tollywood",
  "Mayabazar": "Tollywood",
  "Sita Ramam": "Tollywood",
  "Nuvvu Naaku Nachchav": "Tollywood",
  "Agent Sai Srinivasa Athreya": "Tollywood",
  "Aha Naa Pellanta": "Tollywood",
  "Mahanati": "Tollywood",
  "Sagara Sangamam": "Tollywood",
  "Baahubali 2: The Conclusion": "Tollywood",
  "Aa Naluguru": "Tollywood",
  "Bommarillu": "Tollywood",
  "Hi Nanna": "Tollywood",
  "Pelli Choopulu": "Tollywood",
  "Rangasthalam": "Tollywood",
  "Manmadhudu": "Tollywood",
  "Athadu": "Tollywood",
  "Sankarabharanam": "Tollywood",
  "Mathu Vadalara": "Tollywood",
  "Evaru": "Tollywood",
  "Kshanam": "Tollywood",
  "Drushyam": "Tollywood",
  "Lucky Baskhar": "Tollywood",
  "Vedam": "Tollywood",
  "Aditya 369": "Tollywood",
 };

function displayMovies(list) {
  movieGrid.innerHTML = "";
  list.forEach(movie => {
    const card = document.createElement("div");
    card.className = "movie-card";
    card.innerHTML = `
      <img src="${movie.poster}" class="movie-poster">
      <h3>${movie.title}</h3>
      <p>${movie.year} • ${movie.genre}</p>
    `;
    card.onclick = () => {
      window.location.href = `movie.html?id=${movie.id}`;
    };
    movieGrid.appendChild(card);
  });
}
const industries = [
  "Tollywood",
  "Hollywood",
  "Bollywood",
  "Kollywood",
  "Mollywood",
  "Sandalwood"
];

industries.forEach(industry => {
  const link = document.createElement("a");
  link.href = `industry.html?industry=${industry}`;
  link.className = "industry-link";

  const card = document.createElement("div");
  card.className = "industry-card";

  card.innerHTML = `
    <img 
      src="images/industry-icons/${industry.toLowerCase()}.png"
      alt="${industry}"
      class="industry-icon"
    >
    <p class="industry-name">${industry}</p>
  `;

  link.appendChild(card);
  industryHub.appendChild(link);
});
      // WRAP CARD INSIDE LINK
    link.appendChild(card);

    // ADD TO HUB
    industryHub.appendChild(link);
  });

searchInput.addEventListener("input", () => {
  displayMovies(
    movies.filter(m =>
      m.title.toLowerCase().includes(searchInput.value.toLowerCase())
    )
  );
});
// ===== HOMEPAGE MOVIE SLIDESHOW =====
const slideshowMovies = [
  { title: "RRR", industry: "Tollywood", poster: "images/movies/rrr.jpg" },
  { title: "Inception", industry: "Hollywood", poster: "images/movies/inception.jpg" },
  { title: "3 Idiots", industry: "Bollywood", poster: "images/movies/3 idiots.jpg" },
  { title: "Vikram", industry: "Kollywood", poster: "images/movies/vikram.jpg" },
  { title: "Drishyam", industry: "Mollywood", poster: "images/movies/drushyam.jpg" }
];

const slideshow = document.getElementById("movieSlideshow");

slideshowMovies.forEach(movie => {
  const slide = document.createElement("div");
  slide.className = "slide";
  slide.innerHTML = `
    <img src="${movie.poster}">
    <div class="slide-title">
      <h2>${movie.title}</h2>
      <span>${movie.industry}</span>
    </div>
  `;
  slideshow.appendChild(slide);
});

let slideIndex = 0;
setInterval(() => {
  slideIndex = (slideIndex + 1) % slideshowMovies.length;
  slideshow.style.transform = `translateX(-${slideIndex * 100}%)`;
}, 4000);
