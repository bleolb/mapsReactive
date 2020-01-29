const Sequelize = require("sequelize");

const db = require("../database/db");

module.exports = db.sequelize.define("domes", {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    latitud: {
        type: Sequelize.STRING
    },
    longitud: {
        type: Sequelize.STRING
    },
    fecha: {
        type: Sequelize.DATE
    },
    nombre: {
        type: Sequelize.STRING
    }
});