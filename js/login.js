function registerUser()
{
let name =
document.getElementById("name").value;

let flat =
document.getElementById("flat").value;

let profession =
document.getElementById("profession").value;

let mobile =
document.getElementById("mobile").value;

if(
name === "" ||
flat === "" ||
profession === "" ||
mobile === ""
)
{
alert("Please Fill All Fields");
return;
}

let user = {
name,
flat,
profession,
mobile
};

localStorage.setItem(
"registeredUser",
JSON.stringify(user)
);

alert(
"Registration Successful ✅"
);

window.location.href =
"login.html";
}
function sendOTP()
{
let mobile =
document.querySelector(
"input[type='tel']"
).value;

let user =
JSON.parse(
localStorage.getItem(
"registeredUser"
)
);

if(!user)
{
alert(
"Please Register First"
);

window.location.href =
"signup.html";

return;
}

if(user.mobile !== mobile)
{
alert(
"Mobile Number Not Registered"
);

return;
}

alert(
"OTP Sent Successfully"
);

window.location.href =
"otp.html";
}