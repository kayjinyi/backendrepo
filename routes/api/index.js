const router =  require('express').Router();
const userRoutes = require('./user-routes')

router.use('/userscore', userRoutes);

module.exports =  router;