const { Sequelize, DataTypes } = require("sequelize");

// -=-=-=-=-=-=-=-=-=-=-=-==-=-=-=-=-=--=-=-=-=-=- //

// Set up sequelize connection to the database
const sequelize = new Sequelize({
    dialect: "sqlite",
    storage: "parts.db",
});

// Test the connection
const testConnection = async () => {
    try {
        await sequelize.authenticate();
        console.log("Connection has been established successfully.");
    } catch (error) {
        console.error("Unable to connect to the database:", error);
    }
};
testConnection();

// -=-=-=-=-=-=-=-=-=-=-=-==-=-=-=-=-=--=-=-=-=-=- //

// Define the model
const Fasteners = sequelize.define("Fastener", {
    // Model attributes
    partnumber: {
        type: DataTypes.STRING,
    },
    description: {
        type: DataTypes.STRING,
    },
    quantity: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    price: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
});

// Sync the model with the database
const syncModel = async () => {
    await Fasteners.sync({ force: true });
    console.log("The table for the Fastener model was just (re)created!");
};

syncModel();

// -=-=-=-=-=-=-=-=-=-=-=-==-=-=-=-=-=--=-=-=-=-=- //

module.exports = Fasteners;
