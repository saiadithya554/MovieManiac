document.addEventListener("DOMContentLoaded", () => {
// ================= EXISTING DATA (UNCHANGED) =================
const actors = [
  { id: "actor_jr ntr", name: "N. T. Rama Rao Jr.", photo: "images/actors/jr ntr.jpg", industry: "Tollywood" },
  { id: "actor_ram charan", name: "Ram Charan", photo: "images/actors/ram charan.jpg", industry: "Tollywood" },
  { id: "actor_allu arjun", name: "Allu Arjun", photo: "images/actors/allu arjun.jpg", industry: "Tollywood" },
  { id: "actor_mahesh babu", name: "Mahesh Babu", photo: "images/actors/mahesh babu.jpg", industry: "Tollywood" },
  { id: "actor_prabhas", name: "Prabhas", photo: "images/actors/prabhas.jpg", industry: "Tollywood" },
  { id: "actor_pawan kalyan", name: "Pawan Kalyan", photo: "images/actors/pawan kalyan.jpg", industry: "Tollywood" },
  { id: "actor_chiranjeevi", name: "Chiranjeevi", photo: "images/actors/chiranjeevi.jpg", industry: "Tollywood" },
  { id: "actor_venkatesh", name: "Venkatesh", photo: "images/actors/venkatesh.jpg", industry: "Tollywood" },
  { id: "actor_balakrishna", name: "BalaKrishna", photo: "images/actors/balakrishna.jpg", industry: "Tollywood" },
  { id: "actor_ravi teja", name: "Ravi Teja", photo: "images/actors/ravi teja.jpg", industry: "Tollywood" },
  { id: "actor_aadi", name: "Aadi", photo: "images/actors/aadi.jpg", industry: "Tollywood" },
  { id: "actor_nani", name: "Nani", photo: "images/actors/nani.jpg", industry: "Tollywood" },
  { id: "actor_nagarjuna", name: "Nagarjuna", photo: "images/actors/nagarjuna.jpg", industry: "Tollywood" },
  { id: "actor_teja sajja", name: "Teja Sajja", photo: "images/actors/teja sajja.jpg", industry: "Tollywood" },
  { id: "actor_rajashekar", name: "Rajashekar", photo: "images/actors/rajashekar.jpg", industry: "Tollywood" },
  { id: "actor_sree vishnu", name: "Sree Vishnu", photo: "images/actors/sree vishnu.jpg", industry: "Tollywood" },
  { id: "actor_allari naresh", name: "Allari Naresh", photo: "images/actors/allari naresh.jpg", industry: "Tollywood" },
  { id: "actor_manoj", name: "Manchu Manoj", photo: "images/actors/manoj.jpg", industry: "Tollywood" },
  { id: "actor_anand devarakonda", name: "Anand Devarakonda", photo: "images/actors/anand.jpg", industry: "Tollywood" },
  { id: "actor_bellamkonda", name: "Sai Srinivas Bellamkonda", photo: "images/actors/bellamkonda.jpg", industry: "Tollywood" },
  { id: "actor_chaitanya", name: "Chaitanya Rao", photo: "images/actors/chaitanya rao.jpg", industry: "Tollywood" },
  { id: "actor_gopichand", name: "Gopichand", photo: "images/actors/gopichand.jpg", industry: "Tollywood" },
  { id: "actor_kalyan ram", name: "Kalyan Ram", photo: "images/actors/kalyan ram.jpg", industry: "Tollywood" },
  { id: "actor_karthikeya", name: "Karthikeya", photo: "images/actors/karthikeya.jpg", industry: "Tollywood" },
  { id: "actor_nagachaitanya", name: "Nagachaitanya", photo: "images/actors/nagachaitanya.jpg", industry: "Tollywood" },
  { id: "actor_nandu", name: "Nandu", photo: "images/actors/nandu.jpg", industry: "Tollywood" },
  { id: "actor_naresh agastya", name: "Naresh Agastya", photo: "images/actors/naresh agastya.jpg", industry: "Tollywood" },
  { id: "actor_nithin", name: "Nithin", photo: "images/actors/nithin.jpg", industry: "Tollywood" },
  { id: "actor_priyadarshi", name: "Priyadarshi", photo: "images/actors/priyadarshi.jpg", industry: "Tollywood" },
  { id: "actor_raj tarun", name: "Raj Tarun", photo: "images/actors/raj tarun.jpg", industry: "Tollywood" },
  { id: "actor_ram pothineni", name: "Ram Pothineni", photo: "images/actors/ram pothineni.jpg", industry: "Tollywood" },
  { id: "actor_rana", name: "Rana Daggubati", photo: "images/actors/rana.jpg", industry: "Tollywood" },
  { id: "actor_roshan kanakala", name: "Roshan Kanakala", photo: "images/actors/roshan kanakala.jpg", industry: "Tollywood" },
  { id: "actor_roshan", name: "Roshan", photo: "images/actors/roshan.jpg", industry: "Tollywood" },
  { id: "actor_sai dharamtej", name: "Sai Dharamtej", photo: "images/actors/sai dharamtej.jpg", industry: "Tollywood" },
  { id: "actor_satyadev", name: "Satyadev", photo: "images/actors/satyadev.jpg", industry: "Tollywood" },
  { id: "actor_sharwanand", name: "Sharwanand", photo: "images/actors/sharwanand.jpg", industry: "Tollywood" },
  { id: "actor_siddu jonnalagadda", name: "Siddu Jonnalagadda", photo: "images/actors/siddu.jpg", industry: "Tollywood" },
  { id: "actor_sivaji", name: "Sivaji", photo: "images/actors/sivaji.jpg", industry: "Tollywood" },
  { id: "actor_sudeer babu", name: "Sudeer Babu", photo: "images/actors/sudeer babu.jpg", industry: "Tollywood" },
  { id: "actor_varun tej", name: "Varun Tej", photo: "images/actors/varun tej.jpg", industry: "Tollywood" },
  { id: "actor_vijay", name: "Vijay Devarakonda", photo: "images/actors/vijay.jpg", industry: "Tollywood" },
  { id: "actor_vishwak sen", name: "Vishwak Sen", photo: "images/actors/vishwak sen.jpg", industry: "Tollywood" },
  { id: "actor_leo", name: "Leonardo Dicaprio", photo: "images/actors/leo.jpg", industry: "Hollywood" }
];
// ================= ELEMENTS =================
const industryHub = document.getElementById("industryHub");
const container = document.getElementById("actorsContainer");
const backBtn = document.getElementById("backToIndustries");

// ================= INDUSTRY HUB =================
const industryList = [
  "Tollywood",
  "Hollywood",
  "Bollywood",
  "Kollywood",
  "Mollywood",
  "Sandalwood"
];

industryList.forEach(industry => {
  const hubCard = document.createElement("div");
  hubCard.className = "card hubCard";
  hubCard.textContent = industry;

  hubCard.onclick = () => openIndustry(industry);

  industryHub.appendChild(hubCard);
});

// ================= CORE FUNCTION =================
function openIndustry(industry) {
  industryHub.style.display = "none";
  backBtn.style.display = "block";
  showActorsByIndustry(industry);
}

// ================= BACK BUTTON =================
backBtn.onclick = () => {
  container.innerHTML = "";
  industryHub.style.display = "grid";
  backBtn.style.display = "none";
};

// ================= EXISTING RENDER LOGIC =================
function showActorsByIndustry(selectedIndustry) {
  container.innerHTML = "";

  const title = document.createElement("h2");
  title.textContent = selectedIndustry;
  title.style.color = "#f5c518";
  title.style.margin = "30px 0 10px";
  container.appendChild(title);

  const grid = document.createElement("div");
  grid.className = "grid";

  actors
    .filter(a => a.industry === selectedIndustry)
    .forEach(actor => {
      const card = document.createElement("div");
      card.className = "card";
      card.style.cursor = "pointer";

      card.onclick = () => {
        window.location.href = `actor-details.html?id=${actor.id}`;
      };

      card.innerHTML = `
        <img src="${actor.photo}">
        <h3>${actor.name}</h3>
        <p>${actor.industry}</p>
      `;

      grid.appendChild(card);
    });

  container.appendChild(grid);
}

// ================= URL BASED FILTER (NEW) =================
const params = new URLSearchParams(window.location.search);
const urlIndustry = params.get("industry");

if (urlIndustry) {
  const formatted =
    urlIndustry.charAt(0).toUpperCase() + urlIndustry.slice(1).toLowerCase();
  openIndustry(formatted);
}
});