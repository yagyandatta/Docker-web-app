function w_images() {
    var watch = document.getElementById("myList");

    var xhr = new XMLHttpRequest();
    xhr.open("GET", "http://192.168.1.7/cgi-bin/docker-web.py?x=watch docker images", true);
    xhr.send();

    xhr.onload = function () {
        var output = xhr.responseText;
        document.getElementById("d_img").innerHTML = output;
    }
    document.getElementById("d_img").innerHTML = output;

}


document.addEventListener("DOMContentLoaded", function() {
    w_images();
  });