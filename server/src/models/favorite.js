const { DataTypes } = require("sequelize");


module.exports = (sequelize) => {
    sequelize.define("Favorite", {
    name:{
        type: DataTypes.STRING,
        unique: true,
        allowNull: false,
    },
    status:{
        type: DataTypes.ENUM("Alive", "Dead", "Unknown"),
        allowNull: false,
    },
    gender:{
        type: DataTypes.ENUM("Female", "Male", "Genderless", "Unknow"),
        allowNull: false,
    },
    origin:{
        type: DataTypes.JSON,
        allowNull: false,
    },
    species:{
        type: DataTypes.STRING,
        allowNull: false,
    },
    image:{
        type: DataTypes.STRING,
        allowNull: false,
    },
},
    {
    timestamps: false,
    }
);
};