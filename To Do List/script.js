var submit = document.querySelector("#submit");
var ToDo = document.querySelector("#inputTask");
submit.addEventListener("click", function(){
    document.getElementById("list").innerHTML += "<li class='listItem'>"+ToDo.value+"<button class='remove'>remove</button>"+"<button class='complete'>done</button>";
    ToDo.value = "";
})
document.addEventListener("click", function() {
    const item = event.target;
    if(item.classList[0] == "remove") {
        const removeItem = item.parentElement;
        removeItem.remove();
    }
    else if(item.classList[0] == "complete") {
        const completeItem = item.parentElement;
        completeItem.classList.toggle('completed');
    }
})