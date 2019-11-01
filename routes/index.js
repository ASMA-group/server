const routes = require('express').Router();
const userRouter = require('./user')
const apis = require('./apis')

routes.use('/user', userRouter)
routes.use('/apis', apis)


module.exports = routes