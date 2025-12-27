

const loggedIn = localStorage.getItem("loggedIn");
let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
showTask()


if (loggedIn === null) {
    window.location.href = "index.html";
}



document.getElementById("createTask").addEventListener("click", () =>{

    const taskName = document.getElementById("taskName").value;
    const dateTime = new Date();
    const id = dateTime.getTime();

    tasks.push({
        id: id,
        name: taskName,
    });

    const jsonTasks = JSON.stringify(tasks);

    localStorage.setItem("tasks", jsonTasks);
    showTask()

})




function showTask() {
    const taskList = document.getElementById("taskList");
    taskList.innerHTML = '';

    if(tasks.length >=1) {
        for(let task of tasks) {
            let singleTask = document.createElement("div");
            let taskName = document.createElement("p");
            taskName.innerText = task.name;

            let deleteTask = document.createElement("button");
            deleteTask.setAttribute("data-task-id", task.id);
            deleteTask.innerText = "Delete";

            deleteTask.addEventListener("click", () => {
                tasks = tasks.filter(filterTask => filterTask.id !== task.id);
                showTask();
                localStorage.setItem("tasks", JSON.stringify(tasks));
            })

            singleTask.append(taskName, deleteTask);
            taskList.append(singleTask);
        }
    }
}