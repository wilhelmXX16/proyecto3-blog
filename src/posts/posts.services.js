//* import controllers
const postsControllers = require('./posts.controllers')

// funtions req and res, services
const getAllPosts = (req,res) => {
    postsControllers.findAllPosts()
        .then(data => {
            res.status(200).json(data)
        })
        .catch(err => {
            res.status(400).json(err)
        })
}

const getPostById = (req,res) => {

    const id = Number(req.params.id)

    postsControllers.findPostById(id)
        .then(data => {
            if(data){
                res.status(200).json(data)
            } else{
                res.status(404).json({message: 'Posts not found'})
            }
        })
        .catch(err => {
            res.status(400).json(err)
        })
}

const postNewPosts = (req,res) =>{
    const postObj = req.body
    postsControllers.createPost(postObj)
        .then(data => {
            res.status(201).json(data)
        })
        .catch(err => {
            res.status(400).json(err)
        })
    }


module.exports = {
    getAllPosts,
    getPostById,
    postNewPosts
}