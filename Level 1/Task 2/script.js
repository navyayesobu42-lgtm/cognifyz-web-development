// ========================================
// COGNIFYZ JAVASCRIPT DIGITAL LAB
// ========================================


// ========================================
// 01. BUTTON COLOR INTERACTION
// ========================================

const colorButton = document.getElementById("colorButton");

colorButton.addEventListener("click", function () {

    colorButton.classList.toggle("changed");

    if (colorButton.classList.contains("changed")) {

        colorButton.textContent = "Color Changed ✓";

    } else {

        colorButton.textContent = "Change Color";

    }

});


// ========================================
// 02. TIME-BASED GREETING
// ========================================

function updateGreeting() {

    const currentHour = new Date().getHours();

    const greeting = document.getElementById("greeting");

    if (currentHour < 12) {

        greeting.textContent =
            "Good Morning! ☀️";

    } else if (currentHour < 18) {

        greeting.textContent =
            "Good Afternoon! 🌤️";

    } else {

        greeting.textContent =
            "Good Evening! 🌙";

    }

}


// Show greeting when page loads
updateGreeting();


// ========================================
// 03. ADDITION CALCULATOR
// ========================================

const addButton = document.getElementById("addButton");

addButton.addEventListener("click", function () {

    const firstNumber = parseFloat(
        document.getElementById("number1").value
    );

    const secondNumber = parseFloat(
        document.getElementById("number2").value
    );

    const result = document.getElementById("result");


    // Check whether both values are numbers

    if (isNaN(firstNumber) || isNaN(secondNumber)) {

        result.textContent =
            "⚠️ Please enter both numbers.";

        return;
    }


    // Calculate the sum

    const total = firstNumber + secondNumber;


    // Display result

    result.textContent =
        "Result: " + total + " ✓";

});
