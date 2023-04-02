const { Sequelize, DataTypes } = require("sequelize");

// -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

const sequelize = new Sequelize({
    dialect: "sqlite",
    storage: "parts.db",
    logging: (...msg) => console.log(msg),
    define: {
        freezeTableName: true,
    },
});

const testConnection = async () => {
    try {
        await sequelize.authenticate();
        console.log("Connection has been established in PartNameModel successfully");
    } catch (error) {
        console.error("Unable to connect to the database:", error);
    }
};
testConnection();

// -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// Model
const PartName = sequelize.define("PartName", {
    partname: {
        type: DataTypes.STRING,
        allowNull: false,
    },
});

// -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// Export the model and the sequelize connection
const db = { PartName, sequelize, Sequelize };

module.exports = db;

// -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
