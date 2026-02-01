document.addEventListener("DOMContentLoaded", () => {
  const params = new URLSearchParams(window.location.search);
  const actorId = params.get("id");

  const actorName = document.getElementById("actorName");
  const actorImage = document.getElementById("actorImage");
  const actorIndustry = document.getElementById("actorIndustry");
  const actorMoviesDiv = document.getElementById("actorMovies");

  const actor = actors.find(a => a.id === actorId);

  if (!actor) {
    actorName.textContent = "Actor not found";
  } else {
    actorName.textContent = actor.name;
    actorImage.src = actor.photo;
    actorIndustry.textContent = actor.industry;

    const relatedMovies = movies.filter(
      m => m.actorIds && m.actorIds.includes(actor.id)
    );

    if (relatedMovies.length === 0) {
      actorMoviesDiv.innerHTML = "<p>No movies added yet.</p>";
    } else {
      relatedMovies.forEach(movie => {
        const card = document.createElement("div");
        card.className = "movie-card";
        card.innerHTML = `
          <img src="${movie.poster}">
          <h3>${movie.title}</h3>
        `;
        card.onclick = () => {
          window.location.href = `movie.html?id=${movie.id}`;
        };
        actorMoviesDiv.appendChild(card);
      });
    }
  }
});