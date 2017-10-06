module.exports = function(sequelize, DataTypes) {

    var Sample = sequelize.define("Sample", {
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        hasBeenProcessed: {
            type: DataTypes.BOOLEAN,
            defaultValue: 0,
            allowNull: false
        },
        isHidden:{
            type: DataTypes.BOOLEAN,
            defaultValue: 0,
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

    Sample.associate = function(models) {
        this.belongsTo(models.Project, {
            foreignKey: {
                name: 'project_id',
                allowNull: false
            }
        });

         this.belongsTo(models.Project, {
            foreignKey: {
                name: 'user_id',
                allowNull: false
            }
        });

        this.belongsTo(models.SampleType, {
            foreignKey: {
                name: 'sampletype_id',
                allowNull: false
            }
        });

        this.belongsTo(models.Species, {
            foreignKey: {
                name: 'species_id',
                allowNull: false
            }
        });

        this.belongsTo(models.AlignmentGenome, {
            foreignKey: {
                name: 'alignmentgenome_id',
                allowNull: false
            }
        });

        this.hasMany(models.Library, {
            foreignKey: 'sample_id'
        });

        this.belongsTo(models.Group, {
            foreignKey: {
                name: 'group_id',
                allowNull: false
            }
        });

    }

    return Sample;
};
