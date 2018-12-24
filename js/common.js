function autosaveText() {
  var field = document.getElementById("comment-1");
  document.getElementById("btn").addEventListener("click", function(){
    localStorage.setItem("autosave",field.value);
  });
  if (localStorage.getItem("autosave")) {
    field.value = localStorage.getItem("autosave");
  }
  
};
autosaveText();