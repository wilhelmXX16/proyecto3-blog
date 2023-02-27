const postsServices = require('./posts.services')

const router = require('express').Router()

router.get('/posts', postsServices.getAllPosts)
router.post('/posts', postsServices.postNewPosts)


router.get('/posts/:id', postsServices.getPostById)
router.patch('/posts/:id', postsServices.patchPosts)
router.put('/posts/:id', postsServices.putPosts)

router.delete('/posts/:id', postsServices.deletePosts)


module.exports = router
