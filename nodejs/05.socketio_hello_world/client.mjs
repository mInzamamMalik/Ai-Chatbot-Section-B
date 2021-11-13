import io from 'socket.io-client';

// const socket = io("https://myap_name.herokuapp.com"); // to connect hosted server on heroku
const socket = io("http://localhost:5001"); // to connect with locally running Socker.io server

socket.on('connect', function () {
    console.log("connected")
});

// to subcribe to a topic
socket.on('Test topic', function (data) {
    console.log(data);
});

socket.on('disconnect', function (message) {
    console.log("Socket disconnected from server: ", message);
});

// setTimeout(() => {
//     console.log("attemptimg to disconnect from server");
//     socket.close(); //force disconnect from server
// }, 3000)