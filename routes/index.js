const router =  require('express').Router();
const path = require('path');
const apiRtes = require('./api')

router.use('/api', apiRtes)

router.use((req, res)=> {
    res.sendFile(path.join(__dirname, '../../client/build/index.html'))
})

module.exports =  router