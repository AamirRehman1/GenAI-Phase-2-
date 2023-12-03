document.addEventListener('DOMContentLoaded', () => {
    console.log("Script loaded and DOM fully loaded");
    const projectNameForm = document.getElementById('project-name-form');

    const editTask = (event) => {
    let task = event.target;
    let deleteBtn = task.querySelector('.delete-btn');
    if (deleteBtn) {
        // Temporarily remove the delete button
        task.removeChild(deleteBtn);
    }
    // Capture the text content with the delete button removed
    let currentText = task.textContent.trim();
    let inputField = document.createElement('input');
    inputField.type = 'text';
    inputField.value = currentText;
    inputField.className = 'task-input';
    task.innerHTML = '';
    task.appendChild(inputField);
    inputField.focus();
    inputField.onblur = () => {
        task.innerHTML = inputField.value;
        if (deleteBtn) {
            // Reinsert the delete button
            task.appendChild(deleteBtn);
        }
    };
};



    const editTitle = (event) => {
    let title = event.target;
    let deleteBtn = title.querySelector('.delete-btn');
    if (deleteBtn) {
        // Temporarily remove the delete button
        title.removeChild(deleteBtn);
    }
    // Capture the text content with the delete button removed
    let currentText = title.textContent.trim();
    let inputField = document.createElement('input');
    inputField.type = 'text';
    inputField.value = currentText;
    inputField.className = 'title-input';
    title.innerHTML = '';
    title.appendChild(inputField);
    inputField.focus();
    inputField.onblur = () => {
        title.innerHTML = inputField.value;
        if (deleteBtn) {
            // Reinsert the delete button
            title.appendChild(deleteBtn);
        }
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
    var wbsRow = document.getElementById('wbs-row');
    var newColumn = document.createElement('div');
    newColumn.className = 'wbs-column';

    // Create and append the phase title
    var newTitle = document.createElement('h2');
    newTitle.className = 'wbs-phase-title editable-title';
    newTitle.textContent = 'New Phase';
    newColumn.appendChild(newTitle);

    // Create and append the delete button for the phase title
    var deleteBtnTitle = document.createElement('button');
    deleteBtnTitle.className = 'delete-btn';
    deleteBtnTitle.textContent = 'x';
    newTitle.appendChild(deleteBtnTitle);
    newTitle.addEventListener('click', editTitle);

    // Create and append tasks
    for (let i = 0; i < 5; i++) {
        var newTask = document.createElement('div');
        newTask.className = 'wbs-task editable';
        newTask.textContent = 'Task';

        // Create and append the delete button for each task
        var deleteBtnTask = document.createElement('button');
        deleteBtnTask.className = 'delete-btn';
        deleteBtnTask.textContent = 'x';
        newTask.appendChild(deleteBtnTask);

        newColumn.appendChild(newTask);
        newTask.addEventListener('click', editTask);
    }

    // Create and append the 'Add Task' button
    var addTaskBtn = document.createElement('button');
    addTaskBtn.className = 'add-task-btn';
    addTaskBtn.textContent = '+';
    newColumn.appendChild(addTaskBtn);

    wbsRow.appendChild(newColumn);

    // Add event listener for the new 'Add Task' button
    addTaskBtn.addEventListener('click', function() {
        let column = this.parentElement;
        let newTask = document.createElement('div');
        newTask.className = 'wbs-task editable';
        newTask.textContent = 'Task';
        column.insertBefore(newTask, this);
    });
});


    // Functionality to add a new task
    document.querySelectorAll('.add-task-btn').forEach(button => {
        button.addEventListener('click', function() {
            let column = this.parentElement; // Get the parent column
            let newTask = document.createElement('div');
            newTask.className = 'wbs-task editable';
            newTask.textContent = 'Task';
             column.insertBefore(newTask, this); // Append the new task to the column
        });
    });

    // Functionality to handle delete button clicks
    document.addEventListener('click', function(event) {
        if (event.target.classList.contains('delete-btn')) {
            if (event.target.parentElement.classList.contains('wbs-phase-title')) {
                // Delete the entire column
                event.target.closest('.wbs-column').remove();
            } else if (event.target.parentElement.classList.contains('wbs-task')) {
                // Delete the individual task
                event.target.parentElement.remove();
            }
        }
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
