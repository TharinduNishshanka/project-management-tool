document.addEventListener('DOMContentLoaded', () => {
    const createProjectBtn = document.getElementById('create-project-btn');
    const createTaskBtn = document.getElementById('create-task-btn');
    const addCommentBtn = document.getElementById('add-comment-btn');

    const projectsList = document.getElementById('projects-list');
    const tasksList = document.getElementById('tasks-list');
    const commentsList = document.getElementById('comments-list');

    createProjectBtn.addEventListener('click', () => {
        const projectName = prompt('Enter project name:');
        if (projectName) {
            const projectElement = document.createElement('div');
            projectElement.textContent = projectName;
            projectsList.appendChild(projectElement);
        }
    });

    createTaskBtn.addEventListener('click', () => {
        const taskName = prompt('Enter task name:');
        if (taskName) {
            const taskElement = document.createElement('div');
            taskElement.textContent = taskName;
            tasksList.appendChild(taskElement);
        }
    });

    addCommentBtn.addEventListener('click', () => {
        const newComment = document.getElementById('new-comment').value;
        if (newComment) {
            const commentElement = document.createElement('div');
            commentElement.textContent = newComment;
            commentsList.appendChild(commentElement);
            document.getElementById('new-comment').value = '';
        }
    });
});
