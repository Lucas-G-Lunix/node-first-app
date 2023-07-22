const EventEmitter = require("events");

const customEmitter = new EventEmitter()

// customEmitter.on('response', (data) => {
//     console.log("recibido")
//     console.log(data)
// })

customEmitter.on('x', (data, secondData) => {
    console.log("recibido")
    console.log(data)
    console.log(secondData)
})

customEmitter.emit('x', 'Hello World', [1, 2, 3])
// customEmitter.emit('x', 'Fazt')
// customEmitter.emit('x', 30)
// customEmitter.emit('x', [1, 2, 3, 4])
// customEmitter.emit('x', {name: 'lucas'})