const params = new URLSearchParams(window.location.search);
const industry = params.get("industry");
document.getElementById("industryTitle").textContent = industry;

const banner = document.getElementById("industryBanner");
banner.style.backgroundImage =
  `url(images/industries/${industry.toLowerCase()}.jpg)`;
const grid = document.getElementById("industryMovieGrid");

// FILTER & SHOW MOVIES
movies
  .filter(movie => movie.industry === industry)
  .forEach(movie => {
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

    grid.appendChild(card);
  });
