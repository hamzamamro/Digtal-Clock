setInterval(getTime,1000);

function getTime(){
    var date = new Date();
    document.querySelector(".clock").innerHTML = date.toLocaleTimeString();
}