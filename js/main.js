var config = {
   apiKey: "AIzaSyC7thdx1y1WCEXCD3cKQXZw5BCd7GJgYzc",
    authDomain: "sf-web-6daf4.firebaseapp.com",
    databaseURL: "https://sf-web-6daf4.firebaseio.com",
    projectId: "sf-web-6daf4",
    storageBucket: "sf-web-6daf4.appspot.com",
    messagingSenderId: "951120782552",
    appId: "1:951120782552:web:158a98c4548c387ce3e3ad",
    measurementId: "G-5NJHYDW0MC"
};
firebase.initializeApp(config);
var messagesRef = firebase.database().ref('contactformmessages');
$('#contactForm').submit(function(e) {
    e.preventDefault();
 
    var newMessageRef = messagesRef.push();
    newMessageRef.set({
        name: $('.fullname').val(),
        phone: $('.phone').val(),
        subject: $('.subject').val(),
        message: $('.message').val()
    });
 
    $('.success-message').show();
 
    $('#contactForm')[0].reset();
});