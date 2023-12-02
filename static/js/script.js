document.addEventListener('DOMContentLoaded', () => {
    const projectNameForm = document.getElementById('project-name-form');

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
        };
    };

    const editTitle = (event) => {
        let title = event.target;
        let currentText = title.textContent;
        let inputField = document.createElement('input');
        inputField.type = 'text';
        inputField.value = currentText;
        inputField.className = 'title-input'; 
        title.innerHTML = '';
        title.appendChild(inputField);
        inputField.focus();

        inputField.onblur = () => {
            title.innerHTML = inputField.value; 
        };
    };

    if (projectNameForm) {
        projectNameForm.onsubmit = (e) => {
            e.preventDefault();
            const projectName = document.getElementById('project-name').value;
            window.location.href = `/wbs_diagram?project_name=${encodeURIComponent(projectName)}`;
        };
    } else {
        document.querySelectorAll('.editable').forEach(task => {
            task.addEventListener('click', editTask);
        });
        document.querySelectorAll('.editable-title').forEach(title => { 
            title.addEventListener('click', editTitle); 
        });
    }
});
