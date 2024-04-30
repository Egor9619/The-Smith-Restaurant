var hiddenElement = document.getElementById("footer-contact");
var btn = document.getElementById("id-contact-scroll");

function handleButtonClick() {
  hiddenElement.scrollIntoView({ block: "center", behavior: "smooth" });
}

btn.addEventListener("click", handleButtonClick);