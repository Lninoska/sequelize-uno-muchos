module.exports = (sequelize, DataTypes) => {
  const Productos = sequelize.define('Productos', {
      nombre: DataTypes.STRING,
      CategoriaId: DataTypes.INTEGER,
  });


  Productos.associate = function (models) {
      Productos.belongsTo(models.Categoria, { foreignKey: 'CategoriaId' });
  };

  return Productos;
};