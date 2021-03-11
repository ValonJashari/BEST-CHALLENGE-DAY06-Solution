var carsJson = JSON.parse(cars);

// console.log(carsJson);

for (let i = 0; i < carsJson.length; i++) {

    // create card-div
    var cardContainer = document.createElement("div");
    cardContainer.setAttribute("id", "cardContainer" + [i]);
    document.getElementById("container").appendChild(cardContainer);

    // create cardMini-div
    var cardMini = document.createElement("div");
    cardMini.setAttribute("id", "cardMini" + [i]);
    document.getElementById("cardContainer" + [i]).appendChild(cardMini);

    // create <img> Mini
    var imgMini = document.createElement("img");
    imgMini.setAttribute("src", carsJson[i].image);
    document.getElementById("cardMini" + [i]).appendChild(imgMini);

    // create <p> imgage text
    var imgMiniText = document.createElement("p");
    var imgMiniTextNode = document.createTextNode(carsJson[i].carBrand);
    imgMiniText.appendChild(imgMiniTextNode);
    document.getElementById("cardMini" + [i]).appendChild(imgMiniText);


    // create cardMaxi-div
    var cardMaxi = document.createElement("div");
    cardMaxi.setAttribute("id", "cardMaxi" + [i]);
    document.getElementById("cardContainer" + [i]).appendChild(cardMaxi);

    // create <img> Maxi
    var imgMaxi = document.createElement("img");
    imgMaxi.setAttribute("src", carsJson[i].image);
    document.getElementById("cardMaxi" + [i]).appendChild(imgMaxi);

     // create <div> text container
     var textContainer = document.createElement("p");
     textContainer.setAttribute("id", "textContainer" + [i]);
     document.getElementById("cardMaxi" + [i]).appendChild(textContainer);

    // create <p> title text
    var imgMaxiText = document.createElement("p");
    var imgMaxiTextNode = document.createTextNode(carsJson[i].carBrand);
    imgMaxiText.appendChild(imgMaxiTextNode);
    document.getElementById("textContainer" + [i]).appendChild(imgMaxiText);

    // create <p> detail text
    var imgMaxiDetailText = document.createElement("p");
    var imgMaxiDetailTextNode = document.createTextNode("Production Year: " + carsJson[i].productionYear);
    imgMaxiDetailText.appendChild(imgMaxiDetailTextNode);
    document.getElementById("textContainer" + [i]).appendChild(imgMaxiDetailText);

    // create <p> price text
    var imgMaxiPrice = document.createElement("p");
    var imgMaxiPriceNode = document.createTextNode("$" + carsJson[i].price);
    imgMaxiPrice.appendChild(imgMaxiPriceNode);
    document.getElementById("textContainer" + [i]).appendChild(imgMaxiPrice);

}

let cardMinis = document.querySelectorAll("[id*=cardMini]");
let cardMaxis = document.querySelectorAll("[id*=cardMaxi]");
let cardContainers = document.querySelectorAll("[id*=cardContainer]");

// console.log(cardMinis);

for (let i = 0; i < cardMinis.length; i++){
    cardMinis[i].addEventListener("click", function(){
        cardMaxis[i].style.display = "flex";
        cardContainers[i].setAttribute("style", "width: 100%;");
        cardMinis[i].style.display = "none";
    });

    cardMaxis[i].addEventListener("click", function(){
        cardMinis[i].style.display = "block";
        cardContainers[i].setAttribute("style", "width: auto;");
        cardMaxis[i].style.display = "none";

    });
}
