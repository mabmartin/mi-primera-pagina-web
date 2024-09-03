
document.getElementById("card-form").addEventListener("submit", function (event){
event.preventDefault();
// traer valores del formulario
 const title = document.getElementById("card-title").value ;
const description = document.getElementById("card-description").value;
const imageUrl = document.getElementById("card-image").value || "https://picsum.photos/200";
const bgColor = document.getElementById("card-bg-color").value;
const borderColor= document.getElementById("card-border-color").value;
const ganancia = document.getElementById("card-description").value * 1.16;
console.log({
    title: title,
    description: description,
    imageUrl: imageUrl,
    bgColor: bgColor,
    borderColor: borderColor,
});

const cardContainer = document.getElementById("cards-container");
const newCard = document.createElement("div");
newCard.className = "card";
newCard.style.backgroundColor = bgColor;
newCard.style.borderColor = borderColor;


newCard.innerHTML = `
   <img src="${imageUrl}" alt="card image" >
   <div class="card-content" >
       <p>Tipo de Inversor: <strong>${title}</strong></p>
       <p>Cantidad de dinero a invertir:
       <strong>${description} u$d</strong></p>
       <p> GANANCIA MENSUAL:</p>
       <p> ${ganancia}u$d</p>
    
   </div>        
`;

cardContainer.appendChild(newCard);

document.getElementById("card-form").reset();


})

const texto = document.getElementById('miTexto');
texto.addEventListener('mouseover', () => {
    texto.style.color = 'violet';
    texto.style.fontSize = "40px";
});
texto.addEventListener('mouseout', () => {
    texto.style.color = 'black';
    texto.style.fontSize = "";
});      
const miSpan = document.getElementById('miSpan');

// Añade un manejador de eventos para el clic
miSpan.addEventListener('click', function() {
    // Cambia el color del texto cuando se hace clic
    this.style.color = 'red';
});