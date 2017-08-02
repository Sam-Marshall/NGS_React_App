module.exports = function(sequelize, DataTypes) {

    var Project = sequelize.define("Project", {
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

    Project.associate = function(models) {
        this.belongsTo(models.User, {
            foreignKey: {
                name: 'user_id',
                allowNull: false
            }
        });

        this.hasMany(models.Sample, {
            foreignKey: 'project_id',
            onDelete: 'cascade'
        });
    }

    return Project;
};