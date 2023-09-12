let basicElement = document.getElementById("basic");
let shopifyElement = document.getElementById("shopify");
let advancedElement = document.getElementById("advanced");

basicElement.style.display = "block";
shopifyElement.style.display = "none";
advancedElement.style.display = "none";


function basicOn(){
    basicElement.style.display = "block";
    shopifyElement.style.display = "none";
    advancedElement.style.display = "none";
}

function advancedOn(){
    basicElement.style.display = "none";
    shopifyElement.style.display = "none";
    advancedElement.style.display = "block";
}

function shopifyOn(){
    basicElement.style.display = "none";
    advancedElement.style.display = "none";
    shopifyElement.style.display = "block";
}