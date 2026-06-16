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
"profileName"
).innerText =
user.name;

document.getElementById(
"profileFlat"
).innerText =
"Flat No : " +
user.flat;

document.getElementById(
"profileProfession"
).innerText =
user.profession;
}
};

function chatUser()
{
window.location.href =
"chat.html";
}

function callUser()
{
alert(
"Calling User..."
);
}


function logout()
{
localStorage.clear();

alert(
"Logged Out Successfully"
);

window.location.href =
"login.html";
}