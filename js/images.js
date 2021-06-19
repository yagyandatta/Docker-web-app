// list-image

function list_img() {

    var xhr = new XMLHttpRequest();
    xhr.open("GET", "http://192.168.1.7/cgi-bin/docker-web.py?x=docker images", true);
    xhr.send();

    xhr.onload = function () {
        var output = xhr.responseText;
        document.getElementById("op").innerHTML = output;
    }
}



// centos

function image_os(x) {

    var xhr = new XMLHttpRequest();
    xhr.open("GET", "http://192.168.1.7/cgi-bin/docker-web.py?x=docker pull "+x, true);
    xhr.send();

    xhr.onload = function () {
        var output = xhr.responseText;
        document.getElementById("op").innerHTML = output;
    }
}

// ubuntu

// function ubuntu() {

//     var xhr = new XMLHttpRequest();
//     xhr.open("GET", "http://192.168.1.7/cgi-bin/docker-web.py?x=docker pull ubuntu", true);
//     xhr.send();

//     xhr.onload = function () {
//         var output = xhr.responseText;
//         document.getElementById("op").innerHTML = output;
//     }
// }

// // nginx
// function nginx() {

//     var xhr = new XMLHttpRequest();
//     xhr.open("GET", "http://192.168.1.7/cgi-bin/docker-web.py?x=docker pull nginx", true);
//     xhr.send();

//     xhr.onload = function () {
//         var output = xhr.responseText;
//         document.getElementById("op").innerHTML = output;
//     }
// }

// // jenkins
// function jenkins() {

//     var xhr = new XMLHttpRequest();
//     xhr.open("GET", "http://192.168.1.7/cgi-bin/docker-web.py?x=docker pull jenkins", true);
//     xhr.send();

//     xhr.onload = function () {
//         var output = xhr.responseText;
//         document.getElementById("op").innerHTML = output;
//     }
// }


// // vimal13/apache-webserver-php
// function vimal() {

//     var xhr = new XMLHttpRequest();
//     xhr.open("GET", "http://192.168.1.7/cgi-bin/docker-web.py?x=docker pull vimal13/apache-webserver-php", true);
//     xhr.send();

//     xhr.onload = function () {
//         var output = xhr.responseText;
//         document.getElementById("op").innerHTML = output;
//     }
// }

























// image-history
// var u = "ubuntu:latest";
// var c = "centos:latest";

// function pull_img(c) {

//     var xhr = new XMLHttpRequest();
//     xhr.open("GET", "http://192.168.1.7/cgi-bin/docker-web.py?x=" + code, true);
//     xhr.send();

//     xhr.onload = function () {
//         var output = xhr.responseText;
//         document.getElementById("op").innerHTML = output;
//     }
     
// }



// test data

