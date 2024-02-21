$(document).ready(function () {
    var tasks = [];

    function renderTasks() {
        $('#task-list').empty();
        tasks.forEach(function (task, index) {
            var listItem = $('<li class="task-item" data-index="' + index + '"><span class="task-text" contenteditable="true">' + task + '</span><button class="edit-btn">Edit</button><button class="delete-btn">Delete</button></li>');
            $('#task-list').append(listItem);
        });
    }

    $('#add-task').click(function () {
        var newTask = $('#input-task').val();
        if (newTask !== '') {
            tasks.push(newTask);
            renderTasks();
            $('#input-task').val('');
        } else {
            alert('Please enter a task.');
        }
    });

    $(document).on('click', '.delete-btn', function () {
        var index = $(this).closest('.task-item').data('index');
        tasks.splice(index, 1);
        renderTasks();
    });

    $(document).on('click', '.edit-btn', function () {
        var listItem = $(this).closest('.task-item');
        var index = listItem.data('index');
        var updatedTask = listItem.find('.task-text').text();
        tasks[index] = updatedTask;
        renderTasks();
    });
});
