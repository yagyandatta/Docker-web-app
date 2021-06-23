function docker(x) {

    var xhr = new XMLHttpRequest();
    xhr.open("GET", "http://192.168.1.16/cgi-bin/docker_api.py?x=docker "+x, true);
    xhr.send();

    xhr.onload = function () {
        var output = xhr.responseText;
        document.getElementById("op").innerHTML = output;
    }
}
