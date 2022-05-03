function register(){
  navigator.serviceWorker.register('sw.js');
  alert("done!\nyou'll now get update notifications\n\nalso help I have no idea how to do backends");
}

function swUpdate(input) {
  Notification.requestPermission(function(result) {
    if (result === 'granted') {
      navigator.serviceWorker.ready.then(function(registration) {
        registration.showNotification('Update:', {
          body: input,
          vibrate: [200, 100, 200, 100, 200, 100, 200],
          tag: 'update'
        });
      });
    }
  });
}