// FUNCTIONS
function printTeam(arrTeam, teams) {
  let html = "";
  arrTeam.forEach((el) => {
    html += `<div class="team-member">
          <img src="img/${el.photo}">
          <h3>${el.name}</h3>
          <p>${el.position}</p>
        </div>`;
  });
  teams.innerHTML = html;
}
