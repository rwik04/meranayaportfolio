document.querySelector("#about").addEventListener("click", scroolltoAbout);

function scroolltoAbout(event){
  event.preventDefault();

  document.querySelector(".about").scrollIntoView({
    behavior: "smooth" // Scroll smoothly
  });
}

document.querySelector("#myskills").addEventListener("click",scrolltoMySkills);

function scrolltoMySkills(event){
  event.preventDefault();

  document.querySelector(".myskills").scrollIntoView({
    behaviour: "smooth"
  });

}

document.querySelector("#myprojects").addEventListener("click",alertfunc);

function alertfunc(){
  alert('COMING SOON');
}

document.querySelector('.contact').addEventListener("click",scrolltoContact);

function scrolltoContact(event){
  event.preventDefault();

  document.querySelector(".row.footer").scrollIntoView({
    behavior: "smooth"
  });
}





