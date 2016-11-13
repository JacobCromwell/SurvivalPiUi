sequelize = require('Sequelize');

var user = sequelize.define('user', {
	id: {
		type: sequelize.INTEGER,
		notnull: true,
		primaryKey: true
	},
	username: {
		type: sequelize.STRING,
		notnull: true
	},
	password: {
		type: sequelize.STRING,
		notnull: true
	},
	email: {
		type: sequelize.STRING,
		notnull: true
	},
	role: {
		type: sequelize.STRING,
		notnull: true,
		values: ['standard','admin','it']
	}
});