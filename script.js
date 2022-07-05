// Write your JavaScript code here!

//const { formSubmission, myFetch } = require("./scriptHelper");

window.addEventListener("load", function() {
    this.fetch("https://handlers.education.launchcode.org/static/planets.json").then(function(response) {
      response.json().then(function(json) {
         let index = Math.floor(Math.random() * json.length);
         console.log(json[index].name);
         document.getElementById("missionTarget").innerHTML = `
         <h2>Mission Destination</h2>
         <ol>
            <li>Name: ${json[index].name}</li>
            <li>Diameter: ${json[index].diameter}</li>
            <li>Star: ${json[index].star}</li>
            <li>Distance from Earth: ${json[index].distance}</li>
            <li>Number of Moons: ${json[index].moons}</li>
         </ol>
         <img src="${json[index].image}">
         `;
      });
   });
   let form = document.querySelector("form");
   form.addEventListener("submit", function(event) {
      let pilotNameInput = document.querySelector("input[name=pilotName]");
      let coPilotNameInput = document.querySelector("input[name=copilotName]");
      let fuelLevelInput = document.querySelector("input[name=fuelLevel]");
      let cargoMassInput = document.querySelector("input[name=cargoMass]");

      document.getElementById('launchStatus').innerText = 'Awaiting Information Before Launch';
      document.getElementById('launchStatus').style.color= "black";
      document.getElementById("pilotStatus").innerText = `Pilot ${pilotNameInput.value} Ready`;
      document.getElementById("copilotStatus").innerText = `Co-Pilot ${coPilotNameInput.value} Ready`;
      document.getElementById("fuelStatus").innerText = "Fuel Level is high enough for launch";
      document.getElementById("cargoStatus").innerText = "Cargo Mass is low enough for launch";

      let fieldReady = false;
      let cargoReady = false;
      let fuelReady = false;

      if (pilotNameInput.value.trim() === "" || coPilotNameInput.value.trim() === "" || fuelLevelInput.value.trim() === "" || cargoMassInput.value.trim() === "") {
         alert("All fields are required!");
         event.preventDefault();
         fieldReady = false;
         document.getElementById("faultyItems").style.visibility = "hidden";
      } else if (typeof String(pilotNameInput.value) !== "string" || pilotNameInput.value.trim().length === 0) {
         alert("Pilot name is required");
         event.preventDefault();
         fieldReady = false;
         document.getElementById("faultyItems").style.visibility = "hidden";
      } else if (!isNaN(Number(pilotNameInput.value)) && pilotNameInput.value.trim().length > 0) {
         alert("Numbers cannot be used in pilot name field!");
         event.preventDefault();
         fieldReady = false;
         document.getElementById("faultyItems").style.visibility = "hidden";
      } else if (typeof String(coPilotNameInput.value) !== "string" || coPilotNameInput.value.trim().length === 0) {
         alert("Co-Pilot field is required");
         event.preventDefault();
         fieldReady = false;
         document.getElementById("faultyItems").style.visibility = "hidden";
      } else if (!isNaN(Number(coPilotNameInput.value)) && coPilotNameInput.value.trim().length > 0) {
         alert("Numbers cannot be used in copilot name field");
         event.preventDefault();
         fieldReady = false;
         document.getElementById("faultyItems").style.visibility = "hidden";
      } else if (typeof Number(fuelLevelInput.value) !== "number" || isNaN(Number(fuelLevelInput.value))) {
         alert("No letters! Only numbers can be used in fuel level input");
         event.preventDefault();
         fieldReady = false;
         document.getElementById("faultyItems").style.visibility = "hidden";
      } else if (typeof Number(cargoMassInput.value) !== "number" || isNaN(Number(cargoMassInput.value))) {
         alert("No letters! Only numbers can be used for cargo mass");
         event.preventDefault();
         fieldReady = false;
         document.getElementById("faultyItems").style.visibility = "hidden";
      } else {
         fieldReady = true;
      }

      if (Number(fuelLevelInput.value) < 10000 && fieldReady) {
         document.getElementById("faultyItems").style.visibility = "visible";
         document.getElementById("fuelStatus").innerText = `There is not enough fuel for the journey! We have ${fuelLevelInput.value}L loaded and at least 10,000L are needed!`
         document.getElementById('launchStatus').innerText = 'Shuttle not ready for launch!';
         document.getElementById('launchStatus').style.color= "red";
         fuelReady = false;
         event.preventDefault();
      } else {
         fuelReady = true;
      }
      if (Number(cargoMassInput.value) > 10000 && fieldReady) {
         document.getElementById("faultyItems").style.visibility = "visible";
         document.getElementById("cargoStatus").innerText = `There is too much mass for take off! Max load is 10,000kg and we have ${cargoMassInput.value}kg!`
         document.getElementById('launchStatus').innerText = 'Shuttle not ready for launch!';
         document.getElementById('launchStatus').style.color= "red";
         cargoReady = false;
         event.preventDefault();
      } else {
         cargoReady = true;
      }
      if (fieldReady && fuelReady && cargoReady) {
         document.getElementById("faultyItems").style.visibility = "visible";
         document.getElementById('launchStatus').innerText = 'Shuttle is ready for launch!';
         document.getElementById('launchStatus').style.color= "green";
         event.preventDefault() 
         }
      });
    
  });


   //let listedPlanets;
   // Set listedPlanetsResponse equal to the value returned by calling myFetch()

   //let listedPlanetsResponse = myFetch();
   //listedPlanetsResponse.then(function (result) {
      // listedPlanets = result;
      // console.log(listedPlanets);
   //}).then(function () {
       //console.log(listedPlanets);
       // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.
//});
   
//});