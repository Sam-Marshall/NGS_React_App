module.exports = function(sequelize, DataTypes) {

    var IndexInfo = sequelize.define("IndexInfo", {
        name: {
            type: DataTypes.STRING,
            isAlphanumeric: true,
            allowNull: false
        },
        sequence: {
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

    IndexInfo.associate = function(models) {

        this.hasMany(models.Library, {
            foreignKey: 'forward_id'
        });


        this.hasMany(models.Library, {
            foreignKey: 'reverse_id'
        });

        this.belongsTo(models.LibraryPrep, {
            foreignKey: {
                name: 'libraryprep_id',
                allowNull: false
            }
        });

    }

    return IndexInfo;
};