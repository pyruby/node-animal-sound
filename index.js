const express = require('express')
var cors = require('cors')
const app = express()
const PORT = 8080

app.use(cors())

app.get('/', (req, res) => {
    res.send('Hello, World')
    //res.send("<a href='https://www.naver.com/'>네이버</a>")
})

// app.get('/user/:id', (req, res) => {
//     const q = req.params
//     console.log(q.id)
//     res.json({'userid': q.id})
// })

app.get('/sound/:name', (req, res) => {
    const { name } = req.params
    console.log(name)

    if(name == 'dog') {
        res.json({'sound': 'Bow Wow'})
    } else if(name == 'cat') {
        res.json({'sound': 'Myao'})
    } else if(name == 'pig') {
        res.json({'sound': 'Oint Oint'})
    } else {
        res.json({'sound': 'Unknown'})
    }
})





app.listen(PORT, () => {
    console.log(`Apiarian app listening on port ${PORT}`)
})
