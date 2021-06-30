import express from 'express'
import mongoose from 'mongoose'

import config from './config/config.js'

const { MONGO_USER, MONGO_PASSWORD, MONGO_IP, MONGO_PORT } = config
const mongoURL = `mongodb://${MONGO_USER}:${MONGO_PASSWORD}@${MONGO_IP}/${MONGO_PORT}?authSource=admin`

mongoose.connect(mongoURL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false
  })
  .then(() => console.log("Successfully Connected"))
  .catch(e => console.log("Error is here", e))

const app = express()

const port = process.env.PORT || 3000

app.listen(port, () => console.log("Hello Worlasd"))

app.get('/ping', (req, res) => {
  console.log("PARFAIT")
  res.send("Tes123123teasdasdd dqwd Casdwqwehanged")
})