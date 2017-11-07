module.exports = function(sequelize, DataTypes) {
	var User = sequelize.define("User", {
		first_name: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		last_name: {
			type: DataTypes.STRING,
			allowNull: false,
		}
	});

	User.associate = function(models) {
		User.belongsTo(models.Group, {
			foreignKey: {
				allowNull: false
			}
		});
	};

	return User;
};