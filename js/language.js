function selectLanguage()
{
    let language =
    document.getElementById("language").value;

    localStorage.setItem(
    "language",
    language
    );

    window.location.href =
    "login.html";
}