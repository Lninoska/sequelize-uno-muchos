module.exports = (sequelize, DataTypes) => {
  const productos = sequelize.define('productos', {
    nombre: DataTypes.STRING, 
    precio: DataTypes.INTEGER,
    categoriaId: DataTypes.INTEGER
  });

  productos.associate = function(models){
    productos.belongsTo(models.categoria,  
      { foreignKey: 'categoriaId'}
    );
  }

  return productos;
};
