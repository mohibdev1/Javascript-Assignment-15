

//  === todo app ====

function addTodo(){
    var input = document.getElementById("todo")
    var list = document.getElementById("list")
    // console.log(input.value);
    var todo = document.createTextNode(input.value)
    var li = document.createElement("li")
    li.appendChild(todo)
    var deleteBtn = document.createElement("button")
    deleteBtn.setAttribute("onclick", "delTodo()")
    var editBtn = document.createElement("button")
    var delBtnText = document.createTextNode("Delete")
    var editBtnText = document.createTextNode("Edit")
    deleteBtn.appendChild(delBtnText)
    editBtn.appendChild(editBtnText)
    li.appendChild(deleteBtn)
    li.appendChild(editBtn)
    list.after(li)
    input.value = ""
}

function delTodo(){
    event.target.parentNode.remove();
}
// function deleteAllTodo(){
    // var ulList = document.getElementById("list")
// }
