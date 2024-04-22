

const listEmail = ["daniele@gmail.com", "andrea@gmail.com", "luca@gmail.com"];

const button = document.getElementById("button");
button.addEventListener("click", function () {
    event.preventDefault();

    const userEmail = document.getElementById("email").value;




    for (let i = 0; i < listEmail.length; i++) {
        // console.log(i)
        if (userEmail == listEmail[i]) {
            console.log("Può accedere " + userEmail);
        } else {
            return;
        }
    }
})