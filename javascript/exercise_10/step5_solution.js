// 🧩 Step 5: Add event handling for task toggling (Event Delegation)

// Attach one listener to the parent <ul>
taskList.addEventListener("click", function (event) {
  // 1️⃣ Identify the clicked <li>
  const li = event.target.closest("li");
  if (!li) return; // Click happened outside any list item

  // 2️⃣ Retrieve the index of the clicked task (stored as data attribute)
  const index = li.dataset.index;
  if (index === undefined) return;

  // 3️⃣ Toggle the 'completed' state in the tasks array
  tasks[index].completed = !tasks[index].completed;

  // 4️⃣ Re-render the list to reflect the change visually
  renderTasks();
});



function renderTasks() {
  taskList.textContent = "";
  const frag = document.createDocumentFragment();

  tasks.forEach((task, i) => {
    const li = document.createElement("li");
    li.textContent = `${task.title} (${task.priority})`;
    li.dataset.index = i; // <-- required for delegation
    if (task.completed) li.classList.add("completed");
    frag.append(li);
  });

  taskList.append(frag);
}


// What happens when you click a task:
//         The event bubbles from the clicked <li> up to <ul>.
//         The handler catches it, finds which <li> was clicked, and toggles tasks[i].completed.
//         Then renderTasks() re-renders the list with the updated state.