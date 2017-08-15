module.exports = function(sequelize, DataTypes) {

    var User = sequelize.define("User", {
        userName: {
            type: DataTypes.STRING,
            allowNull: false
        },
        firstName: {
            type: DataTypes.STRING,
            is: ["^[a-z]+$",'i'],
            allowNull: false
        },
        lastName: {
            type: DataTypes.STRING,
            is: ["^[a-z]+$",'i'],
            allowNull: false
        },
        initials: {
            type: DataTypes.STRING,
            len: [3, 4],
            allowNull: false
        },
        email: {
            type: DataTypes.STRING,
            isEmail: true,
            allowNull: false
        },
        isActive: {
            type: DataTypes.BOOLEAN,
            defaultValue: 1,
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

    User.buildDev = function() {
      User.build({userName: 'gpcrawford', firstName: 'Greg', lastName: 'Crawford', initials: 'gpc', email: 'gpcrawford@northwestern.edu', password: 'blah', role_id: 1}).save();
    }

    return User;
};
