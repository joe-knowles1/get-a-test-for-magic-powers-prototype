// External dependencies
const express = require('express')

const router = express.Router()

// Add your routes here - above the module.exports line


router.post('/answer-fingers', function (req, res) {
  const data = req.session.data
  const howmanyfingers = data.howmanyfingers

  if (howmanyfingers === "One") {

    res.redirect('/ineligible')

  } else if (howmanyfingers === "Two") {

    res.redirect('/ineligible')

  } else if (howmanyfingers === "Sixteen") {

    res.redirect('/question-pot')

  } else {

    // No answer selected, return to question
    res.redirect('/question-fingers')

  }
})



module.exports = router
