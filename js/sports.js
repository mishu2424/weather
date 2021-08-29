const teamResult=()=>{
   const inputField=document.getElementById('input-field')
   const inputValue=inputField.value;
   inputField.value=''
   fetch(`https://www.thesportsdb.com/api/v1/json/1/searchteams.php?t=${inputValue}`)
    .then(res=>res.json())
    .then(data=>teamDisplay(data.teams))
}
const teamDisplay=teams=>{
    const parDiv=document.getElementById('par-div')
    parDiv.textContent=''
    teams.forEach(team=>{
        console.log(team)
        // const parDiv=document.getElementById('par-div')
        // parDiv.textContent=''
        const div=document.createElement('div')
        div.classList.add('col')
        div.innerHTML=`
        <div class="card">
        <img src="${team.strTeamJersey}" class="card-img-top" alt="..." />
        <div class="card-body">
          <h5 class="card-title">${team.strTeam}</h5>
          <p class="card-text">
            ${team.strStadiumDescription.slice(0,200)}
          </p>
        </div>
        `
        parDiv.appendChild(div)
    })
}
