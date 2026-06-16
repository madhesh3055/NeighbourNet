const darkMode =
document.getElementById("darkMode");

darkMode.addEventListener(
"change",
function(){

if(this.checked)
{
document.body.style.background =
"#111827";

document.body.style.color =
"white";
}
else
{
document.body.style.background =
"#f5f7ff";

document.body.style.color =
"black";
}

}
);

function logout()
{
alert("Logged Out Successfully");

window.location.href =
"login.html";
}