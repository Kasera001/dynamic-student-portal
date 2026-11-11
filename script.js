alert("Welcome to the Aston Martin University student portal")
console.log("script loaded successfully")

// add variables and conditions
let studentName = prompt("enter your name");
let yearOfStudy = prompt("enter year of study")

if(yearOfStudy === 1){
    console.log(studentName + " is a first-year student ")
}
else if(yearOfStudy === 2){
    console.log(studentName + " is a second-year student ")

}
else if(yearOfStudy === 3){
    console.log(studentName + "  is a third-year student ")
}
else if(yearOfStudy === 4){
    console.log(studentName + " is a fourth-year student ")
}
else if(yearOfStudy === 5){
    console.log(studentName + " is a fifth-year student")
}
else{
    console.log(studentName + " is a postgraduate ")
}
for (let i = 1; i <= 5; i++) {
    console.log(i)
}

const form = document.getElementById("regForm");

if (form) {
    form.addEventListener("submit", function (event) {
        const nameValue = document.getElementById("fullname").value;

        if (nameValue.trim() === "") {
            alert("Please enter your full name.");
            event.preventDefault()
        }

    });
}