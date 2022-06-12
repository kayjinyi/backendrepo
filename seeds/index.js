const sequelize = require("../config/connection");
const {User} = require("../models")

const seed = async ()=>{
    await sequelize.sync({force:true})
    const users = await User.bulkCreate([
        {
            username:"Nolan",
            score: 100
        },
        {
            username:"Yi",
            score: 80
        },
        {
            username:"Surbhi",
            score: 120
        },
        {
            username:"Min",
            score: 50
        },
        {
            username:"Ester",
            score: 20
        },
        {
            username:"Sam",
            score: 10
        },

       
    ],{individualHooks:true})
    console.log(users);
}
seed();