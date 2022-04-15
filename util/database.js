const Sequelize = require('sequelize');

const sequelize = new Sequelize('express', 'root', '123', {
    dialect: 'mysql',
    host: 'localhost'
});

module.exports = sequelize;