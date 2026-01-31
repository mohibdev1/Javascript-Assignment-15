
function addTodo(){
    var input = document.getElementById("todo")
    var list = document.getElementById("list")

    var li = document.createElement("li")
    var todoText = document.createTextNode(input.value)
    li.appendChild(todoText)

    var deleteBtn = document.createElement("button")
    deleteBtn.setAttribute("onclick", "delTodo()")
    deleteBtn.appendChild(document.createTextNode("Delete"))

    var editBtn = document.createElement("button")
    editBtn.setAttribute("onclick", "editTodo(this)")
    editBtn.appendChild(document.createTextNode("Edit"))

    li.appendChild(deleteBtn)
    li.appendChild(editBtn)

    list.appendChild(li)
    input.value = ""
}

function delTodo(){
    event.target.parentNode.remove();
}

function editTodo(e){
    var oldValue = e.parentNode.firstChild.nodeValue;
    var newValue = prompt("Edit Todo", oldValue);

    if(newValue !== null && newValue !== ""){
        e.parentNode.firstChild.nodeValue = newValue;
    }
}

function deleteAllTodo(){
    var ulList = document.getElementById("list");
    ulList.innerHTML = "";
}

