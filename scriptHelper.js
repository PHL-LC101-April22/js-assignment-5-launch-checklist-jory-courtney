// Write your helper functions here!
require('isomorphic-fetch');

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
    this.fetch("https://handlers.education.launchcode.org/static/planets.json").then(function(response) {
      response.json().then(function(json) {
         
         document.getElementById("missionTarget").innerHTML = 
   // Here is the HTML formatting for our mission  target div.
   
                `<h2>Mission Destination</h2>
                <ol>
                    <li>Name: ${json[index].name} </li>
                    <li>Diameter: ${json[index].diameter} </li>
                    <li>Star: ${json[index].star}</li>
                    <li>Distance from Earth: ${json[index].distance} </li>
                    <li>Number of Moons: ${json[index].moons} </li>
                </ol>
                <img src="${json[index].image}"> `;

});

function validateInput(testInput) {
    if(testInput === ""){
        alert("Empty");
        } else if (typeof testInput === "number"){
            alert("Not a Number");
        } else if(isNaN(testInput) = true){
            alert("Is a Number");
    }
   
}

function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {

    let form = document.querySelector("form");
    form.addEventListener("submit", function(event) {
       let pilotNameInput = document.querySelector("input[name=pilotName]");
       let coPilotNameInput = document.querySelector("input[name=copilotName]");
       let fuelLevelInput = document.querySelector("input[name=fuelLevel]");
       let cargoMassInput = document.querySelector("input[name=cargoMass]");

       fieldCheck = false;
       cargoReady = false;
       fuelReady = false;
 
       if (pilotNameInput.value.trim() === "" || coPilotNameInput.value.trim() === "" || fuelLevelInput.value.trim() === "" || cargoMassInput.value.trim() === "") {
          alert("All fields must be entered!");
          event.preventDefault();
          fieldCheck = false;
          document.getElementById("faultyItems").style.visibility = "hidden";
       } else if (typeof String(pilotNameInput.value) !== "string" || pilotNameInput.value.trim().length === 0) {
          alert("Pilot name is required");
          event.preventDefault();
          fieldCheck = false;
          document.getElementById("faultyItems").style.visibility = "hidden";
       } else if (!isNaN(Number(pilotNameInput.value)) && pilotNameInput.value.trim().length > 0) {
          alert("No numbers can be used in pilot name field");
          event.preventDefault();
          fieldCheck = false;
          document.getElementById("faultyItems").style.visibility = "hidden";
       } else if (typeof String(coPilotNameInput.value) !== "string" || coPilotNameInput.value.trim().length === 0) {
          alert("Co-Pilot field is required");
          event.preventDefault();
          fieldCheck = false;
          document.getElementById("faultyItems").style.visibility = "hidden";
       } else if (!isNaN(Number(coPilotNameInput.value)) && coPilotNameInput.value.trim().length > 0) {
          alert("No numbers can be used in copilot name field");
          event.preventDefault();
          fieldCheck = false;
          document.getElementById("faultyItems").style.visibility = "hidden";
       } else if (typeof Number(fuelLevelInput.value) !== "number" || isNaN(Number(fuelLevelInput.value))) {
          alert("Only numbers can be used in fuel level input");
          event.preventDefault();
          fieldCheck = false;
          document.getElementById("faultyItems").style.visibility = "hidden";
       } else if (typeof Number(cargoMassInput.value) !== "number" || isNaN(Number(cargoMassInput.value))) {
          alert("Only numbers can be used for cargo mass");
          event.preventDefault();
          fieldCheck = false;
          document.getElementById("faultyItems").style.visibility = "hidden";
       } else {
          fieldCheck = true;
       }
 
       if (Number(fuelLevelInput.value) < 10000 && fieldCheck) {
          document.getElementById("faultyItems").style.visibility = "visible";
          document.getElementById("fuelStatus").innerText = `More fuel is needed! We have ${fuelLevelInput.value}L loaded and at least 10,000L is required!`
          document.getElementById('launchStatus').innerText = "Shuttle not ready for launch!";
          document.getElementById('launchStatus').style.color= "red";
          fuelReady = false;
          event.preventDefault();
       } else {
          fuelReady = true;
       }
       if (Number(cargoMassInput.value) > 10000 && fieldCheck) {
          document.getElementById("faultyItems").style.visibility = "visible";
          document.getElementById("cargoStatus").innerText = `Too much mass for the shuttle to take off! Max load is 10,000kg and we have ${cargoMassInput.value}kg!`
          document.getElementById('launchStatus').innerText = "Shuttle not ready for launch!";
          document.getElementById('launchStatus').style.color= "red";
          cargoReady = false;
          event.preventDefault();
       } else {
          cargoReady = true;
       }
       if (fuelReady && cargoReady && fieldCheck) {
          document.getElementById("faultyItems").style.visibility = "visible";
          document.getElementById('launchStatus').innerText = `Shuttle is ready for FLIGHT Enjoy ${json[index].name}!`;
          document.getElementById('launchStatus').style.color= "green";
          event.preventDefault() 
       }
    });
   });


       document.getElementById('launchStatus').innerText = 'Awaiting Information Before Launch';
       document.getElementById('launchStatus').style.color= "black";
       document.getElementById("pilotStatus").innerText = `Pilot ${pilotNameInput.value} Ready`;
       document.getElementById("copilotStatus").innerText = `Co-Pilot ${coPilotNameInput.value} Ready`;
       document.getElementById("fuelStatus").innerText = "Fuel Level high enough for launch";
       document.getElementById("cargoStatus").innerText = "Cargo Mass low enough for launch";



async function myFetch() {
    let planetsReturned;

    planetsReturned = await fetch("https://handlers.education.launchcode.org/static/planets.json").then( function(response) {
        response.json().then(function(json){
            return pickPlanet
        });
      
        });

    return planetsReturned;
}

function pickPlanet(planets) {
    let index = Math.floor(Math.random() * json.length);
    console.log(json[index].name);
}

module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet; 
module.exports.myFetch = myFetch;
