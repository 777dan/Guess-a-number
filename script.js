let rand = 10;
let n = Math.floor(Math.random() * rand);
let x = prompt("Input a number from 0 to 10 or ! for exit");
while (true) {
    if (x == "!") {
        alert("Bye!")
        break;
    }
    else if (isNaN(x)) {
        alert("No!");
        break;
    }
    else if (x == n) {
        alert("You win")
        break;
    }
    else if (x < n) {
        alert("...+")
    } else {
        alert("...-")
    }
}
