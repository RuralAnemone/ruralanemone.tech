function noNotifs(){
  document.cookie="notifs=false";
  alert("you'll now no longer get the notification every time you open my site");
}

function yesNotifs(){
  document.cookie="notifs=true";
  alert("you'll now get the notification every time you open my site");
}

function clear() {
    var cookies = document.cookie.split(";");

    for (var i = 0; i < cookies.length; i++) {
        var cookie = cookies[i];
        var eqPos = cookie.indexOf("=");
        var name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;
        document.cookie = name + "=;expires=Thu, 01 Jan 1970 00:00:00 GMT";
    }
  alert("cleared!");
}