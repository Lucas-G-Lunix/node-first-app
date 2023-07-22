const {readFile} = require("fs/promises")

async function read(){
    try {
        const result = await readFile("./data/four.txt", "utf-8")
        const result2 = await readFile("./data/first.txt", "utf-8")
        console.log(result)
        console.log(result2)
        // throw new Error("esto es un error")
        const result3 = await readFile("./data/second.txt", "utf-8")
        const result4 = await readFile("./data/third.txt", "utf-8")
        console.log(result3)
        console.log(result4)
    } catch(err) {
        console.log(err)
    }
}

read()


// const {promisify} = require("util")
// const readFilePromise = promisify(readFile)

// async function read(){
//     try {
//         const result = await readFilePromise("./data/four.txt", "utf-8")
//         const result2 = await readFilePromise("./data/first.txt", "utf-8")
//         console.log(result)
//         console.log(result2)
//         // throw new Error("esto es un error")
//         const result3 = await readFilePromise("./data/second.txt", "utf-8")
//         const result4 = await readFilePromise("./data/third.txt", "utf-8")
//         console.log(result3)
//         console.log(result4)
//     } catch(err) {
//         console.log(err)
//     }
// }
// read().then(() => {})
// read()

// const getText = (filePath) => {
//     return new Promise(function (resolve, reject) {
//         readFile(filePath, "utf-8", (err, data) => {
//             if (err) {
//                 reject(err)
//             }
//             resolve(data)
//         },)
//     })
// }

// async function read(){
//     try {
//         const result = await getText("./data/four.txt")
//         const result2 = await getText("./data/first.txt")
//         console.log(result)
//         console.log(result2)
//         // throw new Error("esto es un error")
//         const result3 = await getText("./data/second.txt")
//         const result4 = await getText("./data/third.txt")
//         console.log(result3)
//         console.log(result4)
//     } catch(err) {
//         console.log(err)
//     }
// }
//
// read()

// getText("./data/four.txt")
//     .then((result) => { console.log(result) })
//     .then(() => getText('./data/first.txt'))
//     .then((result) => {console.log(result)})
//     .catch(error => console.log(error))

// function getText(filePath){
//     return new Promise(function (resolve, reject) {
//         readFile(filePath, "utf-8", (err, data) => {
//             if (err) {
//                 reject(err)
//             }
//             resolve(data)
//         },)
//     })
// }


// new Promise(function (resolve, reject) {
//     readFile("./data/first.txt", "utf-8", (err, data) => {
//         if (err) {
//             reject(err)
//         }
//         resolve(data)
//     },)
// })



