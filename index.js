import express from 'express'
import mongoose from 'mongoose'
import session from 'express-session'
import redis from 'redis'
import Redis from 'connect-redis'
import cors from 'cors'

import config from './config/config.js'
import postRouter from './routes/postRoute.js'
import authRouter from './routes/authRouter.js'

const { SESSION_SECRET, REDIS_URL, REDIS_PORT, MONGO_USER, MONGO_PASSWORD, MONGO_IP, MONGO_PORT, MONGO_DB } = config
const mongoURL = `mongodb://${MONGO_USER}:${MONGO_PASSWORD}@${MONGO_IP}:${MONGO_PORT}/${MONGO_DB}?authSource=admin`
const RedisStore = Redis(session)

mongoose.connect(mongoURL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false
  })
  .then(() => console.log("Successfully Connected"))
  .catch(e => console.log("Error is here", e))

const redisClient = redis.createClient({
  host: REDIS_URL,
  port: REDIS_PORT
})

const app = express()

const port = process.env.PORT || 3000

app.use(cors({}))
app.use(express.json())
app.use(session({
  store: new RedisStore({ client: redisClient }),
  secret: SESSION_SECRET,
  cookie: {
    secure: false,
    resave: false,
    saveUninitialized: false,
    httpOnly: true,
    maxAge: 30000
  }
}))

app.set('trust proxy')

app.use('/api/v1/posts', postRouter)
app.use('/api/v1/user', authRouter)
app.get('/api/v1/ping', (req, res) => {
  console.log("ASDASDASDASDA")
  res.send("Tested Oasdk")
})

app.listen(port, () => console.log("Hello World"))

