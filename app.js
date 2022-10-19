const URL = "https://www.thecocktaildb.com/api/json/v1/1/random.php";
const cardsdiv = document.getElementById("cards-div");

const search = document.getElementById("inpText");

search.addEventListener("click",getApi);

function getApi() {
    for (let index = 0; index < 12; index++) {
    fetch(URL)
    .then(response => response.json())
    .then(data => data["drinks"].map(results => {

    
    const card = document.createElement("div-card")
    const img = document.createElement("img");
    img.src = results["strDrinkThumb"];
    img.classList.add("strDrinkThumb");

    const name = document.createElement("p");
    name.textContent = results["strDrink"];
    name.classList.add("strDrink");

    const alcohol = document.createElement("p");
    alcohol.textContent = results["strAlcoholic"];
    alcohol.classList.add("strAlcoholic");

    cardsdiv.appendChild(card);
    
    card.appendChild(img);
    card.appendChild(name);
    card.appendChild(alcohol);

    }))
        
    }
}