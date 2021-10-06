'use strict'
const express = require('express')
const createError = require('http-errors')
const indexRoutes = require('./routes')
const helloRoutes = require('./routes/hello.js')
const testeRoutes = require('./routes/teste.js')

const app = express()

app.use('/', indexRoutes)
app.use('/hello', helloRoutes)
app.use('/teste', testeRoutes)

app.use((req, res, next) => {
  if (req.method !== 'GET') {
      console.dir(req)
      return
    next(createError(405))
    return
  }
  next(createError(404))
})

app.use((err, req, res, next) => {
  res.status(err.status || 500)
  res.send(err.message)
})

module.exports = app