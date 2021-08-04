// TODO: add code here
window.addEventListener("load", function(){
    this.fetch("https://handlers.education.launchcode.org/static/astronauts.json").then(function (response){
        response.json().then(function(json) {
            // console.log(json);
            const container = document.getElementById("container")
            json.sort((a, b) =>(a.hoursInSpace > b.hoursInSpace)? 1 : -1);
            for(let i=0; i<json.length; i++){
                container.innerHTML += 
                `
                <div class="astronaut">
                <div class="bio">
                <h3>${json[i].firstName} ${json[i].lastName}</h3>
                   <ul>
                      <li>Hours in space: ${json[i].hoursInSpace}</li>
                      <li id="${json[i].id}">Active: ${json[i].active}</li>
                      <li>Skills: ${json[i].skills.join(", ")}</li>
                   </ul>
                </div>
                <img class="avatar" src=${json[i].picture}>
                </div>
             `
            if(json[i].active === true){
                    const setColor = document.getElementById(String(json[i].id));
                    setColor.style.color = "green";
                };
            }
       });
    });
});