//docker commands
function list_img() {

    var xhr = new XMLHttpRequest();
    xhr.open("GET", "http://192.168.1.7/cgi-bin/doc.py?x=docker images", true);
    xhr.send();

    xhr.onload = function () {
        var output = xhr.responseText;
        document.getElementById("op").innerHTML = output;
    }
}

function myFunction(){
    var mylist = document.getElementById("myList");
    var img_name = mylist.options[mylist.selectedIndex].text;
    image_os(img_name);
  }


  

//pulling-images using docker-hub
function image_os(x) {

    var xhr = new XMLHttpRequest();
    xhr.open("GET", "http://192.168.1.7/cgi-bin/docker-web.py?x=docker pull "+x, true);
    xhr.send();

    xhr.onload = function () {
        var output = xhr.responseText;
        document.getElementById("op").innerHTML = output;
    }
}


