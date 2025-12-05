console.log("Javascript kører");

document.addEventListener(
  "DOMContentLoaded",
  initApp
); /*når dom er loadet, må den fyrre funktionen initApp af*/

function initApp() {
  displayAnmeldelser(anmeldelser);
  console.log("Hjemmesiden er loadet");
} /*Funktionen her fyrrer displayAnmeldelser af, altså de bliver vist i DOM */

/*--------Navbaren så den skifter farve ved scroll (vi gør sådan at den bliver tilføjet en classe hvis den er blevet scrollet. og den kan vi så style inde i css med farve og transition)------------*/
window.addEventListener("scroll", function () {
  /* vi siger at vinduet på websiden skal lytte efter et event (som er scroll) før den må fyrre funktionen af */
  const navbar =
    document.querySelector(".navbar"); /* Samler navbar i en variable */

  if (window.scrollY > 500) {
    navbar.classList.add("scroll");
  } else {
    navbar.classList.remove("scroll");
  }
  console.log("Navbarens farver skifter med scroll");
}); /*Den siger at hvis windet er scroller mere end 500 px ned, så skal navbaren til føjes class'en scroll. og ellers skal class'en fjernes (hvis der ikke er scrollet mere end 500) */

/*-------CTA knap til købssiden--------*/

function købNuKnap() {
  window.location.href = "buy.html";
  console.log("Køb nu knap klikket");
}

/*-------knap til kurv--------*/
document.querySelector("#kurvIkon").addEventListener("click", function () {
  window.location.href = "cart.html";
});

document.querySelector(".logo").addEventListener("click", function () {
  window.location.href = "index.html";
});

/*-------burgermenu--------*/

/*med denne kan vi åbne burgermenuen */
const burgermenuIkon =
  document.querySelector(
    ".burgermenuIkon"
  ); /*Samler burgermenu i en variable */
const burgermenuÅben =
  document.querySelector(".burgermenuÅben"); /*Samler åben i en variable */

burgermenuIkon.addEventListener("click", function () {
  /*burgermenuIkon skal så lyttet efter et evemt (et klik) før funktionen som skydes af */
  burgermenuÅben.classList.toggle(
    "åben"
  ); /*Funktionen der fyrres af siger at på et klik på burgermenuIkon så skal burgermenuÅben tilføjes class'en åben (Toggle)*/
  console.log("Burgermenuen er nu åben");
});

/*med denne kan vi lukke burgermenuen */
const krydsIkon =
  document.querySelector(".krydsIkon"); /*Samler krydsIkon i en variable */

krydsIkon.addEventListener("click", function () {
  /*krydsIkon skal så lyttet efter et evemt (et klik) før funktionen som skydes af */
  burgermenuÅben.classList.remove(
    "åben"
  ); /* Den funktion der skydes af siger at burgermenuÅben skal fjernes class'en åben (så den håbber tilbage til sin oprindelige tilstand/position (som er sat til right:-250px)) aka den lukkes */
  console.log("Burgermenu lukket");
});

/*------------Farvevalg sektion------------  */
/*----Array med de fire farver højtaleren fås i */
const farver = ["moonlightWhite", "popPink", "lavenderViolet", "sageGreen"];

/*Her bruger jeg dom-manipulation til at tilføje farverne til siden */
farver.forEach((farve) => {
  document.querySelector(
    ".farver"
  ).innerHTML += `<button class="dots ${farve}" value="${farve}"></button>`;
  console.log("De fire farver er tilføjet");
});

/*------------Farve skifter------------  */
/* Her kommer der en funktion som gør at man kan klikke på farve knapperne og så skifte billedet til den matchende farve */
const dots =
  document.querySelectorAll(
    ".dots"
  ); /*søger efter alle elementer i html'en der har class'en dots (der er fire dots) */
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
  console.log("Farver kan nu skiftes");
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
        .nextElementSibling; /*den finder det næste element efter (lillesøsteren), som i dette tilfælde er svar, og gemmer det i en variable svar*/
    if (svar.style.maxHeight) {
      /*Den tjekker om maxHeight har en værdi, den bruger altså højden til at bedømme om svar er åbent eller lukket*/
      svar.style.maxHeight = null;
    } /*Så hvis svar maxHeight har en værdi (som ikke er den omringelige værdi på 0px, ved den at svar er åbent), så sættes højden sættes til null (sættes tilbage til at have en maxHeight på 0), så lukkes den (går fra at være åben til lukket)*/ else {
      svar.style.maxHeight = svar.scrollHeight + "px";
    } /*ellers hvis svar ikke har en værdi, er den lukket og skal åbnes, det sker ved at sætte maxHeight til scrollHeight (den fulde højde af indholdet i svar)*/
    console.log("Accordion knap klikket");
  });
  console.log("Accordion virker og kan foldes ud og ind");
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
        <br>
        <p class="anmeldelseTekst">"${anmeldelseObject.tekst}"</p>
        <br>
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
