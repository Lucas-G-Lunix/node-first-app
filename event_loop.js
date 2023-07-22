const http = require("http")

const server = http.createServer(
    (req, res)=>{
        if (req.url === "/"){
            res.write("Welcome to the server!")
            return res.end()
        }

        if (req.url === "/about"){
            // res.write("about")
            // Blocking Code
            // for (let i = 0; i < 100000; i++) {
            //     console.log(Math.random() * i)
            // }
            return res.end("About Page")
        }

        res.end("not found")
    }
)

server.listen(3000)



// console.log("first")
// setTimeout(() => {
//     console.log("second")
// }, 0)
// console.log("third")