module.exports = function(sequelize, DataTypes) {

    var Project = sequelize.define("Project", {
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        numSample:{
            type: DataTypes.INTEGER,
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

        this.hasMany(models.Library, {
            foreignKey: 'project_id',
            onDelete: 'cascade'
        });
    }

    // Project.buildDev = function() {
    //   Project.build({name: 'Mouse Aging', numSample: 5, user_id: 1}).save();
    //   Project.build({name: 'Flu', numSample: 15, user_id: 1}).save();
    //   Project.build({name: 'Another Project', numSample: 6, user_id: 1}).save();
    // }

    return Project;
};
