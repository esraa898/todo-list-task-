const taskData = document.getElementById("task").value;
const nameData = document.getElementById("name").value;
const name = document.getElementById("nameupdate").value;
const task = document.getElementById("taskupdate").value;
const tableBody = document.querySelector(".table-body");
const form = document.getElementById("form-input");
class add {
  constructor(name, task) {
    this.name = name;
    this.task = task;
  }
  add() {
    const add = document.createElement("tr");
    add.innerHTML = `
        <tr>
                 <td>${this.name}</td>
                 <td> ${this.task} </td>
                 <td>
                 <button class= "del" > delete </i> </button>
                 <button class="edit" > Edit </button> 
                 </td>
           </tr>
        `;
    tableBody.appendChild(add);
  }
}
form.addEventListener;
//  var data=[];

// function add(){

//      var taskData = document.getElementById("task").value
//      var nameData = document.getElementById("name").value
//      var ob ={
//          task:taskData , name:nameData};

//          data.push(ob);
//         show();
//         reset();

// }

// function show (){
//     var  st='';
//     var count = data.length;
//     for ( var i=0; i< count; i++){
//          st += "<div class='flex'> <span> "+ data[i]['name']+"  </span> <h2 class= 'st'>" + data[i]['task'] + "</h2> <button class= 'del' onclick='deleteElement(" + i + ")' > <i class='far fa-trash-alt'></i> </button>"+"<button class='but' onclick='updateElement(" + i + ")' > update </button> </div>" ;
//     }
//     document.getElementById("result").innerHTML = st;
// }

// function reset(){
//     var taskData = document.getElementById("task").value="";
//     var nameData = document.getElementById("name").value="";
// }

// function deleteElement(X){
//   data.splice(X,1);
//   show();
// }

// function updateElement(x){

// var update= '<input class="input" id="nameupdate" value=" '+ data[x]['name']+'" type="text"><input class="input" id="taskupdate" value=" '+ data[x]['task']+'" type="text"> <button class="check" onclick="doupdate(' + x +')"> <i class="far fa-check-square"></i></button>'
// document.getElementById("update").innerHTML= update;
// }

// function doupdate(x){
//     var name = document.getElementById("nameupdate").value;
//     var task = document.getElementById("taskupdate").value;
//     data[x]['name']= name;
//     data[x]['task']= task;
//     document.getElementById("update").innerHTML="";
//     show();
// }
