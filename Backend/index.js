const express = require('express')
const app = express()
const cors = require('cors')
const cookieParser = require('cookie-parser')



app.use(cors({
  credentials:true,
  origin:"http://localhost:5173"
}))

require('./connections');
require('dotenv').config({path:"./config.env"})

const port = process.env.PORT || 4000;

app.use(express.json());
app.use(cookieParser())

const UserRoutes = require('./routes/users')
const PostRoutes = require('./routes/posts')

app.use('/api/auth', UserRoutes)
app.use('/api/post', PostRoutes)

app.listen(port , () => {
  console.log(`example app listenig on port ${port}`)
}
)