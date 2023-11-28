document.addEventListener('DOMContentLoaded', () => {
    const projectNameForm = document.getElementById('project-name-form');

    // Function to handle clicking on an editable task
    const editTask = (event) => {
        let task = event.target;
        let currentText = task.textContent;
        let inputField = document.createElement('input');
        inputField.type = 'text';
        inputField.value = currentText;
        inputField.className = 'task-input';
        task.innerHTML = '';
        task.appendChild(inputField);
        inputField.focus();

        inputField.onblur = () => {
            task.innerHTML = inputField.value;
            // Add an event to save the new task value to your server here
        };
    };

    // If we're on the index page with the form
    if (projectNameForm) {
        projectNameForm.onsubmit = (e) => {
            e.preventDefault();
            const projectName = document.getElementById('project-name').value;
            // Redirect to the WBS diagram page with the project name
            window.location.href = `/wbs_diagram?project_name=${encodeURIComponent(projectName)}`;
        };
    } else {
        // We're on the WBS page, so set up editable tasks
        document.querySelectorAll('.editable').forEach(task => {
            task.addEventListener('click', editTask);
        });
    }
});
