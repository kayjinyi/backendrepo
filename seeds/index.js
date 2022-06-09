const sequelize = require("../config/connection");
const {User} = require("../models")

const seed = async ()=>{
    await sequelize.sync({force:true})
    const users = await User.bulkCreate([
        {
            username:"nser2",
            score: 100000
        },
        {
            username:"user1",
            score: 1
        },
       
    ],{individualHooks:true})
    console.log(users);
}
seed();