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
// ---------- Lab 10: OOP ----------
class Student {
    constructor(name, email, course, year) {
        this.name = name;
        this.email = email;
        this.course = course;
        this.year = year;
    }

    getSummary() {
        return this.name + " - " + this.course + " (Year " + this.year + ") - " + this.email;
    }
}

function addStudentToPage(student) {
    const list = document.getElementById("student-list");
    const item = document.createElement("li");
    item.textContent = student.getSummary();   // the method replaces the long string
    list.appendChild(item);
}

async function loadStudents() {
    const errorMessage = document.getElementById("error-message");
    errorMessage.textContent = "";

    try {
        const response = await fetch("students.json");

        if (!response.ok) {
            throw new Error("Server answered with status " + response.status);
        }

        const data = await response.json();

        // Turn each plain object from the JSON into a Student object
        const students = data.map(function (s) {
            return new Student(s.name, s.email, s.course, s.year);
        });

        displayAllStudents(students);
    } catch (error) {
        console.error("Fetch failed:", error);
        errorMessage.textContent = "Could not load students: " + error.message;
    }
}
// ---------- Lab 10: regex validation ----------
const namePattern = /^[A-Za-z ]+$/;
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const form = document.getElementById("regForm");

if (form) {
    form.addEventListener("submit", function (event) {
        const name = document.getElementById("fullname").value.trim();
        const email = document.getElementById("email").value.trim();
        const errorBox = document.getElementById("form-error");
        const errors = [];

        if (name === "") {
            errors.push("Name cannot be empty.");
        } else if (!namePattern.test(name)) {
            errors.push("Name can only contain letters and spaces.");
        }

        if (!emailPattern.test(email)) {
            errors.push("Enter a valid email, for example name@example.com.");
        }

        if (errors.length > 0) {
            event.preventDefault();               // stop the form from submitting
            errorBox.textContent = errors.join(" ");
        } else {
            errorBox.textContent = "";
        }
    });
}