const express = require("express")
const app = express()
const PORT = 3000
const programRouter = require('./routes/program.js')

app.set('view engine', 'pug')

app.use(express.static('public'))
app.use('/app', programRouter)

app.get('/', (req, res) => {
  res.render('index')
})

app.listen(PORT, () => {console.log(`Listening on port ${PORT}.`)})