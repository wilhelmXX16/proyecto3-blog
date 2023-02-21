const postDd = []
let baseID = 0

const findAllPosts = async() => {
    return await postDb
}

const findPostById = async(id) => {
    const data = postDd.find(post => post.id ===id)
    return data
}

const createPost = async(postObj) => {
    const newPost = {
        id: ++baseID,
        content: postObj.content,
        userName: postObj.userName,
        isPublished: 'true'
    }
    await postDd.push(newPost)
    return newPost

}

const updatePost = async() => {
    //? Your code here:

}

const deletePost = async() => {
    //? Your code here:

}

module.exports = {
    findAllPosts,
    findPostById,
    createPost,
    updatePost,
    deletePost
}
