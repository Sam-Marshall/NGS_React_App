module.exports = function(sequelize, DataTypes) {

    var Species = sequelize.define("Species", {
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

    Species.associate = function(models) {
        this.hasMany(models.Sample, {
            foreignKey: 'species_id'
        });
    }

    // Species.buildDev = function() {
    //   Species.build({name: 'Homo Sapiens'}).save();
    //   Species.build({name: 'Caenorhabditis Elegans'}).save();
    //   Species.build({name: 'Mus Musculus'}).save();
    // }

    return Species;
};
