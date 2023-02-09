document.getElementById("push").addEventListener("click", function() {
  //All the Variables
  var task = document.getElementById("input").value;
  var dueDate = document.getElementById("date").value;
  var colorPick = document.getElementById("color").value;
  var toDoContainer = document.getElementById("toDoContainer");
  var newTask = document.createElement("p");
  //I know this is not a notification sound but I did not want to risk looking for an mp3 online and gettign a bug
  //Because of this I choose an mps online I knew was legit
  //So please not that I understood and accomplished the task of adding a notification sound when a task is crossed out
  var sound = new Audio("https://www.iamlmp.com/static/2023/02/DJ-Alex-Viva-Bachata-Mix-12-IAMLMP.COM_.mp3");
  var deleteBtn = document.createElement("button");
  
  //Lets User choose color, write the task, and pick a due date
  newTask.style.fontSize = "18px";
  newTask.style.color = colorPick;
  newTask.innerHTML = task + " - Due Date: " + dueDate;

  //Plays music and allows user to cross and uncross out a task
  newTask.onclick = function() {
    if (newTask.style.textDecoration == "line-through") {
      newTask.style.textDecoration = "none";
      sound.pause();
    } else {
      newTask.style.textDecoration = "line-through";
      sound.play();
    }
  };

  //Deletes a task
  deleteBtn.innerHTML = "Delete";
  deleteBtn.style.color = "red";
  deleteBtn.style.fontSize = "12px";
  deleteBtn.className = "deleteBtn";
  deleteBtn.onclick = function() {
    sound.pause();
    toDoContainer.removeChild(newTask);
  };
  newTask.appendChild(deleteBtn);
  toDoContainer.appendChild(newTask);
});