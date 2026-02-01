const directors = [
  {
    id: 1,
    name: "S. S. Rajamouli",
    photo: "images/directors/rajamouli.jpg",
    movies: ["RRR", "Baahubali: The Beginning"]
  },
  {
    id: 2,
    name: "Sukumar",
    photo: "images/directors/sukumar.jpg",
    movies: ["Pushpa: The Rise", "Pushpa: The Rule"]
  },
{
  id: 3,
  name: "Trivikram Srinivas",
  photo: "images/directors/trivikram.jpg",
  movies: ["Ala Vaikunthapurramuloo", "Julayi"]
},
  {
    id: 4,
    name: "Anil Ravipudi",
    photo: "images/directors/anil.jpg",
    movies: ["Pelli Kanuka", "Devadasu", "Manmadhudu"]
  },
  {
    id: 5,
    name: "Bapu",
    photo: "images/directors/bapu.jpg",
    movies: ["Sankarabharanam", "Manushulanta Okkate", "Seethamma Vakitlo Sirimallechettu"]
  },
  {
    id: 6,
    name: "Boyapati Srinu",
    photo: "images/directors/boyapati.jpg",
    movies: ["Sainikudu", "Simhadri", "Bujjigadu"]
  },
  {
    id: 7,
    name: "Dasari Narayana Rao",
    photo: "images/directors/dasari.jpg",
    movies: ["Idi Sangathi", "Manushulanta Okkate", "Sankarabharanam"]
  },
  {
    id: 8,
    name: "E.V.V. Satyanarayana",
    photo: "images/directors/evv.jpg",
    movies: ["Chanti", "Satyam", "Manushulanta Okkate"]
  },
  {
    id: 9,
    name: "Gopichand Malineni",
    photo: "images/directors/gopichand.jpg",
    movies: ["Sasirekha Parinayam", "Manmadhudu", "Pournami"]
  },
  {
    id: 10,
    name: "Gowtam Tinnanuri",
    photo: "images/directors/gowtam.jpg",
    movies: ["Jalsa", "Sasirekha Parinayam", "Manmadhudu"]
  },
  {
    id: 11,
    name: "Gunasekhar",
    photo: "images/directors/gunasekhar.jpg",
    movies: ["Anukokunda Oka Roju", "Idi Sangathi", "Satyam"]
  },
  {
    id: 12,
    name: "Jandhyala Subramanya Sastry",
    photo: "images/directors/jandhyala.jpg",
    movies: ["Sankarabharanam", "Manushulanta Okkate", "Seethamma Vakitlo Sirimallechettu"]
  },
  {
    id: 13,
    name: "K.V. Reddy",
    photo: "images/directors/k.v.reddy.jpg",
    movies: ["Punarjanma", "Devadasu", "Manushulanta Okkate"]
  },
  {
    id: 14,
    name: "Koratala Shiva",
    photo: "images/directors/koratala.jpg",
    movies: ["Srimanthudu", "MCA", "Bharat Ane Nenu"]
  },
  {
    id: 15,
    name: "Krishnavamsi",
    photo: "images/directors/krishnavamsi.jpg",
    movies: ["Manasantha Nuvve", "Sainikudu", "Murari"]
  },
  {
    id: 16,
    name: "K. Raghavendra Rao",
    photo: "images/directors/krr.jpg",
    movies: ["Manasantha Nuvve", "Sainikudu", "Murari"]
  },
  {
    id: 17,
    name: "L.V. Prasad",
    photo: "images/directors/l.v.prasad.jpg",
    movies: ["Punarjanma", "Manushulanta Okkate", "Devadasu"]
  },
  {
    id: 18,
    name: "Muthyala Subbaiah",
    photo: "images/directors/muthyala.jpg",
    movies: ["Sankarabharanam", "Manushulanta Okkate", "Seethamma Vakitlo Sirimallechettu"]
  },
  {
    id: 19,
    name: "Naga Ashwin",
    photo: "images/directors/nagaashwin.jpg",
    movies: ["Yaan", "Oh My Dog", "Sillu Karuppatti"]
  },
  {
    id: 20,
    name: "Prasanth Varma",
    photo: "images/directors/prasanthvarma.jpg",
    movies: ["Oh My Dog", "Yaan", "Sillu Karuppatti"]
  },
  {
    id: 21,
    name: "Puri Jagannadh",
    photo: "images/directors/puri.jpg",
    movies: ["Badri", "Pokiri", "Desamuduru"]
  },
  {
    id: 22,
    name: "Ram Gopal Varma",
    photo: "images/directors/rgv.jpg",
    movies: ["Satyam", "Company", "Sainikudu"]
  },
  {
    id: 23,
    name: "Sailesh Kolanu",
    photo: "images/directors/sailesh.jpg",
    movies: ["MCA", "Srimanthudu", "Bharat Ane Nenu"]
  },
  {
    id: 24,
    name: "Sekhar Kammula",
    photo: "images/directors/sekhar.jpg",
    movies: ["Manasantha Nuvve", "Happy Days", "Godavari"]
  },
  {
    id: 25,
    name: "Srikanth Addala",
    photo: "images/directors/srikanth.jpg",
    movies: ["Seethamma Vakitlo Sirimallechettu", "Happy Days", "Godavari"]
  },
  {
    id: 26,
    name: "Srinu Vaitla",
    photo: "images/directors/srinu.jpg",
    movies: ["Dhee", "Anukokunda Oka Roju", "Manmadhudu"]
  },
  {
    id: 27,
    name: "S.R. Vikram",
    photo: "images/directors/srv.jpg",
    movies: ["Srimanthudu", "MCA", "Bharat Ane Nenu"]
  },
  {
    id: 29,
    name: "Subbarao",
    photo: "images/directors/subbarao.jpg",
    movies: ["Sankarabharanam", "Manushulanta Okkate", "Seethamma Vakitlo Sirimallechettu"]
  },
  {
    id: 30,
    name: "Surendar Reddy",
    photo: "images/directors/surendar.jpg",
    movies: ["Srimanthudu", "MCA", "Bharat Ane Nenu"]
  },
  {
    id: 31,
    name: "Tharun Bhascker",
    photo: "images/directors/tharun.jpg",
    movies: ["Putham Pudhu Payanam", "Oh My Dog", "Sillu Karuppatti"]
  },
  {
    id: 32,
    name: "Vamshi Paidipally",
    photo: "images/directors/vamshi.jpg",
    movies: ["Oka Oori Katha", "MCA", "Srimanthudu"]
  },
  {
    id: 33,
    name: "Venu Sri Ram",
    photo: "images/directors/venu.jpg",
    movies: ["Srimanthudu", "MCA", "Bharat Ane Nenu"]
  },
  {
    id: 34,
    name: "K. Viswanath",
    photo: "images/directors/viswanath.jpg",
    movies: ["Sankarabharanam", "Satyam", "Srimanthudu"]
  },
  {
    id: 35,
    name: "Vivek Athreya",
    photo: "images/directors/vivek.jpg",
    movies: ["Oh My Dog", "Yaan", "Sillu Karuppatti"]
  },
  {
    id: 36,
    name: "V.V. Vinayak",
    photo: "images/directors/vvv.jpg",
    movies: ["Sainikudu", "Simhadri", "Gharana Mogudu"]
  }
];

const directorGrid = document.getElementById("directorGrid");
const search = document.getElementById("directorSearch");

function displayDirectors(list) {
  directorGrid.innerHTML = "";
  list.forEach(director => {
    const card = document.createElement("div");
    card.className = "actor-card";
    card.innerHTML = `
      <img src="${director.photo}" class="actor-photo">
      <h4>${director.name}</h4>
    `;
    card.onclick = () => {
      window.location.href = `director.html?id=${director.id}`;
    };
    directorGrid.appendChild(card);
  });
}

displayDirectors(directors);

search.addEventListener("input", () => {
  const value = search.value.toLowerCase();
  displayDirectors(
    directors.filter(d =>
      d.name.toLowerCase().includes(value)
    )
  );
});
// ================= BACK BUTTON =================
backBtn.onclick = () => {
  container.innerHTML = "";
  industryHub.style.display = "grid";
  backBtn.style.display = "none";
};
