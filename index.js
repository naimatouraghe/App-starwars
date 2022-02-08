/*timer*/
let hou = document.getElementById("hours");
let min = document.getElementById("minutes");
let sec = document.getElementById("seconds");
let button = document.getElementById("btn-home");
let card = document.getElementById("randomCard");
let firstName = document.getElementById("name");
let gender = document.getElementById("gender");
let model = document.getElementById("model");
let canPlay = false
let arrCard = []
function randomCard() {
    if (canPlay = false) {
        return
    }
    //On ne peut gagner une carte aléatoire que toutes les 2 heures.
    //1.Systeme random sur la data
    //1.1 Random sur l'id de l'objet
    var peopleId = Math.floor((Math.random() * 83) + 1);
    var planetId = Math.floor((Math.random() * 60) + 1);
    var speciesId = Math.floor((Math.random() * 37) + 1);
    var starshipId = Math.floor((Math.random() * 36) + 1);
    var vehiclesId = Math.floor((Math.random() * 39) + 1);

    //1.2 Random sur le categories
    var people = "https://swapi.dev/api/people/" + peopleId;
    var planets = "https://swapi.dev/api/planets/" + planetId;
    var species = "https://swapi.dev/api/species/" + speciesId;
    var starship = "https://swapi.dev/api/starships/" + starshipId;
    var vehicles = "https://swapi.dev/api/vehicles/" + vehiclesId;
    var urls = [people, planets, species, starship, vehicles];
    var randomURL = urls[Math.floor(Math.random() * urls.length)];
    console.log(randomURL)
    //1.3 
    //on recupere la data de l'API
    fetch(randomURL)
        .then(function (response) { return response.json(); })
        .then(function (data) {
            console.log(data);
            if (data.detail) {
                randomCard();
            }
            else {
                let result = document.getElementById("content");
                const now = Date.now() + 7200000;
                localStorage.setItem('timer', now)
                localStorage.setItem('card', data)


                clock()
                console.log(now);
                switch (true) {

                    case (randomURL.includes('people')):

                        result.innerHTML = `
                    <h1 class ="card-title text-center"> ${data.name}</h1>
                    `
                        break;
                    case (randomURL.includes('vehicles')):
                        //let result = document.getElementById("content");
                        result.innerHTML = `
                        <h1 class ="card-title text-center"> ${data.name}</h1>
                        `
                        break;
                    case (randomURL.includes('planets')):
                        //let result = document.getElementById("content");
                        result.innerHTML = `
                        <h1 class ="card-title text-center"> ${data.name}</h1>
                        `
                        break;
                    case (randomURL.includes('species')):
                        //let result = document.getElementById("content");
                        result.innerHTML = `
                        <h1 class ="card-title text-center"> ${data.name}</h1>
                        `
                        break;
                    case (randomURL.includes('starship')):
                        //let result = document.getElementById("content");
                        result.innerHTML = `
                        <h1 class ="card-title text-center"> ${data.name}</h1>
                        `
                    default:
                        console.log("Erreur")
                        break;
                }
            }
        });
}

//function saveCard() {
//    let Jsn = JSON.stringify()
//}
/************************************* CLOCK ********************/
// Set the date we're counting down to
function clock() {

    setInterval(function () {
        let now2h = parseInt(localStorage.getItem('timer'));
        diff = (now2h - Date.now()) / 1000
        console.log("diff:", diff);
        //calculs de temps
        hours = parseInt(diff / 3600, 10);
        minutes = (parseInt(diff / 60, 10)) % 60;
        seconds = parseInt(diff % 60, 10);


        hou.textContent = hours;

        min.textContent = minutes;

        sec.innerText = seconds;

        if (diff < 0) {
            console.log('fini');
            canPlay = true;

            if (canPlay === true) {
                button.addEventListener('click', randomCard);
                canPlay = false
                //arrCard = [JSON.parse(localStorage.getItem("card", arrCard))]
                //arrCard2 = localStorage.setItem('cards', JSON.stringify(data));
                //console.log("1:", arrCard);
                //console.log("2:", arrCard2);
            }
        }
        diff;


    }, 1000);

}
//randomCard()
clock();
