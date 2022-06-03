const express = require('express');
const path = require('path')
const sequelize = require('./config/connection')
const routes = require('./routes')
const helpers= require('./util/helpers')
const cors= require('cors')
const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.urlencoded({ extended: true}));
app.use(express.json());
app.use(cors({
  origin:"https://koolgamebackend.herokuapp.com/"
}));
// if(process.env.NODE_ENV === 'production'){
//   app.use(express.static(path.join(__dirname, '../client.build')))
// }

app.use(routes);

sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log("Now listening"));
});
