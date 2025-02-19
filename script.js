const API_URL = "http://127.0.0.1:5000";

async function addStudent() {
    let name = document.getElementById("studentName").value;
    let email = document.getElementById("studentEmail").value;

    let response = await fetch(`${API_URL}/students`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email }),
    });

    document.getElementById("studentOutput").src = URL.createObjectURL(await response.blob());
}

async function addCourse() {
    let name = document.getElementById("courseName").value;
    let code = document.getElementById("courseCode").value;

    let response = await fetch(`${API_URL}/courses`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, code }),
    });

    document.getElementById("courseOutput").src = URL.createObjectURL(await response.blob());
}

async function enrollStudent() {
    let studentId = document.getElementById("studentId").value;
    let courseId = document.getElementById("courseId").value;

    let response = await fetch(`${API_URL}/enroll`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ student_id: studentId, course_id: courseId }),
    });

    document.getElementById("enrollOutput").src = URL.createObjectURL(await response.blob());
}
