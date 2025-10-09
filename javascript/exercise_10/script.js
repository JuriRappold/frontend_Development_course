document.addEventListener("DOMContentLoaded", () => {
    // 🧩 Step 1: Get DOM references
// Get references for form, inputs, list, clear button, and error paragraph

// task form
    const form = document.getElementById("taskForm")
    const taskTitle = document.getElementById("taskTitle")
    const taskPriority = document.getElementById("taskPriority")
    const formError = document.getElementById("formError")

// Task List
    const taskList = document.getElementById("taskList")
    const clearBtn = document.getElementById("clearTasks")
    const sortBtn = document.getElementById("sortByPriority")


// 🧩 Step 2: Create an empty array to store tasks
    let taskArray = []

// 🧩 Step 3: Write a function renderTasks() that:
// - clears the <ul>X
// - creates a DocumentFragment()X
// - loops through tasksX
// - for each task, creates an <li> showing title + priorityX
// - if a task is marked completed, add a CSS class
// - append all items to the fragment, then to <ul>X

    function renderTasks(){
        // - clears the <ul>
        taskList.innerHTML = "" //idk if it would work
        // - creates a DocumentFragment()
        const fragment = document.createDocumentFragment()

        // - loops through tasks
        for (const task of taskArray) {
            // - for each task, creates an <li> showing title + priority
            let tsk = document.createElement("li")

            // creates new <li> element that does not have prior classes
            tsk.textContent = `${task.title} (${task.priority})`

            // if current item has been completed, if yes re-addtion of class "completed"
            if(task.completed){
                tsk.classList.toggle("completed")
            }
            // - append all items to the fragment,

            fragment.appendChild(tsk)
        }
        // then to <ul>
        taskList.appendChild(fragment)
    }


// 🧩 Step 4: Handle form submission
// - prevent default form submissionX
// - check that title and priority are filled (manual validation)X
// - if not, display an error and returnX
// - otherwise, push a new object {title, priority, completed:false} into tasksX
// - clear the inputs and re-render the listX
    form.addEventListener("submit",function(event){
        // - prevent default form submission
        event.preventDefault()

        // - check that title and priority are filled (manual validation)
        if(taskTitle.value.length >= 3 && taskPriority.value !== ""){
            //otherwise, push a new object {title, priority, completed:false} into tasks
            taskArray.push(
                {
                    title: taskTitle.value,
                    priority: taskPriority.value,
                    completed : false,

                    //string : `${taskTitle.value} (${taskPriority.value})`
                });
            // - clear the inputs and re-render the list
            //idk how to clear form, apparently just a function call
            form.reset();
            // re-render the list
            renderTasks();
        }
        // - if not, display an error and return
        else{
            formError.innerText = "Check Input!";
            form.reset();
        }

});



// 🧩 Step 5: Add event handling for task toggling
// - use event delegation on <ul>
// - when user clicks an <li>, toggle its "completed" state in the array
// - re-render the list

// Event delegation means:
// You attach one single event listener to a common ancestor element (like <ul>) instead of adding one listener per <li>.
// When a click occurs on a child (like a list item), the event bubbles up through its ancestors — you can catch it at the <ul> level and check which child was clicked.
// This is efficient because:
//         You don’t need to add/remove listeners each time the list changes.
//         Works even for newly created <li> elements.
// HINT: Use target.closest()
    taskList.addEventListener("click",(e) => {
        const li = e.target.closest("li"); //from kias lecture 10 code
        li.classList.toggle("completed")
        for (const task of taskArray){ //why for-of loop, to iterate array of obj?
            if(li.textContent === `${task.title} (${task.priority})`){
                task.completed = !task.completed;
            }
        }
        renderTasks()
    })

// 🧩 Step 6: Handle "Clear All" button
// - empty the tasks array and re-render
    clearBtn.addEventListener("click", () => {
        while(taskList.firstElementChild ){
            taskList.removeChild( taskList.firstElementChild );
        }
        taskArray = []
    })



// 🧩 Step 7 (optional challenge): Sort tasks by priority
// - add a new button that sorts High > Medium > Low


})

