const button = document.querySelector("button[type='submit']");
const input = document.querySelector("input[type='text']");
const output = document.querySelector(".output");
const tasks = [];

const handleSubmit = (e) => {
  e.preventDefault();
  if (!input.value) return;
  tasks.push(input.value);
  const tasksDOM = tasks.map(
    (task) => `
    <div class="task">
      <input type="checkbox">
      <p>${task}</p>
      <button class="delete">x</button>
    </div>
    `
  );
  output.innerHTML = tasksDOM;
  // console.log(tasks);
  input.value = "";
};

// const handleSubmit = (e) => {
//   e.preventDefault();
//   if (!input.value) return;
//   tasks.push(input.value);
//   input.value = "";
//   // console.log(tasks)
//   output.innerHTML = "";
//   for (let i = 0; i < tasks.length; i++) {
//     let toBeAdded = `
//       <div class="task">
//         <input type="checkbox">
//         <p>${tasks[i]}</p>
//         <button class="delete">x</button>
//       </div>
//     `;
//     output.innerHTML += toBeAdded;
//   }
// };
button.addEventListener("click", handleSubmit);
