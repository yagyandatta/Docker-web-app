function openPage(pageName, elmnt, color) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablink");
  for (i = 0; i < tablinks.length; i++) {
      tablinks[i].style.backgroundColor = "";
  }
  document.getElementById(pageName).style.display = "block";
  elmnt.style.backgroundColor = color;
}

// Get the element with id="defaultOpen" and click on it
document.getElementById("defaultOpen").click();



// images
// function l_img() {

//   var xhr = new XMLHttpRequest();
//   xhr.open("GET", "http://192.168.1.7/cgi-bin/docker-web.py?x=ls", true);
//   xhr.send();

//   xhr.onload = function() {
//       var output = xhr.responseText;
//       document.getElementById("op").innerHTML = "gggoutput";
//   }
// }

function l_img() {
  var xhr = new XMLHttpRequest();
  xhr.open("GET", "http://192.168.1.7/cgi-bin/docker-web.py?x=ls", false);
  xhr.send();
  var opp = xhr.responseText;
  // document.getElementById("op").innerHTML = opp;
  alert(opp);
  
}