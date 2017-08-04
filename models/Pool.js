module.exports = function(sequelize, DataTypes) {

    var Pool = sequelize.define("Pool", {
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

    Pool.associate = function(models) {
        
        this.hasMany(models.Library, {
            foreignKey: 'pool_id'
        });

        this.belongsTo(models.Run, {
            foreignKey: {
                name: 'run_id',
                allowNull: false
            }
        });

    }

    return Pool;
};