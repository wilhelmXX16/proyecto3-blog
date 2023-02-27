const {DataTypes} = require('sequelize')

const db = require('../utils/database')

const Posts = db.define('posts', {
    id:{
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    content:{
        type:DataTypes.TEXT,
        allowNull: false
    },
    userName:{
        type:DataTypes.STRING,
        allowNull: false
    },
    published: {
        type: DataTypes.BOOLEAN,
        defaultValue: "True"
    }

})

module.exports = Posts