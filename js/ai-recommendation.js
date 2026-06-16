function findProfessional()
{
let query =
document.getElementById(
"userQuery"
).value.toLowerCase();

let result =
document.getElementById(
"result"
);

if(query.includes("teacher")
|| query.includes("tutor"))
{
result.innerHTML = `
<div class="result-card">
<h3>📚 Priya Sharma</h3>
<p>Profession: Teacher</p>
<p>Flat: B-204</p>
<p>Phone: 9876543210</p>
</div>
`;
}
else if(
query.includes("doctor")
)
{
result.innerHTML = `
<div class="result-card">
<h3>👨‍⚕️ Dr. Ravi Kumar</h3>
<p>Profession: Doctor</p>
<p>Flat: C-105</p>
<p>Phone: 9876543211</p>
</div>
`;
}
else if(
query.includes("electrician")
)
{
result.innerHTML = `
<div class="result-card">
<h3>🔌 Karthik</h3>
<p>Profession: Electrician</p>
<p>Flat: A-302</p>
<p>Phone: 9876543212</p>
</div>
`;
}
else
{
result.innerHTML = `
<div class="result-card">
<p>
No matching professional found.
</p>
</div>
`;
}
}