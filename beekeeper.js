
function verifyPass() {
    var passOne = document.forms["mainform"]["password"].value;
    var passTwo = document.forms["mainform"]["verify"].value;
    if (passOne === passTwo) {
        password = passOne;
        return true;
    } else {
        alert("Ensure passwords match");
        return false;
    }
}

function sacred() {
    let user = document.getElementById("username").value;

    if (user.toLowerCase() == "jbillz" || user.toLowerCase() == "pineapplesbelongonpizza" || user.toLowerCase() == "therock" || user.toLowerCase() == "zachking" || user.toLowerCase() == "rihanna" || user.toLowerCase() == "microsoft" || user.toLowerCase() == "actionjackson") {
        alert("Bezos reserved this username");
        document.forms["mainform"]["username"].value = "";
    }
}

function userLength() {
    let user = document.getElementById("username").value;

    if (user.length < 8) {
        alert("Username must be 8 at least characters long.");
        return false;
    } else if (user.length > 25) {
        alert("Username must be less than 26 characters long.");
        return false;
    } else {
        return true;
    }
}

function complete() {
    var table = document.getElementById("myTable");
    var row = table.insertRow();
    var query = location.search;
    var info = query.split('&');
    var user = info[0].replace("?username=", "");
    document.getElementById("hello").innerHTML = "Hello: " + user + "!";
    for (var i = 0; i < info.length; i++) {
        var cell = row.insertCell();
        var data = info[i].split('=');
        cell.innerHTML = data[1].replace("%40", "@");
    }
}
