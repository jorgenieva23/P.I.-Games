const {DataTypes} = require ('sequelize');

module.exports = (sequelize)=>{
sequelize.define('props',{

  id:{
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey:true
  },

  nombre:{
   type: DataTypes.STRING,
   allow: false
  }

})


}