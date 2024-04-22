

const listEmail = ["daniele@gmail.com", "andrea@gmail.com", "luca@gmail.com"];
const esito = document.getElementById("esito");

const button = document.getElementById("button");
button.addEventListener("click", function () {
    event.preventDefault();

    const userEmail = document.getElementById("email").value;
    let giveAccess = "";




    for (let i = 0; i < listEmail.length; i++) {

        if (userEmail == listEmail[i]) {
            giveAccess += userEmail;
        } else {

        }

        if (giveAccess != "") {
            esito.innerHTML = "positivo";
            console.log("Può accedere " + userEmail);
        } else {
            esito.innerHTML = "negativo";
        }
    }
})