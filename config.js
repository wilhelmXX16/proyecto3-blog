require('dotenv').config()

const configs = {
    api : {
        nodeEnv: process.env.NODE_ENV,
        port: process.env.PORT,
        host: process.env.HOST
    },
    db: {
        development: {
            dialect: 'postgres',
            host: 'localhost',
            usermane: 'postgres',
            password: 'wjc',
            database: 'blogDB',
            define: {
                timestamps: true, 
                underscored : true
            }
        },
        test: {

        },
        production: {

        }
    }
}

module.exports = configs