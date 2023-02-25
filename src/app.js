// dependencies
const express = require('express')

// router import
const useRouter = require('./posts/posts.router')
// import DB
const db =  require('./utils/database')

const app = express()

db.authenticate()
    .then(() => {
        console.log('Las credenciales de la BD son correctas')
    })
    .catch((err)=> {
        console.log(err)
    })

db.sync()
    .then(() => {
        console.log('La BD se sincronizo correctamente')
    })
    .catch((err)=>{
        console.log(err)
    })

//json request
app.use(express.json())

app.get('/', (req,res) => {
    res.json({
        message: 'Server Ok!',
        router: {
            posts: 'http://localhost:9000/api/v1/posts'
        }
    })
})

//api router
app.use('/api/v1', useRouter)

// start server 
app.listen(9000, () => {
    console.log(`server started at port 9000!`)
})


module.exports = app
