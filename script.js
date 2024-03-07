function addCourse() {
    const courseTitle = document.getElementById('courseTitle').value;
    const courseDescription = document.getElementById('courseDescription').value;
    if (courseTitle.trim() !== '' && courseDescription.trim() !== '') {
        const coursesContainer = document.getElementById('courses');
        const courseDiv = document.createElement('div');
        courseDiv.classList.add('course');
        courseDiv.innerHTML = `
            <h3>${courseTitle}</h3>
            <p>${courseDescription}</p>
        `;
        coursesContainer.appendChild(courseDiv);
        document.getElementById('courseTitle').value = '';
        document.getElementById('courseDescription').value = '';
    }
}
