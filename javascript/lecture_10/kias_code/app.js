/* Core data (could come from an API) */
const users = [
  { id: crypto.randomUUID(), name: "Ada Lovelace", email: "ada@analytical.engine", age: 36, hobbies: ["Math", "Poetry"] },
  { id: crypto.randomUUID(), name: "Alan Turing",   email: "alan@bombe.uk",        age: 41, hobbies: ["Puzzles"] },
  { id: crypto.randomUUID(), name: "Grace Hopper",  email: "grace@navy.mil",       age: 85, hobbies: ["Compilers", "Teaching"] },
];

document.addEventListener("DOMContentLoaded", () => {
  /* DOM refs */
  const userList = document.getElementById("userList");
  const shuffleBtn = document.getElementById("shuffleUsers");
  const form = document.getElementById("userForm");
  const formError = document.getElementById("formError");
  const nameEl = document.getElementById("name");
  const emailEl = document.getElementById("email");
  const ageEl = document.getElementById("age");
  const hobbiesWrap = document.getElementById("hobbies");
  const hobbyTemplate = document.getElementById("hobbyTemplate");
  const addHobbyBtn = document.getElementById("addHobby");
  const clearHobbiesBtn = document.getElementById("clearHobbies");

  /* --- Rendering users with DocumentFragment --- */
  function renderUsers(list) {
    userList.textContent = ""; // clear
    const frag = document.createDocumentFragment();

    for (const u of list) {
      const li = document.createElement("li");
      li.dataset.userId = u.id;

      const name = document.createElement("strong");
      name.textContent = u.name;

      const meta = document.createElement("span");
      meta.className = "muted";
      meta.style.marginLeft = ".35rem";
      meta.textContent = `(${u.email} • ${u.age})`;

      const tags = document.createElement("span");
      tags.style.marginLeft = ".5rem";
      for (const h of u.hobbies) {
        const chip = document.createElement("span");
        chip.className = "chip";
        chip.textContent = h;
        tags.append(chip);
      }

      li.append(name, meta, tags);
      frag.append(li);
    }

    userList.append(frag);
  }

  renderUsers(users);

  /* --- Event handling: delegation for list interactions --- */
  userList.addEventListener("click", (e) => {
    const li = e.target.closest("li");
    if (!li) return;
    li.classList.toggle("selected");
    // Example modification: move selected item to the top
    if (li.classList.contains("selected")) {
      userList.prepend(li);
    }
  });

  /* --- Shuffle button (mutates array, re-renders) --- */
  shuffleBtn.addEventListener("click", () => {
    users.sort(() => Math.random() - 0.5);
    renderUsers(users);
  });

  /* --- Dynamic hobbies: add/remove/clear using template + fragments --- */
  function addHobbyRow(value = "") {
    const node = hobbyTemplate.content.firstElementChild.cloneNode(true);
    console.log(node) // Check console log to see what the output is.
    const input = node.querySelector('input[name="hobby"]');
    input.value = value;
    hobbiesWrap.append(node);
  }

  addHobbyBtn.addEventListener("click", () => addHobbyRow());
  clearHobbiesBtn.addEventListener("click", () => (hobbiesWrap.textContent = ""));

  // Remove via delegation
  hobbiesWrap.addEventListener("click", (e) => {
      // e. in this case is the object being clicked. 
      // "closest" targets closest element to the button inside .remove-hobby 
    if (e.target.matches(".remove-hobby")) {
      e.target.closest(".hobby-row")?.remove(); 

    }
  });

  /* --- Form validation helpers (HTML5 Constraint API) --- */
  function setError(msg = "") {
    formError.textContent = msg;
  }

  function validateForm() {
    setError("");

    // Built-in constraints first
    for (const el of [nameEl, emailEl, ageEl, ...hobbiesWrap.querySelectorAll('input[name="hobby"]')]) {
      if (!el.checkValidity()) {
        el.reportValidity(); // native tooltip
        return false;
      }
    }

    // Custom rule: Age must be integer >= 18
    const ageVal = Number(ageEl.value);
    if (!Number.isInteger(ageVal) || ageVal < 18) {
      setError("Age must be an integer of at least 18.");
      ageEl.focus();
      return false;
    }

    // Custom rule: At least one hobby if provided section is visible
    const hobbyInputs = [...hobbiesWrap.querySelectorAll('input[name="hobby"]')];
    if (hobbyInputs.length === 0) {
      setError("Please add at least one hobby.");
      addHobbyRow();
      hobbiesWrap.querySelector('input[name="hobby"]').focus();
      return false;
    }

    return true;
  }

  /* --- Submit: create/modify elements, push to users, re-render --- */
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    const newUser = {
      id: crypto.randomUUID(),
      name: nameEl.value.trim(),
      email: emailEl.value.trim(),
      age: Number(ageEl.value),
      hobbies: [...hobbiesWrap.querySelectorAll('input[name="hobby"]')].map(i => i.value.trim()),
    };

    users.unshift(newUser);          // update data model
    renderUsers(users);              // update UI via fragment
    form.reset();                    // reset fields
    hobbiesWrap.textContent = "";    // clear dynamic rows
    addHobbyRow();                   // add one default row
    setError("");
  });

  /* --- Extra: reset adds back a hobby row for UX --- */
  form.addEventListener("reset", () => {
    setTimeout(() => {               // let browser clear first
      hobbiesWrap.textContent = "";
      addHobbyRow();
      setError("");
    }, 0);
  });

  // Initialize with one hobby row
  addHobbyRow("Math");
});
