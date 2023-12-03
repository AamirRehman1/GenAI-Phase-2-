document.addEventListener('DOMContentLoaded', () => {
    console.log("Script loaded and DOM fully loaded");
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
            // Optionally, send the updated task to the server here
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
            // Optionally, send the updated title to the server here
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

    // Functionality to add a new column
    document.getElementById('add-column-btn').addEventListener('click', function() {
        console.log("Add column button clicked");
        var wbsRow = document.getElementById('wbs-row');
        console.log("wbsRow:", wbsRow);
        var newColumn = document.createElement('div');
        newColumn.className = 'wbs-column';
        newColumn.innerHTML = `
            <h2 class="wbs-phase-title editable-title">New Phase</h2>
            <div class="wbs-task editable">Task</div>
            <div class="wbs-task editable">Task</div>
            <div class="wbs-task editable">Task</div>
            <div class="wbs-task editable">Task</div>
            <div class="wbs-task editable">Task</div>
            <button class="add-task-btn">+</button>
        `; // 
        wbsRow.appendChild(newColumn); //
        // Add click event listener to the 'Add Task' button in the new column
        newColumn.querySelector('.add-task-btn').addEventListener('click', function() {
            let column = this.parentElement;
            let newTask = document.createElement('div');
            newTask.className = 'wbs-task editable';
            newTask.textContent = 'New Task';
            column.insertBefore(newTask, this)
        });
    });

    // Functionality to add a new task
    document.querySelectorAll('.add-task-btn').forEach(button => {
        button.addEventListener('click', function() {
            let column = this.parentElement; // Get the parent column
            let newTask = document.createElement('div');
            newTask.className = 'wbs-task editable';
            newTask.textContent = 'New Task';
             column.insertBefore(newTask, this); // Append the new task to the column
        });
    });

    // Event Delegation for Editable Tasks and Titles
    document.getElementById('wbs-row').addEventListener('click', function(event) {
        // Check if the clicked element is an editable task
        if (event.target && event.target.classList.contains('editable')) {
            // Call editTask function or its logic here
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
        }

        // Check if the clicked element is an editable title
        if (event.target && event.target.classList.contains('editable-title')) {
            // Call editTitle function or its logic here
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
        }
    });

});
