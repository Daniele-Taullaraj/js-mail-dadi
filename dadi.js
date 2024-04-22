let computer = Math.floor(Math.random() * 6 + 1);
let user = Math.floor(Math.random() * 6 + 1);

console.log("comuter " + computer);
console.log("giocatore " + user);

if (computer > user) {
    console.log("il vincitore è il computer");
} else if (computer == user) {
    console.log("pari");
} else {
    console.log("il vincitore è il giocatore");
}