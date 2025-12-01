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
