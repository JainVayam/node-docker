import express from 'express'

const app = express()

const port = process.env.port || 3000

app.listen(port)

app.get('/ping', (req, res) => {
  res.send("Tested Ok")
})