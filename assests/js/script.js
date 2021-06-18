
 var data=[];

function add(){
   
     var taskData = document.getElementById("task").value
     var nameData = document.getElementById("name").value
     var ob ={
         task:taskData , name:nameData};

         data.push(ob);
        show();
        reset();
       
}

function show (){
    var  st='';
    var count = data.length;
    for ( var i=0; i< count; i++){
         st += "<div class='flex'> <span> "+ data[i]['name']+"  </span> <h2 class= 'st'>" + data[i]['task'] + "</h2> <button class= 'del' onclick='deleteElement(" + i + ")' > <i class='far fa-trash-alt'></i> </button>"+"<button class='but' onclick='updateElement(" + i + ")' > update </button> </div>" ;
    }
    document.getElementById("result").innerHTML = st;
}

function reset(){
    var taskData = document.getElementById("task").value="";
    var nameData = document.getElementById("name").value="";
}

function deleteElement(X){
  data.splice(X,1);
  show();
}

function updateElement(x){

var update= '<input class="input" id="nameupdate" value=" '+ data[x]['name']+'" type="text"><input class="input" id="taskupdate" value=" '+ data[x]['task']+'" type="text"> <button class="check" onclick="doupdate(' + x +')"> <i class="far fa-check-square"></i></button>'
document.getElementById("update").innerHTML= update;
}

function doupdate(x){
    var name = document.getElementById("nameupdate").value;
    var task = document.getElementById("taskupdate").value;
    data[x]['name']= name;
    data[x]['task']= task;
    document.getElementById("update").innerHTML="";
    show();
}
