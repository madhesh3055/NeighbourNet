function sendOTP()
{
    let mobile =
    document.querySelector("input").value;

    if(mobile === "")
    {
        alert("Please Enter Mobile Number");
        return;
    }

    if(mobile.length !== 10)
    {
        alert("Enter Valid Mobile Number");
        return;
    }

    alert("OTP Sent Successfully");

    window.location.href = "otp.html";
}