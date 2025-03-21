
function showAlert() {
    alert("Thank you for visiting our store! Start shopping now.");
}


function calculateDiscount() {
    let age = prompt("Please enter your age:");
    if (age === null || age === "") {
        alert("No age entered. Please try again.");
    } else {
        age = parseInt(age);
        if (age > 30) {
            alert("Congratulations! You qualify for a 30% discount.");
        } else {
            alert("Congratulations! You qualify for a 20% discount.");
        }
    }
}