let selectedLanguage = "";

function selectLanguage(language){

selectedLanguage = language;

document.querySelectorAll(".card")
.forEach(card=>{
card.classList.remove("selected");
});

event.target.classList.add("selected");

}

function continueApp(){

if(selectedLanguage === "")
{
alert("Please Select Language");
return;
}

localStorage.setItem(
"language",
selectedLanguage
);

window.location.href="login.html";

}