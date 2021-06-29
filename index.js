import express from 'express'

const app = express()

const port = process.env.PORT || 3000

app.listen(port, () => console.log("Hello Worlasd"))

app.get('/ping', (req, res) => {
  console.log("PARFAIT")
  res.send("Tes123123teasdasdd dqwd Casdwqwehanged")
})