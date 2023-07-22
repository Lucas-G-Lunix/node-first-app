// async function loadData(){
//     const res = await fetch('https://jsonplaceholder.typicode.com/posts')
//     const data = await res.json()
//     console.log(data)
// }

// loadData()

try {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts')
    const data = await res.json()
    console.log(data)
} catch (err) {
    console.log(err)
}