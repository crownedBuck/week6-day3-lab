const express = require('express')

const app = express()

app.use(express.static(`${__dirname}/public`))

// include and initialize the rollbar library with your access token
var Rollbar = require('rollbar')
var rollbar = new Rollbar({
  accessToken: '32774ee7a22f4966b2ad52eeb3d7ae0d',
  captureUncaught: true,
  captureUnhandledRejections: true,
})

// record a generic message and send it to Rollbar
rollbar.log('Hello world!')

app.listen(4000, () => console.log(
    'So long and thank you for the fish'
))

