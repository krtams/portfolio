function checkState() {
  var word = document.getElementById("state").value;
  word = word.toLowerCase();

    if (word == "new jersey"){
       document.getElementById("results").innerHTML = window.location.href = "NewJerseyVote.html";
      }else if (word == "new york"){
        document.getElementById("results").innerHTML = window.location.href = "NewYorkVote.html";
      }else if (word == "california"){
        document.getElementById("results").innerHTML = window.location.href = "CaliVote.html";
      }else if (word == "ohio"){
        document.getElementById("results").innerHTML = window.location.href = "OhioVote.html";
      }else if (word == "texas"){
        document.getElementById("results").innerHTML = window.location.href = "TexasVote.html";
      }else if (word == "florida"){
        document.getElementById("results").innerHTML = window.location.href = "FloridaVote.html";
      }else if (word == "illinois"){
        document.getElementById("results").innerHTML = window.location.href = "IllinoisVote.html";
      }else if (word == "virginia"){
        document.getElementById("results").innerHTML = window.location.href = "VirginiaVote.html";
      }else if (word == "pennsylvania"){
        document.getElementById("results").innerHTML = window.location.href = "PennVote.html";
      }else if (word == "massachusetts"){
        document.getElementById("results").innerHTML = window.location.href = "MassVote.html";
      }
}
