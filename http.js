const http = require("http")

// http.createServer(function (request, response) {
//
// })
const server = http.createServer((req, res) => {
    console.log(req.url)
    if (req.url === "/"){
        res.write("Welcome to the server")
        return res.end()
    }

    if (req.url === "/hello"){
        res.write("acerca de")
        return res.end()
    }
    res.write(`
    <h1>Not Found</h1>
    <p>Esta pagina no se ha encontrado</p>
    <a href="/">Volver a pagina principal</a>
    `)
    res.end()
})

server.listen(3000)

console.log("Servidor escuchando puerto 3000")