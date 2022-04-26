function notif(){
// hi lol I just took this from what basically amounts to mdn (javascripttutorials.net)
(async () => {
    // create and show the notification
    const showNotification = () => {
        // create a new notification
        const notification = new Notification('JavaScript Notification API', {
            body: 'This is a JavaScript Notification API test',
            icon: './images/UKRAINEpfp.png'
        });

        // close the notification after 10 seconds
        setTimeout(() => {
            notification.close();
        }, 10 * 1000);

        // navigate to a URL when clicked
        notification.addEventListener('click', () => {

            window.open('https://alt.ruralanemone.tech/notif', '_blank');
        });
    }

    // show an error message
    const showError = () => {
        const error = document.querySelector('.error');
        error.style.display = 'block';
        error.textContent = 'bruh what? allow notifications please';
        alert("You blocked the notifications! 😭");
        document.cookie="notifs=blocked";
    }

    // check notification permission
    let granted = false;

    if (Notification.permission === 'granted') {
        granted = true;
    } else if (Notification.permission !== 'denied') {
        let permission = await Notification.requestPermission();
        granted = permission === 'granted' ? true : false;
    }

    // show notification or error
    granted ? showNotification() : showError();

})();}
function beg(){
// hi lol I just took this from what basically amounts to mdn (javascripttutorials.net)
(async () => {
    // create and show the notification
    const showNotification = () => {
        // create a new notification
        const notification = new Notification('hi', {
            body: 'please donate to help fund my ever-growing debt :)',
            icon: './images/isforme.gif'
        });

        // close the notification after 10 seconds
        setTimeout(() => {
            notification.close();
        }, 69 * 1000);

        // navigate to a URL when clicked
        notification.addEventListener('click', () => {

            window.open('https://alt.ruralanemone.tech/donate', '_blank');
        });
    }

    // show an error message
    const showError = () => {
        const error = document.querySelector('.error');
        error.style.display = 'block';
        error.textContent = 'bruh what? allow notifications please';
    }

    // check notification permission
    let granted = false;

    if (Notification.permission === 'granted') {
        granted = true;
    } else if (Notification.permission !== 'denied') {
        let permission = await Notification.requestPermission();
        granted = permission === 'granted' ? true : false;
    }

    // show notification or error
    granted ? showNotification() : showError();

})();}
if ((document.cookie == "notifs=true")||(document.cookie == "")){
  if (document.cookie == ""){
    document.cookie = "notifs=true";
    beg();
  }
  notif();
}
function notifSpam(){
  alert("what in tarnation have you unleashed upon your computer");
  while(1){
    notif();
  }
}

function a() {
  alert("haven't set up service workers yet so just use the github ig");
}

function b() {
  
}