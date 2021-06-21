const inputName = document.getElementById("name");
const inputTask = document.getElementById("task");
const formInput = document.getElementById("form-input");
const tableBody = document.querySelector(".table-body");
const edit = document.getElementById("add");
const contedit = document.getElementById("countedit");

//  constracutor and methods
class Todo {
  constructor(id, name, task) {
    this.id = id;
    this.name = name;
    this.task = task;
  }

  showData() {
    Todo.showHtml(this.id, this.name, this.task);
    return this;
  }

  //  store data in local storage
  storeData() {
    const allData = JSON.parse(localStorage.getItem("tasks")) ?? [];
    allData.push({ id: this.id, name: this.name, task: this.task });
    localStorage.setItem("tasks", JSON.stringify(allData));
  }
  static showtasks() {
    if (localStorage.getItem("tasks")) {
      JSON.parse(localStorage.getItem("tasks")).forEach((item) => {
        Todo.showHtml(item.id, item.name, item.task);
      });
    }
  }

  //    updating data after edit
  updateTodo(id) {
    const newItem = { id: id, name: this.name, task: this.task };
    const updateData = JSON.parse(localStorage.getItem("tasks")).map((item) => {
      if (item.id == id) {
        return newItem;
      }

      return item;
    });
    localStorage.setItem("tasks", JSON.stringify(updateData));
  }

  // show html of tbody
  static showHtml(id, name, task) {
    const trElment = document.createElement("tr");
    trElment.innerHTML = `
           <tr>
                 <td>${name}</td>
                 <td> ${task} </td>
                 <td>
                 <button class= "del" data-id=${id}> delete </i> </button>
                 <button class="edit" data-id=${id} > Edit </button> 
                 </td>
           </tr>
        `;
    tableBody.appendChild(trElment);
  }
}

Todo.showtasks();

//   submit button adding data
formInput.addEventListener("submit", (e) => {
  e.preventDefault();

  if (!contedit.value) {
    let id = Math.floor(Math.random() * 1000000);
    const newTask = new Todo(id, inputName.value, inputTask.value);
    newTask.showData().storeData();
  } else {
    const id = contedit.value;
    const newEmp = new Todo(id, inputName.value, inputTask.value);
    newEmp.updateTodo(id);
    edit.innerHTML = `<button id="add"  type="submit">  <i class="far fa-plus-square"></i> </button> `;
    contedit.value = id;
    tableBody.innerHTML = "";
    Todo.showtasks();
  }
  inputName.value = "";
  inputTask.value = "";
});

// deleting data from html &local storage
tableBody.addEventListener("click", (e) => {
  if (e.target.classList.contains("del")) {
    //  remove from local storge
    let id = e.target.getAttribute("data-id");
    let emps = JSON.parse(localStorage.getItem("tasks"));

    let newData = emps.filter((item) => item.id != id);
    localStorage.setItem("tasks", JSON.stringify(newData));

    // remove from html
    e.target.parentElement.parentElement.remove();
  }
});

// edit data
tableBody.addEventListener("click", (e) => {
  if (e.target.classList.contains("edit")) {
    let id = e.target.getAttribute("data-id");
    let data = JSON.parse(localStorage.getItem("tasks")).find(
      (item) => item.id == id
    );
    contedit.value = id;
    inputName.value = data.name;
    inputTask.value = data.task;
    edit.innerHTML = ` <button class="edit" data-id=${id} > Edit </button> `;
  }
});
