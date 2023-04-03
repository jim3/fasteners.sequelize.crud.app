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

// Parts Model
const Parts = sequelize.define("Parts", {
    partType: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    partName: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    quantity: {
        type: DataTypes.INTEGER,
    },

    price: {
        type: DataTypes.DECIMAL(10, 2),
    },
});

// -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// Export the model and sequelize connection
const db = { Parts, sequelize, Sequelize };
module.exports = db;
