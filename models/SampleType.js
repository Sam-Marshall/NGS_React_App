module.exports = function(sequelize, DataTypes) {

    var SampleType = sequelize.define("SampleType", {
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

    SampleType.associate = function(models) {
        this.hasMany(models.Sample, {
            foreignKey: 'sampletype_id'
        });
    }

    // SampleType.buildDev = function() {
    //   SampleType.build({name: 'DNA'}).save();
    //   SampleType.build({name: 'RNA'}).save();
    // }

    return SampleType;
};
