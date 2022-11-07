//Objekt fÖr att hantera ajax
var omdbAPI = new XMLHttpRequest();
var apikey = "ae7ebb55"
var omdbURL = "http://www.omdbapi.com/?apikey=ae7ebb55&s=sunes"

//vad vi gör när vi får svar
omdbAPI.addEventlistener("load" function() {
    //konvertera från Json
    var resultat = JSON.parse(this.responseText);
    //Skriver ut resultat
    console.log(resultat);


});

omdbAPI.open("get",omdnURL,true)
omdbAPI.send();