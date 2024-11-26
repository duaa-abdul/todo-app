var input = document.getElementById("input-box");
var list = document.getElementById("listContainer");

function addTask() {
  if (input.value === "") alert("please enter something");
  else {
    var li = document.createElement("li");
    li.innerHTML = input.value;
    listContainer.appendChild(li);
    var span = document.createElement("span");
    span.innerHTML = "\u00d7";
    li.appendChild(span);
  }
  input.value = "";
  savaData();
}
listContainer.addEventListener(
  "click",
  function (e) {
    if (e.target.tagName === "LI") {
      e.target.classList.toggle("checked");
      savaData();
    } else if (e.target.tagName === "SPAN") {
      e.target.parentElement.remove();
      savaData();
    }
  },
  false
);

function savaData() {
  localStorage.setItem("data", listContainer.innerHTML);
}

function showTask() {
  listContainer.innerHTML = localStorage.getItem("data");
}
showTask();
