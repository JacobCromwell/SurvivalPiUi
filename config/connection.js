dbConfig = require('./DBConfig.js');
Sequelize = require('Sequelize');
//users = require('../src/models/User.js');

console.log("Our config object:\ndatabase: " + dbConfig.database
	 + "\nusername: " + dbConfig.username
	 + "\npassword: " + dbConfig.password);

var sequelize = new Sequelize(
	dbConfig.database,
	dbConfig.username,
	dbConfig.password, {
	host: 'localhost',
	dialect: 'mysql',
	pool: {
		max: 5,
		min: 0,
		idle: 10000
	},
	dialectOptions: {
		appName: 'SurvivalPiUi'
	}
});

sequelize
	.authenticate()
	.then(function(err){
		console.log('Connection established successfully');
	})
	.catch(function (err) {
		console.log("ERROR: Conntecting to database failed with the following error:\n" + err);
	});


/*
users.findOne({where: {username: 'JCromwell'}}).then(function(user){
	console.log("Found the following user: " + user);
});
*/