const Sequelize = require('sequelize');

class SequelizeClass {

    constructor() {
        this.cnn = new Sequelize(process.env.DATABASE, process.env.USER, process.env.PASSWORD, {
            host: process.env.HOST,
            port: process.env.HOST,
            dialect: process.env.DIALECT
        });
    }

    static get instance() {
		return this._instance || ( this._instance = new this() );
    }
    
    static testConection () {

        this.instance.cnn.authenticate()
        .then(() => {
            console.log('Connection has been established successfully.');
        })
        .catch(err => {
            console.error('Unable to connect to the database:', err);
        });
    }

    static get appInstance() {
        return this.instance.cnn;
    }
}

module.exports = SequelizeClass;