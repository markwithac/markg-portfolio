const express = require("express")
const app = express()
const PORT = process.env.PORT || 5000  // for herkou port
const programRouter = require('./routes/program.js')
const db = require('./db');

const { Library } = db.models;

app.set('view engine', 'pug')

app.use(express.static('public'))
app.use('/app', programRouter)

app.get('/', (req, res) => {
  res.render('index')
});

(async () => {
  await db.sequelize.sync({ force: true });
  try {
    await Library.create({ title: 'The Name of the Wind', author: 'Patrick Rothfuss', year: 2007 });
    await Library.create({ title: "The Wise Man's Fear", author: 'Patrick Rothfuss', year: 2011 });
    await Library.create({ title: "The Doors of Stone", author: 'Patrick Rothfuss' });
  } catch (error) {
    console.error('Error connecting to the database: ', error);
  }
})();

app.listen(PORT, () => {console.log(`Listening on port ${PORT}.`)})