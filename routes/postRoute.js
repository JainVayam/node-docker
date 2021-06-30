import express from 'express'

import * as PostController from '../controllers/postController.js'

const router = express.Router()

router
  .route('/')
  .get(PostController.getAllPosts)
  .post(PostController.createPost)

router
  .route('/:id')
  .get(PostController.getOnePost)
  .delete(PostController.deletePost)
  .patch(PostController.updatePost)

export default router