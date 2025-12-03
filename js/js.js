console.log("Javascript kører");

document.addEventListener("DOMContentLoaded", initApp);

function initApp() {
  displayAnmeldelser(anmeldelser);
  console.log("Hjemmesiden er loadet");

  /*-------CTA knap til købssiden--------*/
  document.querySelector(".CTAknap").addEventListener("click", function () {
    window.location.href = "buy.html";
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
      ); /*Loop- den kører i gennem listen med alle knapperne og for hver knap den tildeler hver knap en eventlistener. Hvor den skal lytte efter et klik før at funktionen udføres. Funktionen der udføres siger at når knappen klikkes på, så tilføjes class'en active til knappen*/

      let svar =
        this
          .nextElementSibling; /*den finder det næste element efter knappen, som i dette tilfælde er svaret der skal vises*/
      if (svar.style.maxHeight) {
        svar.style.maxHeight = null;
      } /*Den siger at hvis svar maxHeight er sat, så skal den lukkes (højden sættes til null)*/ else {
        svar.style.maxHeight = svar.scrollHeight + "px";
      } /*ellers skal den åbnes, ved at sætte maxHeight til scrollHeight (den fulde højde af elementet)*/
    });
  });
}

/*Array med objekter */
const anmeldelser = [
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
    titel: "#Funktionel",
    tekst: "Elsker den lysende bund. Perfekt når mørket falder på",
    rating: "img/rating4.svg",
    navn: "Sofie L.",
  },
];

/*virker men ikke optimal */
/*anmeldelser.forEach((anmeldelse) => {
  document.querySelector(
    "#anmeldelseContainer"
  ).innerHTML += `<article class="anmeldelseKort"><h2>${anmeldelse.navn}</h2></article>`;
});
*/
/*function displayAnmeldelser(anmeldelserArray) {anmeldelseContainer.innterHTML = ""; /*Rydder containeren først, det gør man fordi ... */
/*  for (const anmeldelse of anmeldelserArray) {display}*/

/*const anmeldelseContainer = document.querySelector("#anmeldelseContainer");

function displayAnmeldelser(anmeldelseObject) {
  anmeldelseContainer.innerHTML =
    ""; /*Rydder containeren først, det gør man fordi ... */
/*for (const anmeldelse of anmeldelseObject) {
    anmeldelseContainer.innerHTML += `<article class="anmeldelseKort"><h2>${anmeldelse.navn}</h2></article>`;
  }
}
*/

const anmeldelseContainer = document.querySelector("#anmeldelseContainer");

function displayAnmeldelse(anmeldelseObject) {
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
  `;

  anmeldelseContainer.insertAdjacentHTML("beforeend", anmeldelseHTML);
}

function displayAnmeldelser(anmeldelseArray) {
  anmeldelseContainer.innerHTML = "";
  for (const anmeldelse of anmeldelseArray) {
    displayAnmeldelse(anmeldelse);
  }
  console.log("Anmeldelser vist");
}
