function printTeam(arrTeam, eleContainer) {
  eleContainer.innerHTML = "";
  for (let i = 0; i < arrTeam.length; i++) {
    let objTeam = arrTeam[i];
    eleContainer.innerHTML += `<div> Member name: ${objTeam.name} role: ${objTeam.position} photo: ${objTeam.photo}</div>`;
  }
}
