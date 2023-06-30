const { DataTypes } = require("sequelize");


module.exports = (sequelize) => {
    sequelize.define("User", {
    email:{
        type: DataTypes.STRING,
        allowNull: true,
        isEmail: true,
    },
      password:{
        type: DataTypes.STRING,
        allowNull: true,
    },
},
    {
    timestamps: false,
    }
);
};