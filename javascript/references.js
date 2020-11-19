
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
