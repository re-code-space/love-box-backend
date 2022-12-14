const express = require('express')
const dotenv = require('dotenv')
const cors = require('cors')

dotenv.config()
const app = express()

app.use(cors())

const PORT = process.env.PORT || 5000
app.listen(PORT, () => console.log(`server started at http://localhost:${PORT}`))