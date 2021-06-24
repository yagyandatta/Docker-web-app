function docker(x) {

    var xhr = new XMLHttpRequest();
    xhr.open("GET", "http://192.168.1.16/cgi-bin/docker_api.py?x=docker  "+x, true);
    xhr.send();

    xhr.onload = function () {
        var output = xhr.responseText;
        document.getElementById("op_con").innerHTML = output;
    }
    
}






function con_image() {
    document.getElementById("mid_con").innerHTML =
    '<form onsubmit="run_con()">'+
    '<b> Enter Your Image Name: </b>'+
    '<input type = "text" id = "c_image" size = "30" </p>'+
    '<input type="submit" value="Launch"></input>'
    '</form>';
}

function con_name() {
    document.getElementById("mid_con").innerHTML =
    '<form onsubmit="con_image()">'+
    '<b> Type new container Name: </b>'+
    '<input type = "text" id = "c_name" size = "30" </p>'+
    '<input type="submit" value="Next"></input>'
    '</form>';
}


// list-containers
function list_con() {
    var code = "ps";
    docker(code);
}


// list-all-containers
function list_con_all() {
    var code = "ps -a";
    docker(code);
}


// launch-containers
function run_con() {
    var i_con = document.getElementById("c_image").value;
    var n_con = document.getElementById("c_name").value;
    // var code = "run -it --name "+ n_con + i_con ;
    alert("i_con" + "n_con");
    //docker(code);
}


function rm_con() {
    var code = "ps";
    docker(code);
}

