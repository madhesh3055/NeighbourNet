function submitRequest()
{
let title =
document.getElementById("title").value;

let category =
document.getElementById("category").value;

let description =
document.getElementById("description").value;

if(title === "" || description === "")
{
alert("Please Fill All Fields");
return;
}

let requestList =
document.getElementById("requestList");

let card =
document.createElement("div");

card.classList.add("request-card");

card.innerHTML = `
<h3>${title}</h3>
<p><b>Category:</b> ${category}</p>
<p>${description}</p>
`;

requestList.appendChild(card);

document.getElementById("title").value = "";
document.getElementById("description").value = "";

alert("Request Submitted Successfully ✅");
}