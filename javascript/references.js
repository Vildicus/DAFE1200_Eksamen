
/* From https://www.w3schools.com/howto/tryit.asp?filename=tryhow_css_modal */
// Get the modal

var modal = document.getElementById("myModal");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];
var titleParagraph = document.getElementById("js-reference-title");
var authorParagraph = document.getElementById("js-reference-author");
var linkAnchor = document.getElementById("js-reference-link");
var readParagraph = document.getElementById("js-reference-read");

var references = [{
  title: "[1] Urban Transport Challenges",
  author: "Dr. Jean-Paul Rodrigue",
  linkText: "The Geography of Transport",
  link: "https://transportgeography.org/?page_id=4621",
  read: "27.10.2020"
  
},
{
  title: "[2] Mindre husholdninger over hele landet",
  author: "Statistisk Sentralbyrå",
  linkText: "Statistisk Sentralbyrå",
  link: "https://www.ssb.no/fobhushold/",
  read: "27.10.2020"
},
{
  title: "[3] Trafikantenes feil fører til dødsulykker",
  author: "Author: Miriam Kvanvik ",
  linkText: "Trygg Trafikk",
  link: "https://www.tryggtrafikk.no/nyheter/trafikantenes-feil-forer-til-dodsulykker/",
  read: "27.10.2020"
},

{
  title: "[4] Hva påvirker utslipp til luft fra veitrafikk?",
  author: "Author: Nadiya Fedoryshyn",
  linkText: "Statistisk Sentralbyrå ",
  link: "https://www.ssb.no/natur-og-miljo/artikler-og-publikasjoner/hva-pavirker-utslipp-til-luft-fra-veitrafikk",
  read: "27.10.2020"
},

{
  title: "[5] Gjennomsnittsbilen brukes bare 3,2 prosent av tiden ",
  author: "Frank Williksen ",
  linkText: "TV2.no ",
  link: "https://www.tv2.no/a/10548724/",
  read: "27.10.2020"
},

{
  title: "[6] ABI Research Forecasts 8 Million Vehicles to Ship with SAE Level 3, 4 and 5 Autonomous Technology in 2025 ",
  author: "ABI research",
  linkText: "ABI research",
  link: "https://www.abiresearch.com/press/abi-research-forecasts-8-million-vehicles-ship-sae-level-3-4-and-5-autonomous-technology-2025/",
  read: "27.10.2020"
},

{
  title: "[7] Fully automated vehicles: A cost of ownership analysis to inform early adoption",
  author: "Zia Wadud",
  linkText: "Link to Article",
  link: "https://www.researchgate.net/publication/316644594_Fully_automated_vehicles_A_cost_of_ownership_analysis_to_inform_early_adoption",
  read: "27.10.2020"
},

];



// When the user clicks the button, open the modal 
function clickReference(referenceNumber) {
  var refData = references[referenceNumber-1];
  titleParagraph.innerText = refData.title;
  authorParagraph.innerText = "Author: " + refData.author;
  linkAnchor.innerText = refData.linkText;
  linkAnchor.href = refData.link;
  readParagraph.innerText = "Read: " + refData.read;
  modal.style.display = "block";
  return false;
}

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
