module.exports = function(sequelize, DataTypes) {

    var LibraryPrep = sequelize.define("LibraryPrep", {
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

    LibraryPrep.associate = function(models) {
        
        this.hasMany(models.Library, {
            foreignKey: 'libraryprep_id'
        });

    }

    return LibraryPrep;
};