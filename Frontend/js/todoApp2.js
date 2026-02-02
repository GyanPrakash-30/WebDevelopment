let input = document.querySelector("#todoInput");
let btn = document.querySelector("#addTodoBtn");
let todoList = document.querySelector("#todoList");

btn.addEventListener("click",function(){
    let item = document.createElement("li");
    item.innerText = input.value;
    todoList.appendChild(item);
    input.value = "";
    // Add delete button
    let deleteBtn = document.createElement("button");
    deleteBtn.innerText = "Delete";
    deleteBtn.classList.add("deleteBtn");
    item.appendChild(deleteBtn);
});
// Delete functionality
todoList.addEventListener("click", function(event){
    if(event.target.classList.contains("deleteBtn")){
        let li = event.target.parentElement;
        todoList.removeChild(li);
    }
});