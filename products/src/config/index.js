const dotEnv = require("dotenv");

// if (process.env.NODE_ENV !== "prod") {
//   const configFile = `./.env.${process.env.NODE_ENV}`;
//   dotEnv.config({ path: configFile });
// } else {
  dotEnv.config();
// }

module.exports = {
  PORT: process.env.PORT,
  DB_URL: process.env.MONGODB_URI,
  APP_SECRET: process.env.APP_SECRET,
  SHOPPING_URI: process.env.SHOPPING_URI,
  CUSTOMER_URI: process.env.CUSTOMER_URI,
};
