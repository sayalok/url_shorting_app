const express   	= require('express')
const connectDb 	= require('./config/db')

const indexRoute 	= require('./routes/index')
const urlRoute 		= require('./routes/url')

const app = express()
connectDb()

app.use(express.json(false))

app.use('', indexRoute )
app.use('/api/url', urlRoute)

const port = 3030
app.listen(port, () => [
    console.log('ok')
])