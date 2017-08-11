module.exports = function(sequelize, DataTypes) {

    var Run = sequelize.define("Run", {
        name: {
            type: DataTypes.STRING,
            isAlphanumeric: true,
            allowNull: false
        },
        flowCellId: {
            type: DataTypes.STRING,
            isAlphanumeric: true,
            allowNull: false
        },
        flowCellLot: {
            type: DataTypes.STRING,
            isAlphanumeric: true,
            allowNull: false
        },
        reagentCartId: {
            type: DataTypes.STRING,
            isAlphanumeric: true,
            allowNull: false
        },
        reagentCartLot: {
            type: DataTypes.STRING,
            isAlphanumeric: true,
            allowNull: false
        },
        reagentCartType: {
            type: DataTypes.STRING,
            isAlphanumeric: true,
            allowNull: false
        },
        bufferCartId: {
            type: DataTypes.STRING,
            isAlphanumeric: true,
            allowNull: false
        },
        bufferCartLot: {
            type: DataTypes.STRING,
            isAlphanumeric: true,
            allowNull: false
        },
        finalPoolMolarity: {
            type: DataTypes.STRING,
            allowNull: false
        },
        readOneLength: {
            type: DataTypes.INTEGER,
            len: [2,3],
            allowNull: false
        },
        readTwoLength: {
            type: DataTypes.INTEGER,
            len: [2,3],
            allowNull: true
        },
        indexOneLength: {
            type: DataTypes.INTEGER,
            len: [1,2],
            allowNull: false
        },
        indexTwoLength: {
            type: DataTypes.INTEGER,
            len: [1,2],
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