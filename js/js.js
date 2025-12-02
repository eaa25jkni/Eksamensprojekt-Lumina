console.log("Javascript kører");

document.querySelector(".CTAknap").addEventListener("click", function () {
  window.location.href = "buy.html";
});

/*------------Farve skifter------------ */
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
    this.classList.toggle("active");
    const svar =
      this
        .nextElementSibling; /*den finder det næste element efter knappen, som i dette tilfælde er svaret der skal vises*/
    if (svar.style.maxHeight) {
      svar.style.maxHeight = null;
    } /*Den siger at hvis svar maxHeight er sat, så skal den lukkes (højden sættes til null)*/ else {
      svar.style.maxHeight = svar.scrollHeight + "px";
    } /*ellers skal den åbnes, ved at sætte maxHeight til scrollHeight (den fulde højde af elementet)*/
  });
});

/*Loop- den kører i gennem listen med alle knapperne og for hver knap den tildeler hver knap en eventlistener. Hvor den skal lytte efter et klik før at funktionen udføres. Funktionen der udføres siger at når knappen klikkes på, så tilføjes class'en active til knappen*/
