import User from '../models/userModel.js'

import bcrypt from 'bcryptjs'

const signUp = async (req,res) => {
  const {username, password} = req.body
  try {
    const hashedPassword = await bcrypt.hash(password, 12)
    const newUser = await User.create({username, password: hashedPassword})
    req.session.user = newUser
    res.status(201).json({
      data: {
        newUser
      }
    })
  } catch(e) {
    console.log("WAWAW", e, req.body)
    res.status(400).json({ error: e, status: 'Failed'})
  }
}

const login = async (req,res) => {
  const {username, password} = req.body
  try {
    const user = await User.findOne({username})
    if (!user) {
      return res.status(404).json({
        status: 'fail',
        message: 'User not found'
      })
    }
   const isCorrect =  bcrypt.compare(password, user.password)
   if (!isCorrect) {
    return res.status(404).json({
      status: 'fail',
      message: 'Wrong credentials'
    })
   }
   req.session.user = user
    res.status(201).json({
      data: {
        user
      }
    })
  } catch(e) {
    res.status(400).json({ status: 'Failed',data: e})
  }
}

export { signUp, login }