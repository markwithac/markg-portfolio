const express = require('express')
const router = express.Router()
const bodyParser = require('body-parser')
const db = require('../db');

const { Library } = db.models;

router.use( bodyParser.json() );       // to support JSON-encoded bodies
router.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true
}));

router.use(express.static('public'))

router.get('/clock', (req, res) => {
  res.render('clock')
})

router.get('/tip-calculator', (req, res) => {
  res.render('tip-calculator')
})

router.get('/weather', (req, res) => {
  res.render('weather')
})

router.get('/tictactoe', (req, res) => {
  res.render('tictactoe')
})

// LIBRARY 

router.get('/library',  async (req, res) => {
  const books = await Library.findAll();
  res.render('library', { books })
})

router.post('/library/add', async (req, res) => {
    await Library.create({
        title: req.body.title
      });
      console.log(req.body.title)
  res.redirect('/app/library')
})

router.post('/library/remove/:id', async (req, res) => {
  const book = await Library.findByPk(req.params.id)
  await book.destroy()
  res.redirect('/app/library')
})

module.exports = router;