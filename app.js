let imageElement = document.querySelector(".slide");

setInterval(() => {
  let src = imageElement.getAttribute("src");
  if (src === "./img/OFFbulb.png") {
    imageElement.setAttribute("src", "./img/ONbulb.png");
    imageElement.style.width = "30%";
    imageElement.style.marginLeft = "33%";
    document.body.style.backgroundColor = "aqua";
  }
  if (src === "./img/ONbulb.png") {
    imageElement.setAttribute("src", "./img/OFFbulb.png");
    document.body.style.backgroundColor = "black";
  }
}, 1000);

console.log();
