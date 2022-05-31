const {User} = require('../models');

module.exports = {
    async getUser(req, res){
        // this function should return only top ten scores. highest to lowest
        const userScores = await User.findAll()

        res.json(userScores)
    },
    async createUser(req, res){
        const newUserScore = await User.create(req.body)
        res.json(newUserScore)
    }
}