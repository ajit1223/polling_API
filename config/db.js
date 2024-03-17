// const dotenv = require("dotenv");
const mongoose = require('mongoose');

mongoose.set("strictQuery", false);

// dotenv.config();

PORT = 8000;
DB_URL = "mongodb+srv://ajitkumaryadav1223:GLtKU4wrRAtO9BoF@clusterpolling.xnptrib.mongodb.net/?retryWrites=true&w=majority&appName=ClusterPolling";

const connectWithDb = () => {
  mongoose.connect(process.env.DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
    .then(console.log(`DB connected successfully`))
    .catch((error) => {
      console.log(`DB connection failed`);
      console.log(error);
      process.exit(1);
    });
};

module.exports = connectWithDb
