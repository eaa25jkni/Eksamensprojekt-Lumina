console.log("Javascript kører");

document.addEventListener("DOMContentLoaded", initApp);

function initApp() {
  displayAnmeldelser(anmeldelser);
  console.log("Hjemmesiden er loadet");
}

/*-------CTA knap til købssiden--------*/

function købNuKnap() {
  window.location.href = "buy.html";
}

/*-------knap til kurv--------*/
document.querySelector("#kurvIkon").addEventListener("click", function () {
  window.location.href = "cart.html";
});

/*-------burgermenu--------*/

/*med denne kan vi åbne burgermenuen */
const burgermenuIkon = document.querySelector(".burgermenuIkon");
const burgermenuÅben = document.querySelector(".burgermenuÅben");

burgermenuIkon.addEventListener("click", function () {
  burgermenuÅben.classList.toggle("åben");
});

/*med denne kan vi lukke burgermenuen */
const krydsIkon = document.querySelector(".krydsIkon");

krydsIkon.addEventListener("click", function () {
  burgermenuÅben.classList.remove("åben");
});

/*----Array med de fire farver højtaleren fås i */
const farver = ["moonlightWhite", "popPink", "lavenderViolet", "sageGreen"];

/*Her bruger jeg dom-manipulation til at tilføje farverne til siden */
farver.forEach((farve) => {
  document.querySelector(
    ".farver"
  ).innerHTML += `<button class="dots ${farve}" value="${farve}"></button>`;
});

/*------------Farve skifter------------  */
/* Her kommer der en funktion som gør at man kan klikke på farve knapperne og så skifte billedet til den matchende farve */
const dots =
  document.querySelectorAll(
    ".dots"
  ); /*søger efter alle elementer i html'en der har class'en dots */
const højtalerFarve =
  document.querySelector(
    ".højtalerFarve img"
  ); /*Denne søger efter alle img med class'en højtalerFarve*/

dots.forEach((dot) => {
  /*Loop - Dots er i en liste af elementer, så denne vi laver et loop som kører igennem alle elementer med class'en dots */
  dot.addEventListener("click", () => {
    /*vi tilføjer så en event listener til hvert dot element, som så skal lytte efter et klik, før funktionen skal udføres*/
    const value =
      dot.getAttribute(
        "value"
      ); /*Med denne sætning henter vi the value fra den klikkede dot, f.eks hvor vi klikker på dotten med valuen popPink, vil der nu inde i ("value") stå ("popPink") */
    højtalerFarve.src =
      "img/" +
      value +
      ".png"; /*Med denne linje skifter vi billedet. Den virker således at den tager stien, hvor den går ned i mappen "/img " og så finder den så det billede der matcher med den value der står inde i ("value") +.png. billederne den søger efter er navngivet valuen, så hvis vi siger vi har ("popPink"), finder browseren billedet "popPink" +.png og det sættes ind på pladsen i højtalerFarve */
  });
});

/*--------------Accordion--------------*/
const accordionKnapper =
  document.querySelectorAll(
    ".accordion"
  ); /*Den finder alle elementer med class'en accordion og samler alle elementer i en variable */

accordionKnapper.forEach((knap) => {
  knap.addEventListener("click", function () {
    this.classList.toggle(
      "active"
    ); /*Loop- den kører i gennem listen (som er blevet lavet med const accordionKnapper) med alle knapperne og for hver knap den finder, tildeler den hver knap en eventlistener. Hvor den skal lytte efter et klik før at funktionen udføres. Funktionen der udføres siger at når knappen klikkes på, så tilføjes class'en active til knappen*/

    let svar =
      this
        .nextElementSibling; /*den finder det næste element efter (lillesøsteren), som i dette tilfælde er svaret der skal vises*/
    if (svar.style.maxHeight) {
      /*Den tjekker om maxHeight har en værdi */
      svar.style.maxHeight = null;
    } /*Så hvis svar maxHeight har en værdi, så sættes højden sættes til null (går fra at være åben til lukket)*/ else {
      svar.style.maxHeight = svar.scrollHeight + "px";
    } /*ellers skal den åbnes, ved at sætte maxHeight til scrollHeight (den fulde højde af elementet svar)*/
  });
});

/*Hvis maxHeight har en værdi */

/*------------Anmeldelser sektion------------*/
/*------------Array med objekter (anmeldelse)---------*/
const anmeldelser = [
  /*et objekt hedder anmeldelse */
  {
    id: "1",
    img: "img/anmeldelse1.svg",
    titel: "Lyden fylder <br> hele rummet",
    tekst: "Lige meget hvor du er, er lyden lige god",
    rating: "img/rating45.svg",
    navn: "Simone A.",
    ikon: "img/infoIkon.svg",
  },
  {
    id: "2",
    img: "img/anmeldelse2.svg",
    titel: "#MinEgen",
    tekst: "Med den udskiftelig bund kan jeg få det, lige som jeg vil have det",
    rating: "img/rating4.svg",
    navn: "Mille N.",
  },
  {
    id: "3",
    img: "img/anmeldelse3.svg",
    titel: "Ikke bange for <br> lidt snavs",
    tekst: "En holdbar højttaler, man nemt kan tage med overalt",
    rating: "img/rating5.svg",
    navn: "Sarah J.",
  },
  {
    id: "4",
    img: "img/anmeldelse4.svg",
    titel: "#Holder hele dagen",
    tekst: "Mega lang batteritid",
    rating: "img/rating5.svg",
    navn: "Mette H.",
  },
  {
    id: "5",
    img: "img/anmeldelse5.svg",
    titel: "#Elsker",
    tekst: "Så nem at flytte på, så jeg har den med alle steder",
    rating: "img/rating45.svg",
    navn: "Nanna J.",
  },
  {
    id: "6",
    img: "img/anmeldelse6.svg",
    titel: "#Funktionel",
    tekst: "Elsker den lysende bund. Perfekt når mørket falder på",
    rating: "img/rating4.svg",
    navn: "Sofie L.",
  },
  {
    id: "7",
    img: "img/anmeldelse7.svg",
    titel: "#Med alle steder",
    tekst: "En fast del af selvskabet",
    rating: "img/rating5.svg",
    navn: "Zenia F.",
  },
  {
    id: "8",
    img: "img/anmeldelse8.svg",
    titel: "#Stilfuld",
    tekst: "En del af indretningen",
    rating: "img/rating4.svg",
    navn: "Emma E.",
  },
  {
    id: "9",
    img: "img/anmeldelse9.svg",
    titel: "#UtroligLyd",
    tekst: "Lyd der får der til at falde hen i en anden verden",
    rating: "img/rating4.svg",
    navn: "Dicte B.",
  },
];

/*-------funktion der gør sådan den javascript selv automatisk sætter html ind -----*/

const anmeldelseContainer = document.querySelector(
  "#anmeldelseContainer"
); /*med denne sætning finder det element med id'et anmeldelseContainer og laver det til en variable*/

function displayAnmeldelse(anmeldelseObject) {
  /* vi laver en funktion der tager et enkelt anmeldelse objekt ind (anmeldelseObjekt er et parameter, hvilket bare betyder at det er en pladsholder for de værdier der kommer ind i funktionen)*/
  const anmeldelseHTML = `
    <article class="anmeldelseKort">
      <img src="${anmeldelseObject.img}" 
           alt="Billede af ${anmeldelseObject.navn}" 
           class="anmeldelseBillede" />
        
      <div class="anmeldelseInfo">
        <h3 class="anmeldelseTitel">${anmeldelseObject.titel}</h3>
        <img class="anmeldelseRating" src="${anmeldelseObject.rating}" alt="Rating af ${anmeldelseObject.navn}">
        <p class="anmeldelseTekst">"${anmeldelseObject.tekst}"</p>
        <p class="anmeldelseNavn">- ${anmeldelseObject.navn}</p>

      </div>
    </article>
  `; /*Her har vi så lavet en variable const anmeldelseHTML (det svarer til den html som vi senere gerne vil have sprøjet ind i html'en), hvor vi har lavet en template string (backticks`´), hvilket gør at jeg kan kan skrive det hele i et uden jeg skal lave alle mulige + tegn, sp kan jeg gøre det hele i et */

  anmeldelseContainer.insertAdjacentHTML(
    "beforeend",
    anmeldelseHTML
  ); /* den sætning siger at i vores variable anmeldelseContainer (som vi har defineret til #anmeldelseContainer) der vil vi gerne insert (insertAdjacentHTML(position, htmlString)), så vi siger, at vi gerne vil indsætte vores variable const anmeldelseHTML inde i anmeldelseContainer, lige før den slutter (beforeEnd) */
}

/* -------Funktion der viser alle anmeldelser---------*/
function displayAnmeldelser(anmeldelseArray) {
  /*Vi laver en funktion der tager et array (listen) af anmeldelser som parameter */
  anmeldelseContainer.innerHTML =
    ""; /* først sætter vi anmeldelseContainer's innerHTML til tom, så der ikke kommer dubletter når funktionen kaldes flere gange */
  for (const anmeldelse of anmeldelseArray) {
    displayAnmeldelse(anmeldelse);
  } /* Loop- Denne sætning siger at for hver anmeldelse (objekt) i anmeldelseArray'et, så skal funktionen displayAnmeldelse(anmeldelse) kaldes, og dermed sprøjtes html for alle objekter (anmeldelse) fra vores array (anmeldelser) ind i anmeldelseContainer */

  console.log("Juuhuu Anmeldelser vist");
}
