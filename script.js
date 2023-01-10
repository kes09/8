// 1. fetch

function getUsers() {
  fetch("https://reqres.in/api/unknown", {
    method : "GET",
  })
  .then(function (responsInfo) {
    if (responsInfo.status !==200){
       throw responsInfo.status;
    }
     return responsInfo.json();
  })
   .then(function(responseInFoJs){
    console.log(responseInFoJs);

    let ul = document.createElement("ul");

     responseInFoJs.data.forEach((element) => {
      let li = document.createElement("li");
      let colo = element.color;
      li.style.color = colo;
      li.textContent = `${element.name}`;
      li.style.fontSize = '30px';
      li.style.display = 'flex';
      li.style.right = '400px';
      ul.appendChild(li);
     });
     document.getElementById("api-users").appendChild(ul);
   })
   .catch(function (errorMessage) {
    console.log(errorMessage);
    if (errorMessage == 404) {
      let p = document.createElement("p");
      p.textContent = "Page Not Found";

      document.getElementById("api-users").appendChild(p);
    } else {
      let p = document.createElement("p");
      p.textContent = "Server Error";

      document.getElementById("api-users").appendChild(p);
    }
  });
  }

getUsers();

// 2 XML HTTP
function getNames(){
  let requist = new XMLHttpRequest();
  requist.addEventListener("load", function(){
    let mosuliInfo = this.responseText;
    let mosuliInfoJs = JSON.parse(mosuliInfo);
    console.log(mosuliInfoJs);
    let ul = document.createElement("ul");

     mosuliInfoJs.data.forEach((element) => {
      let li = document.createElement("li");
      let img = document.createElement("img");
      img.src = element.avatar;
      img.style.display = 'flex';
      img.style.maxHeight = '400px'
      img.style.maxWidth = '400px'
      li.textContent = `${element.first_name} ${element.last_name}`;
      li.style.fontSize = '20px';
      li.style.display = 'flex';

      li.appendChild(img)
      ul.appendChild(li);
     });
     document.getElementById("api-users").appendChild(ul);

  })
  requist.addEventListener("error", function () {
    let p = document.createElement("p");
    p.textContent = "Server Error";

    document.getElementById("api-users").appendChild(p);
  });

  requist.open("GET", "https://reqres.in/api/users?page=2");
  requist.send();
}
getNames();