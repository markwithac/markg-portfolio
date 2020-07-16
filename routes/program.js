const express = require('express')
const router = express.Router()

router.use(express.static('public'))

router.get('/clock', (req, res) => {
  res.render('clock')
})

router.get('/tip-calculator', (req, res) => {
  res.render('tip-calculator')
})

module.exports = router;