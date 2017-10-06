module.exports = function(sequelize, DataTypes) {

    var Group = sequelize.define("Group", {
        name: {
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

    Group.associate = function(models) {
        this.hasMany(models.Sample, {
            foreignKey: 'Group_id'
        });
    }

    return Group;
};
