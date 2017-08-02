module.exports = function(sequelize, DataTypes) {

    var Role = sequelize.define("Role", {
        role: {
            type: DataTypes.STRING,
            allowNull: false
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

    Role.associate = function(models) {
        this.hasMany(models.User, {
            foreignKey: 'role_id'
        });
    }

    return Role;
    
};