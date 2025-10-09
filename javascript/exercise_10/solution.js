// ========================
// Mini Task Manager - app.js
// ========================

// 🧩 Step 1: Get DOM references
const form = document.getElementById("taskForm");
const titleInput = document.getElementById("taskTitle");
const prioritySelect = document.getElementById("taskPriority");
const taskList = document.getElementById("taskList");
const clearBtn = document.getElementById("clearTasks");
const errorP = document.getElementById("formError");
// Optional (Step 7): sorting button; may not exist
const sortBtn = document.getElementById("sortByPriority");

// 🧩 Step 2: Tasks data model
let tasks = []; // each item: { title, priority, completed }

// Helper: show/hide error
function setError(msg = "") {
  errorP.textContent = msg;
}

// 🧩 Step 3: Render list using DocumentFragment
function renderTasks() {
  taskList.textContent = ""; // clear existing
  const frag = document.createDocumentFragment();

  tasks.forEach((task, i) => {
    const li = document.createElement("li");
    li.dataset.index = i;
    li.textContent = `${task.title} (${task.priority})`;
    if (task.completed) li.classList.add("completed");
    frag.append(li);
  });

  taskList.append(frag);
}

// 🧩 Step 4: Handle form submission with basic validation
form.addEventListener("submit", (e) => {
  e.preventDefault();
  setError("");

  const title = titleInput.value.trim();
  const priority = prioritySelect.value.trim();

  // Manual validation (in addition to HTML attributes)
  if (title.length < 3) {
    setError("Title must be at least 3 characters.");
    titleInput.focus();
    return;
  }
  if (!priority) {
    setError("Please select a priority.");
    prioritySelect.focus();
    return;
  }

  tasks.push({ title, priority, completed: false });
  form.reset();
  renderTasks();
});

// 🧩 Step 5: Event delegation to toggle completion
taskList.addEventListener("click", (event) => {
  const li = event.target.closest("li");
  if (!li) return;

  const index = li.dataset.index;
  if (index === undefined) return;

  tasks[index].completed = !tasks[index].completed;
  renderTasks();
});

// 🧩 Step 6: Clear all tasks
clearBtn.addEventListener("click", () => {
  tasks = [];
  renderTasks();
});

// 🧩 Step 7 (optional): Sort tasks by priority (High > Medium > Low)
if (sortBtn) {
  const order = { High: 3, Medium: 2, Low: 1 };
  sortBtn.addEventListener("click", () => {
    tasks.sort((a, b) => {
      const pa = order[a.priority] ?? 0;
      const pb = order[b.priority] ?? 0;
      // Higher first; if equal, keep stable by title
      if (pb !== pa) return pb - pa;
      return a.title.localeCompare(b.title);
    });
    renderTasks();
  });
}

// Initial paint (in case you preseed tasks)
renderTasks();
