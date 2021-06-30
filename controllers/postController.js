import Post from '../models/postModel.js'

const getAllPosts =  async (req,res) => {
  try {
    const posts = await Post.find()
    res.status(200).json({
      status: 'success', 
      results: posts.length,
      data: {
        posts
      }
    })
  } catch(e) {
    res.status(400).json({
      status: failed
    })
  }
}

const getOnePost =  async (req,res) => {
  try {
    const post = await Post.findById(req.params.id)
    res.status(200).json({
      status: 'success', 
      data: {
        post
      }
    })
  } catch(e) {
    res.status(400).json({
      status: failed
    })
  }
}

const createPost = async (req, res) => {
  try {
    console.log('QWQWEQWE', req.body)
    const newPost = await Post.create(req.body)
    res.status(200).json({
      status: 'success', 
      data: {
        newPost
      }
    })
  } catch(e) {
    res.status(400).json({
      status: failed
    })
  }
}

const updatePost =  async (req,res) => {
  try {
    const post = await Post.findByIdAndUpdate(req.params.id,  req.body, {
      new: true,
      runValidators: true,
    })
    res.status(200).json({
      status: 'success', 
      data: {
        post
      }
    })
  } catch(e) {
    res.status(400).json({
      status: failed
    })
  }
}

const deletePost =  async (req,res) => {
  try {
    await Post.findByIdAndDelete(req.params.id)
    res.status(200).json({
      status: 'success', 
    })
  } catch(e) {
    res.status(400).json({
      status: failed
    })
  }
}

export { getAllPosts, getOnePost, updatePost, createPost, deletePost }