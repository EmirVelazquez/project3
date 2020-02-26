

module.exports = function (sequelize, DataTypes) {
    var User = sequelize.difine("User", {

        first_name: {
            type: DataTypes.STRING
        },
        last_name: {
            type: DataTypes.STRING
        },
        email: {
            type: DataTypes.STRING,
            validate: {
                isEmail: true
            }
        },
        phone_number: {
            type: DataTypes.STRING
        },
        admin: {
            type: DataTypes.BOOLEAN,
            default: false
        },
        group: {
            type: DataTypes.BOOLEAN,
            default: false
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false
        },
        current_location: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        GroupId: {
            type: DataTypes.INTEGER,
            allowNull: true
        }
    });


    User.associate = function (models) {
        User.hasMany(models.Group);
    };

    return User;
};