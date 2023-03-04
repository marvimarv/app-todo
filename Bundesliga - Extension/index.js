const todayDate = document.getElementById("date");
const matchList = document.getElementById("matchList");

const today = new Date();
const date =
  today.getDate() + "." + (today.getMonth() + 1) + "." + today.getFullYear();
const time =
  today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
const dateTime = date + " " + time;

todayDate.innerText = dateTime.toLocaleString("DE-de");

const bl1 = document.getElementById("bl1");
const bl2 = document.getElementById("bl2");
const buttonText = document.getElementById("buttonText");

const getBundesLigaData = async (bundesliga) => {
  const response = await fetch(
    `https://api.openligadb.de/getmatchdata/${bundesliga}`
  );
  const data = await response.json();
  console.log(data);
  matchList.innerHTML= "";
  updateList(data);
};

function updateList(data) {
  for (i = 0; i < data.length; i++) {
    if (data[i].matchResults.length > 0) {
      var pointsTeam1 = data[i].matchResults[0].pointsTeam1;
      var pointsTeam2 = data[i].matchResults[0].pointsTeam2;
    } else {
      var pointsTeam1 = "NaN";
      var pointsTeam2 = "NaN";
    }
    const team1 = data[i].team1.teamName;
    const team2 = data[i].team2.teamName;
    console.log(team1);
    const li = document.createElement("li");
    li.classList.add(
      "list-group-item",
      "d-flex",
      "justify-content-between",
      "align-items-center"
    );
    li.innerText = `${team1} vs ${team2}`;
    matchList.appendChild(li);
    const resultBadge = document.createElement("span");
    resultBadge.classList.add(
        "badge", 
        "bg-primary", 
        "rounded-pill"
    )
    resultBadge.innerText=`${pointsTeam1} : ${pointsTeam2}`;
    li.appendChild(resultBadge);
  }
}

bl1.addEventListener("click", function () {
  let bundesliga = "bl1";
  getBundesLigaData(bundesliga);
});

bl2.addEventListener("click", function () {
  let bundesliga = "bl2";
  getBundesLigaData(bundesliga);
});
