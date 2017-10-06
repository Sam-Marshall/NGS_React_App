module.exports = function(sequelize, DataTypes) {

    var Role = sequelize.define("Role", {
        role: {
            type: DataTypes.STRING,
            is: ["^[a-z]+$",'i'],
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

    // Role.buildDev = function() {
    //   Role.build({role: 'sysadmin'}).save();
    //   Role.build({role: 'prjadmin'}).save();
    //   Role.build({role: 'admin'}).save();
    //   Role.build({role: 'user'}).save();
    // }

    return Role;
    
};
