const postsServices = require('./posts.services')

const router = require('express').Router()

router.get('/posts', postsServices.getAllPosts)
router.post('/posts', postsServices.postNewPosts)


router.get('/posts/:id', postsServices.getPostById)


module.exports = router
