function notif(title,body,icon,open){
// hi lol I just took this from mdn
(async () => {
    // create and show the notification
    const showNotification = () => {
        // create a new notification
        const notification = new Notification(title, {
            body: body,
            icon: icon
        });

        // close the notification after 10 seconds
        setTimeout(() => {
            notification.close();
        }, 10 * 1000);

        // navigate to a URL when clicked
        notification.addEventListener('click', () => {

            window.open(open, '_blank');
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

notif("suggestions?","have any suggestions? click here to submit them!","https://github.com/RuralAnemone/ruralanemone.tech/issues/new?assignees=&labels=%E2%9C%A8+Enhancement&template=feature-request.yml&title=Feature+Request")