module.exports = function(sequelize, DataTypes) {

    var AlignmentGenome = sequelize.define("AlignmentGenome", {
        name: {
            type: DataTypes.STRING,
            isAlphanumeric: true, 
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

    AlignmentGenome.associate = function(models) {
        this.hasMany(models.Sample, {
            foreignKey: 'alignmentgenome_id'
        });
    }

    return AlignmentGenome;
};