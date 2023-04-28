// ADD ARREY OF OBBJECTS
const arrTeam = [
  {
    name: "Wayne Barnett",
    position: "Founder & CEO",
    photo: "wayne-barnett-founder-ceo.jpg",
  },
  {
    name: "Angela Caroll",
    position: "Chief Editor",
    photo: "angela-caroll-chief-editor.jpg",
  },
  {
    name: "Walter Gordon",
    position: "Office Manager",
    photo: "walter-gordon-office-manager.jpg",
  },
  {
    name: "Angela Lopez",
    position: "Social Media Manager",
    photo: "angela-lopez-social-media-manager.jpg",
  },
  {
    name: "Scott Estrada",
    position: "Developer",
    photo: "scott-estrada-developer.jpg",
  },
  {
    name: "Barbara Ramos",
    position: "Graphic Designer",
    photo: "barbara-ramos-graphic-designer.jpg",
  },
];

// PRINT IN CONSOLE LOG ALL THE TEAM MEMBER
for (let i = 0; i < arrTeam.length; i++) {
  const objTeam = arrTeam[i];
  console.log(
    `Member name: ${objTeam.name} role: ${objTeam.position} photo: ${objTeam.photo}`
  );
}

// PRINT DATA IN DOM
const teams = document.querySelector("#teams");
printTeam(arrTeam, teams);
