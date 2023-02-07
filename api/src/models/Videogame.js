const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('videogame', {
    
    id:{
      type: DataTypes.UUID,
      default: DataTypes.UUIDV4,
      primaryKey:true
    },
    
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    description:{
      type: DataTypes.STRING,
      allowNull: false
    },

    realesed:{
      type: DataTypes.STRING,
      allowNull: false
    },

    rating:{
      type: DataTypes.STRING,
    },

    platforms:{
      type: DataTypes.STRING
    }

  });
};