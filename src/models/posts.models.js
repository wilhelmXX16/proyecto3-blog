const {DataTypes} = require('sequelize')

const bd = require('../utils/database')

const Posts = db.define('posts', {
    id:{
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    content:{
        type:DataTypes.STRING,
        allowNull: false
    },
    userName:{
        type:DataTypes.STRING,
        allowNull: false
    },
    isPublished: {
        type: Sequelize.BOOLEAN,
        defaultValue: "True",
    }

})

module.exports = Posts