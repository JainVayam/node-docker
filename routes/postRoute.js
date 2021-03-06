import express from 'express'

import * as PostController from '../controllers/postController.js'
import protect from '../middleware/authMiddleware.js'

const router = express.Router()

router
  .route('/')
  .get(protect, PostController.getAllPosts)
  .post(protect, PostController.createPost)

router
  .route('/:id')
  .get(PostController.getOnePost)
  .delete(PostController.deletePost)
  .patch(PostController.updatePost)

export default router