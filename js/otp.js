function verifyOTP()
{
    let inputs =
    document.querySelectorAll(".otp-box input");

    let otp = "";

    inputs.forEach(input => {
        otp += input.value;
    });

    if(otp.length !== 6)
    {
        alert("Enter Complete OTP");
        return;
    }

    alert("Login Successful");

    window.location.href =
    "dashboard.html";
}
const otpInputs =
document.querySelectorAll(".otp-box input");

otpInputs.forEach((input,index)=>{

input.addEventListener("input",()=>{

if(input.value.length === 1)
{
if(index < otpInputs.length - 1)
{
otpInputs[index+1].focus();
}
}

});

});