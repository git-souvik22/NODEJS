const EventEmitter = require('events');

const event = new EventEmitter();

// event.on('sayMyName', () =>{
//     console.log("My name is Souvik");
// })
// event.on('sayMyName', () =>{
//     console.log("My name is Sayandip");
// })
// event.on('sayMyName', () =>{
//     console.log("My name is Akash");
// })
// event.emit('sayMyName');

event.on('checkPage', (sc, msg) =>{
    console.log(`status code is ${sc} and the page is ${msg}`);
})
event.emit('checkPage', 200, 'ok');