const path = require("path")

const filePath = path.join("/public", "users", "index.html")


console.log(path.basename(filePath))
console.log(path.dirname(filePath))
console.log(path.parse(filePath))
console.log(path.resolve("hello"))