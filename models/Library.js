module.exports = function(sequelize, DataTypes) {

    var Library = sequelize.define("Library", {
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

    Library.associate = function(models) {

        this.belongsTo(models.Sample, {
            foreignKey: {
                name: 'sample_id',
                allowNull: false
            }
        });

        this.belongsTo(models.IndexInfo, {
            foreignKey: {
                name: 'forward_id',
                allowNull: false
            }
        });

        this.belongsTo(models.IndexInfo, {
            foreignKey: {
                name: 'reverse_id',
                allowNull: true
            }
        });

        this.belongsTo(models.Project, {
            foreignKey: {
                name: 'project_id',
                allowNull: false
            }
        });

        this.belongsTo(models.LibraryPrep, {
            foreignKey: {
                name: 'libraryprep_id',
                allowNull: false
            }
        });

    }

    return Library;
};