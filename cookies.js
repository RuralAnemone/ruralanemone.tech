function noNotifs(){
  document.cookie="notifs=false";
  alert("you'll now no longer get the notification every time you open my site");
}

function yesNotifs(){
  document.cookie="notifs=true";
  alert("you'll now get the notification every time you open my site");
}

function clear(){
  document.cookie="";
  alert("cleared!");
}