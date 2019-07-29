const express   = require('express')
const connectDb = require('./config/connectDb')

const app = express()
connectDb()

app.use(express.json(false))

// app.use('', (req,res,next) => {
//     console.log('conected ... ')
// })

app.listen(3030, () => [
    console.log('ok')
])