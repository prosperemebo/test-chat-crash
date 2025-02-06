/*
Give the service worker access to Firebase Messaging.
Note that you can only use Firebase Messaging here, other Firebase libraries are not available in the service worker.
*/
if ('function' === typeof importScripts) {
  importScripts('https://www.gstatic.com/firebasejs/7.16.0/firebase-app.js')
  importScripts('https://www.gstatic.com/firebasejs/7.16.0/firebase-messaging.js')

  /*
  Initialize the Firebase app in the service worker by passing in the messagingSenderId.
  */
  firebase.initializeApp({
    apiKey: "AIzaSyD6hueQAsoUSVBJUDLScqQaXyRTySfG1Do",
    authDomain: "gametree-staging.firebaseapp.com",
    databaseURL: "https://gametree-staging-default-rtdb.firebaseio.com",
    projectId: "gametree-staging",
    storageBucket: "gametree-99b5d.appspot.com",
    messagingSenderId: "634454295446",
    appId: "1:634454295446:web:41217eb768e294760d53b7",
    measurementId: "G-ZDJPKPTC64",
  })

  /*
  Retrieve an instance of Firebase Messaging so that it can handle background messages.
  */
  const messaging = firebase.messaging()

  //helper to receive url to redirect user when click notification
  const setScreen = (pushData) => {
    // TODO: build this with correct env
    let path = self.location.origin + "/app"
    switch (pushData.target) {
      case 'newMessages':
        path += '/chat/' + pushData.targetId
        break
      case 'friendJoined':
        path += '/chat/' + pushData.targetId
        break
      case 'feed':
        path += '/notifications/posts/' + pushData.targetId
        break
      case 'events':
        path += '/game-sessions/' + pushData.targetId
        break
    }
    return path
  }

  //action handler on click notification event
  self.addEventListener('notificationclick', function (event) {
    let url = event.notification.tag
    event.waitUntil(
      clients.matchAll({
        type: 'window',
        includeUncontrolled: true
      })
        .then(windowClients => {
          // Check if there is already a window/tab open with the target URL
          for (var i = 0; i < windowClients.length; i++) {
            var client = windowClients[i];
            // If so, just focus it.
            if (client.url === url && 'focus' in client) {
              return client.focus();
            }
          }
          // If not, then open the target URL in a new window/tab.
          if (clients.openWindow) {
            return clients.openWindow(url);
          }
        })
    );
  });

  messaging.setBackgroundMessageHandler(function (payload) {
    // Customize notification here
    const notificationTitle = payload.data.title ? payload.data.title : ''
    const tag = setScreen(payload.data)
    const notificationOptions = {
      body: payload.data.body,
      icon: payload.data.userAvatar,
      tag
    }
    
    return self.registration.showNotification(notificationTitle, notificationOptions);
  })
}
