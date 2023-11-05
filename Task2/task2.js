const input = document.getElementById("inp");
const newColor = ["red", "blue", "yellow", "pink", "white", "black"];
let index = 0;
function changeColor() {
    btn.addEventListener("click", function () {
        input.style.backgroundColor = newColor[index];
        index = (index + 1) % newColor.length;

    })
};


const showGreeting = () => {
    let greetings;

    const now = new Date();
    const hour = now.getHours();

    if (hour >= 5 && hour < 12) {
        greetings = "Good morning!";
    }
    else if (hour >= 12 && hour < 17) {
        greetings = "Good AfterNoon!";
    }
    else if (hour >= 17 && hour < 20) {
        greetings = "Good Evening!";
    }
    else {
        greetings = "Good Night!";
    }
    return greetings;
}

const message = showGreeting();

// alert(message);


function findSum() {
    const num1 = document.getElementById("input").value;
    const num2 = document.getElementById("inputTwo").value;
    const addition = Number(num1) + Number(num2);
    const betterAddition = addition;
    document.getElementById("newValue").innerHTML = betterAddition;

}

findSum();



function findSub() {
    const num1 = document.getElementById("input").value;
    const num2 = document.getElementById("inputTwo").value;
    const addition = Number(num1) * Number(num2);
    const betterAddition = addition;
    document.getElementById("newValue").innerHTML = betterAddition;

}
