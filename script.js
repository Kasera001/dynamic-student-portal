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
// ---------- Lab 8: functions, events and arrays ----------
// An object holds related data as key: value pairs
// Example: { name: "Amina", course: "Computer Science", year: 2 }
// Read a property with a dot: student.name

// Add ONE student (now an object, not a plain string)
function addStudentToPage(student) {
    const list = document.getElementById("student-list");
    const item = document.createElement("li");
    item.textContent = student.name + " - " + student.course + " (Year " + student.year + ")";
    list.appendChild(item);
}

// Show ALL students and update the heading with the total
function displayAllStudents(students) {
    const list = document.getElementById("student-list");
    list.innerHTML = "";

    for (let i = 0; i < students.length; i++) {
        addStudentToPage(students[i]);
    }

    document.getElementById("student-count").textContent =
        "Registered Students (" + students.length + ")";
}

// Fetch the JSON file, then display it
async function loadStudents() {
    const errorMessage = document.getElementById("error-message");
    errorMessage.textContent = "";

    try {
        const response = await fetch("students.json");

        if (!response.ok) {
            throw new Error("Server answered with status " + response.status);
        }

        const students = await response.json();
        displayAllStudents(students);
    } catch (error) {
        console.error("Fetch failed:", error);
        errorMessage.textContent = "Sorry, the student list could not be loaded.";
    }
}

// Run it when the button is clicked
const showButton = document.getElementById("show-students");

if (showButton) {
    showButton.addEventListener("click", loadStudents);
}