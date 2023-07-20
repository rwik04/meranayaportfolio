document.querySelector("#about").addEventListener("click", myFunction);

function myFunction(event){
  event.preventDefault();

  document.querySelector(".about").scrollIntoView({
    behavior: "smooth" // Scroll smoothly
  });
}

