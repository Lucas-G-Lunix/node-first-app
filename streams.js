// const {writeFile} = require('fs/promises')
//
// const createBigFile = async () => {
//     await writeFile('./data/bigFile.txt', 'Hello'.repeat(100000))
// }
//
//
// createBigFile()
//
const {createReadStream} = require('fs')

const stream = createReadStream('./data/bigFile.txt', {
    encoding: "utf-8"
})

stream.on('data', (chunk) => {
    console.log(chunk)
})

stream.on('end', ()=> {
    console.log('termino')
})

stream.on('error', (err)=>{
    console.log(err)
})