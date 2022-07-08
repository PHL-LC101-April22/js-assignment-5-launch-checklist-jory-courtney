// Write your helper functions here!
require("isomorphic-fetch");

function addDestinationInfo(
  document,
  name,
  diameter,
  star,
  distance,
  moons,
  imageUrl
) {
  // Here is the HTML formatting for our mission target div.
  document.querySelector("#missionTarget").innerHTML = `
                <h2>Mission Destination</h2>
                <ol>
                    <li>Name: ${name} </li>
                    <li>Diameter: ${diameter} </li>
                    <li>Star: ${star}</li>
                    <li>Distance from Earth: ${distance} </li>
                    <li>Number of Moons: ${moons} </li>
                </ol>
                <img src="${imageUrl}">
                `;
}

function validateInput(testInput) {
  if (testInput == "") {
    return "Empty";
  } else if (!isNaN(testInput)) {
    return "Is a Number";
  } else {
    return "Not a Number";
  }
}

function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {

   let launchReady = false;
   let cargoReady = false;
   let fuelReady = false;
   
   if (validateInput(pilot).trim() === "Empty" || validateInput(copilot).trim() === "Empty" || validateInput(fuelLevel).trim() === "Empty" || validateInput(cargoLevel).trim() === "Empty") {
      alert("All fields are required!");
      launchReady = false;
      return;
    }
     else if (validateInput(pilot).trim() ==="Is a Number" && validateInput(pilot).trim().length > 0) {
      alert("Invalid Input: No numbers can be used in pilot name field");
      launchReady = false;
      return;
  }
    
    else if (validateInput(copilot).trim() ==="Is a Number" && validateInput(copilot).trim().length > 0) {
   alert("Invalid Input: No numbers can be used in copilot name field");
      launchReady = false;
  }

    else if (validateInput(fuelLevel).trim() != "Is a Number") {
   alert("Invalid Input: only numbers can be used in fuel level input");
      launchReady = false;
    }

    else if (validateInput(cargoLevel).trim() != "Is a Number") {
      alert("Invalid Input: only numbers can be used for cargo mass");
      launchReady = false;
    }
    else {
      launchReady = true;
    }

    if (fuelLevel < 10000 && launchReady) {
      list.querySelector("#faultyItems").style.visibility = "visible";
      list.querySelector("#fuelStatus").innerText = `There is not enough fuel for the journey! We have ${fuelLevel}L loaded and at least 10,000L are needed!`
      list.querySelector("#launchStatus").innerText = 'Shuttle not ready for launch!';
      list.querySelector("#launchStatus").style.color= "red";
      list.querySelector("#pilotStatus").innerText = `Pilot ${pilot} is ready for launch`;
      list.querySelector("#copilotStatus").innerText = `Co-pilot ${copilot} is ready for launch`;
      fuelReady = false;
   } else {
      fuelReady = true;
   }
   if (cargoLevel > 10000 && launchReady) {
      list.querySelector("#faultyItems").style.visibility = "visible";
      list.querySelector("#cargoStatus").innerText = `There is too much mass for the shuttle to take off! Max load is 10,000kg and we have ${cargoMass}kg!`
      list.querySelector("#launchStatus").innerText = 'Shuttle not ready for launch!';
      list.querySelector("#launchStatus").style.color= "red";
      list.querySelector("#pilotStatus").innerText = `Pilot ${pilot} is ready for launch`;
      list.querySelector("#copilotStatus").innerText = `Co-pilot ${copilot} is ready for launch`;
      cargoReady = false;

   } else {
      cargoReady = true;
   }

   if (launchReady && fuelReady && cargoReady) {
      list.querySelector("#faultyItems").style.visibility = "visible";
      list.querySelector("#pilotStatus").innerText = `Pilot ${pilot} is ready for launch`;
      list.querySelector("#copilotStatus").innerText = `Co-pilot ${copilot} is ready for launch`;
      list.querySelector("#launchStatus").innerText = 'Shuttle is ready for launch!';
      list.querySelector("#launchStatus").style.color= "green";
   }
   
}

async function myFetch() {
  let planetsReturned;
  planetsReturned = await fetch("https://handlers.education.launchcode.org/static/planets.json").then((response) => response.json());
  return planetsReturned;
}

function pickPlanet(planets) {
  let randomPlanet = Math.floor(Math.random() * planets.length);
  return planets[randomPlanet];
}

module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet;
module.exports.myFetch = myFetch;
module.exports.formSubmission = formSubmission;