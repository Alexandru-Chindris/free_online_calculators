function century () {
    document.location.href = '/century/century_calculator.html';
    return false;
}

function github() {
    window.location.href = "https://github.com/Alexandru-Chindris/web_century_calculator";
}

function abt_creator() {
    let att = document.getElementById("footer");
    let span1 = document.createElement("span");
    span1.innerHTML="some uncompleted description :)";
    att.append(span1);
}
