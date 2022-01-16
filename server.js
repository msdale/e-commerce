const express = require('express');
const routes = require('./routes');
const sequelize = require('./config/connection');
const cliArgs = process.argv.slice(2);

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(routes);

/*sequelize.sync({ force: false })
.then(() => {
  app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}!`);
  });
});*/
if (cliArgs[0] && cliArgs[0].toLowerCase() === 'startover') {
  console.log(`
  *************************************************
  *** STARTING OVER...ALL EXISTING DATA IS LOST ***
  *************************************************
  `);
  sequelize.sync({ force: true }).then(() => {
    app.listen(PORT, () => console.log('Now listening'));
  });
} else {
  console.log("*** STARTING UP ***");
  sequelize.sync({ force: false }).then(() => {
    app.listen(PORT, () => console.log('Now listening'));
  });
}
