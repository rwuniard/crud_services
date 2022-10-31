const {Sequelize} = require('sequelize');

const sequelize = new Sequelize('postgres://eiimyzzm:49-JLhE-3dvOaft3kYFGzrqV6yT-38Z3@peanut.db.elephantsql.com:5432/eiimyzzm');

const connectDB = async () => {
    // Connect to the database.
    const dbConnect = await sequelize.authenticate();
    return dbConnect;
}



module.exports = connectDB;