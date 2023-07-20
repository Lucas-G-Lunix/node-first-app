const fs = require('fs');

// const first = fs.readFileSync("./data/first.txt", "utf-8")
// const second = fs.readFileSync("./data/second.txt")
//
// console.log(first)
// console.log(second.toString())
//
// fs.writeFileSync("./data/third.txt", "archivo numero 3")
// const title = "contenido archivo numero 4"
// fs.writeFileSync("./data/four.txt", title)
// fs.writeFileSync("./data/four.txt", title, {
//     flag: "a"
// })

// fs.readFile("./thisFolderNotExist/first.txt",  (err, data) => {
//     if (err){
//         console.log(err)
//     }
//     console.log(data.toString())
// })

fs.readFile("./data/first.txt", "utf-8",  (err, data) => {
    if (err){
        console.log(err)
    }
    console.log(data)
    fs.readFile("./data/second.txt", "utf-8",  (err, data) => {
        if (err){
            console.log(err)
        }
        console.log(data)

        fs.writeFile("./data/archivoAsyncrono.txt", "archivo creado desde fs", (err) => {
            if (err){
                console.log(err)
            }
        })
    })
})