window.onload = function()
{
let user =
JSON.parse(
localStorage.getItem(
"registeredUser"
)
);

if(user)
{
document.getElementById(
"userName"
).innerText =
"Hello, " +
user.name +
" 👋";

document.getElementById(
"userFlat"
).innerText =
user.flat;
}
};

function askAI()
{
alert(
"AI Feature Coming Soon 🚀"
);
}