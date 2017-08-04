module.exports = function(sequelize, DataTypes) {

    var Sequencer = sequelize.define("Sequencer", {
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        type: {
            type: DataTypes.STRING,
            allowNull: false
        },
        location: {
            type: DataTypes.STRING,
            allowNull: false
        },
        purchaseDate: {
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

    Sequencer.associate = function(models) {

        this.hasMany(models.Run, {
            foreignKey: 'sequencer_id'
        });

    }

    return Sequencer;
};