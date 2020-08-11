var textEntered=document.getElementById("textEntered")
var content=document.getElementById("textContent")
document.getElementById("submit").onclick = function() {
    textEntered.innerHTML += " " + content.value;
    content.value = "";
}
document.querySelector('#reset').addEventListener('click',function(){
    textEntered.innerHTML = '';
    content.value='';
})