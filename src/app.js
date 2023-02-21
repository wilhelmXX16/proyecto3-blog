// dependences
const express = require('express')

// router import

//const useRouter = require('./posts/posts.router')

//config port
const port = 9000
const app = express()

//json request
app.use(express.json())

app.get('/', (req,res) => {
    res.status(200).json({message: 'ok port!'})
})

//api router
//app.use('/api', useRouter)

// start server 
app.listen(port, () => {
    console.log(`server started at port ${port}!!!`)
})


module.exports = app
