const express = require('express')
const app = express()

const tasks = require('./routes/tasks.js')
const connectDB =require('./db/connect')
require('dotenv').config()

//middlewares
app.use( express.static('./public') )
app.use( express.json())


//routes
app.use('/api/v1/tasks',  tasks)

// app.get('/api/v1/tasks')              -get all the tasks
// app.post('/api/v1/tasks')             -create a new task
// app.get('/api/v1/tasks/:id')          -get a single tasks
// app.patch('/api/v1/tasks/:id')        -update a  tasks
// app.delete('/api/v1/tasks/:id')       -delete a tasks





 
const port = 3000


const start = async () =>{
    try {
        await connectDB( process.env.MONGO_URI)
        app.listen( port, console.log(`server is listening on port ${port}`) )
    }
    catch(err){
        console.log(err)
    }
}

start()