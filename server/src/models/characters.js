const { DataTypes } = require('sequelize');


module.exports = (sequelize) => {
 
sequelize.define('Character', {
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
  },
  name:{
    type: DataTypes.STRING,
    unique: true,
    allowNull: false,
    },
  status:{
    type: DataTypes.ENUM("Alive", "Dead", "unknown"),
    allowNull: false,
    },
    gender:{
        type: DataTypes.ENUM("Female", "Male", "Genderless", "unknown"),
        allowNull: false,
    },
    origin:{
        type: DataTypes.JSONB,
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
)};
