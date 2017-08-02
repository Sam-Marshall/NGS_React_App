module.exports = function(sequelize, DataTypes) {

    var User = sequelize.define("User", {
        firstName: {
            type: DataTypes.STRING,
            allowNull: false
        },
        lastName: {
            type: DataTypes.STRING,
            allowNull: false
        },
        initials: {
            type: DataTypes.STRING,
            allowNull: false
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        createdAt: {
            type: DataTypes.DATE,
            field: 'createdAt',
            defaultValue: sequelize.literal('NOW()')
        },
        updatedAt: {
            type: DataTypes.DATE,
            field: 'updatedAt',
            defaultValue: sequelize.literal('NOW()')
        }
    });

    User.associate = function(models) {
        this.belongsTo(models.Role, {
            foreignKey: {
                name: 'role_id',
                allowNull: false
            }
        });

        this.hasMany(models.Project, {
            foreignKey: 'user_id'
        });
    }

    return User;
};