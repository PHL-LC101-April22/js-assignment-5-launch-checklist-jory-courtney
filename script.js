window.addEventListener("load", function () {
   let listedPlanets;
   // Set listedPlanetsResponse equal to the value returned by calling myFetch()
   let listedPlanetsResponse = myFetch();
   listedPlanetsResponse.then(function (result) {
       listedPlanets = result;
     }).then(function () {
       let pickedPlanet = pickPlanet(listedPlanets);
       addDestinationInfo(
         document,
         pickedPlanet.name,
         pickedPlanet.diameter,
         pickedPlanet.star,
         pickedPlanet.distance,
         pickedPlanet.moons,
         pickedPlanet.image
       );
       // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.
     });
 
   form = document.querySelector("[data-testid=testForm");
   form.addEventListener("submit", function (event) {
   event.preventDefault();
     let list = document.querySelector("#launchStatusCheck");
     let pilot = document.querySelector("input[name=pilotName]").value;
     let copilot = document.querySelector("input[name=copilotName]").value;
     let fuelLevel = document.querySelector("input[name=fuelLevel]").value;
     let cargoMass = document.querySelector("input[name=cargoMass]").value;
     
     formSubmission(document, list, pilot, copilot, fuelLevel, cargoMass);
     
   });
 });
  
   
  
  