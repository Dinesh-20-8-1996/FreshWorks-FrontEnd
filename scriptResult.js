window.onload = ()=>{
  var name = localStorage.getItem("name");
  var request = new XMLHttpRequest();
  request.open('GET', 'http://www.omdbapi.com/?apikey=6fb6505&s='+name, true);
  request.onload = function () {
    // Begin accessing JSON data here
    data = JSON.parse(this.response)["Search"];
    if (request.status >= 200 && request.status < 400) {
      var divNo = 1;
      const result = [];
      const map = new Map();
      if(!data){
        var div = document.getElementById(divNo.toString());
        div.innerText = "No Movie Found";
      }
      else{

        for (const item of data) {
          if(!map.has(item.Title)){
          map.set(item.Title, true);    // set any value to Map
          result.push(item);
          }
        }
        result.forEach(movie => {
          var div = document.getElementById(divNo.toString());
          var link = document.createElement("a");
          link.href = "https://www.imdb.com/title/"+movie.imdbID;
          var img = document.createElement("img");
          var temp = document.createElement("br");
          if(movie.Poster == "N/A"){
            img.src = "img.png";
          }
          else{
            img.src = movie.Poster;
          }
          img.alt = movie.Title;
          div.appendChild(link);
          link.appendChild(img);
          div.appendChild(temp);
          div.appendChild(document.createTextNode(movie.Title));
          divNo = divNo + 1;
        });
      }
    } else {
      alert("Error");
    }
  }
  request.send();
};