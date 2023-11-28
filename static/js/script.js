document.addEventListener('DOMContentLoaded', () => {
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
            // You can add an event to save the new task value to your server here
        };
    };

    // Add click event listener to all editable tasks
    document.querySelectorAll('.editable').forEach(task => {
        task.addEventListener('click', editTask);
    });
});

