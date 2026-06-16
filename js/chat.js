function sendMessage()
{
let input =
document.getElementById(
"messageInput"
);

let message =
input.value.trim();

if(message === "")
{
return;
}

let chatBody =
document.getElementById(
"chatBody"
);

let newMessage =
document.createElement("div");

newMessage.classList.add(
"message",
"sent"
);

newMessage.innerText =
message;

chatBody.appendChild(
newMessage
);

input.value = "";

chatBody.scrollTop =
chatBody.scrollHeight;
}