function displayAllStudents(students) {
    const list = document.getElementById("student-list");
    list.innerHTML = "";

    for (let i = 0; i < students.length; i++) {
        addStudentToPage(students[i]);
    }

    document.getElementById("student-count").textContent =
        "Registered Students (" + students.length + ")";
}

const showButton = document.getElementById("show-students");

if (showButton) {
    showButton.addEventListener("click", loadStudents);
}
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
const namePattern = /^[A-Za-z ][A-Za-z '\-]*$/;
const emailPattern = /^[^\s@]+@aston\.ac\.ke$/i;// the i checks for case

const form = document.getElementById("regForm");

if (form) {
    form.addEventListener("submit", function (event) {
        const name = document.getElementById("fullname").value.trim();
        const email = document.getElementById("email").value.trim();
        const errorBox = document.getElementById("form-error");
        const course = document.getElementById("course").value;
        const gender = document.querySelector('input[name="gender"]:checked');
        const terms = document.getElementById("terms").checked;
        const errors = [];
        
        if (course === ""){ error.push("please enter a course");

        }
        if(!gender){error.push("Please select the gender options");

        }
        if (!terms){errors.push("You must agree to the terms");

        }
        if (name === "") {
            errors.push("Name cannot be empty.");
        } else if (!namePattern.test(name)) {
            errors.push("Name can only contain letters and spaces.");
        }

        if (!emailPattern.test(email)) {
            errors.push("use your school email, for example name@aston.ac.ke");
        
    
        }
        if (errors.length > 0) {
            event.preventDefault();               // stop the form from submitting
            errorBox.textContent = errors.join(" ");
        } else {
            errorBox.textContent = "";
        }
    });
}