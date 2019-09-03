document.getElementById("search").onclick = ()=>{
  var request = new XMLHttpRequest();
  var name = document.getElementById("name").value;
  if(name == ""){
    alert("Enter a value");
  }
  else{
    localStorage.setItem("name", name);
    var v= localStorage.getItem("name");
    console.log(v);
    window.open("Result.html","_self");
  }
};