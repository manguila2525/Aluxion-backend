const express = require('express')
const morgan = require('morgan');
const cors = require('cors');
const app = express()
const port = 3000

app.use(cors())
app.use(morgan('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.use('/api/stop', require('./routes/bus.routes'))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))