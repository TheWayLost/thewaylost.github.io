function toggleBibtex(elementId) {
  var bibtexElement = document.getElementById(elementId);
  if (bibtexElement.style.display === "none" || bibtexElement.style.display === "") {
    bibtexElement.style.display = "block";
  } else {
    bibtexElement.style.display = "none";
  }
}