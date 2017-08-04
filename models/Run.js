module.exports = function(sequelize, DataTypes) {

    var Run = sequelize.define("Run", {
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        flowCellId: {
            type: DataTypes.STRING,
            allowNull: false
        },
        flowCellLot: {
            type: DataTypes.STRING,
            allowNull: false
        },
        reagentCartId: {
            type: DataTypes.STRING,
            allowNull: false
        },
        reagentCartLot: {
            type: DataTypes.STRING,
            allowNull: false
        },
        reagentCartType: {
            type: DataTypes.STRING,
            allowNull: false
        },
        bufferCartId: {
            type: DataTypes.STRING,
            allowNull: false
        },
        bufferCartLot: {
            type: DataTypes.STRING,
            allowNull: false
        },
        finalPoolMolarity: {
            type: DataTypes.STRING,
            allowNull: false
        },
        readOneLength: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        readTwoLength: {
            type: DataTypes.INTEGER,
            allowNull: true
        },
        indexOneLength: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        indexTwoLength: {
            type: DataTypes.INTEGER,
            allowNull: true
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

    Run.associate = function(models) {

        this.hasMany(models.Pool, {
            foreignKey: 'run_id'
        });

        this.belongsTo(models.Sequencer, {
            foreignKey: {
                name: 'sequencer_id',
                allowNull: false
            }
        });

    }

    return Run;
};