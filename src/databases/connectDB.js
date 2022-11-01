const {Sequelize} = require('sequelize');
require('dotenv').config();

const db_name = process.env.DB_NAME;
const db_user = process.env.DB_USER;
const db_password = process.env.DB_PASSWORD;
const db_host = process.env.DB_HOST;

console.log("db_name: " + db_name);
console.log("db_user: " + db_user);
console.log("db_host: " + db_host);

// Create a new Sequelize instance.
const sequelize = new Sequelize('postgres://eiimyzzm:49-JLhE-3dvOaft3kYFGzrqV6yT-38Z3@peanut.db.elephantsql.com:5432/eiimyzzm');

const connectDB = async () => {
    // Connect to the database.
    const dbConnect = await sequelize.authenticate();
    return dbConnect;
}



module.exports = connectDB;