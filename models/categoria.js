module.exports = (sequelize, DataTypes) => {
  const categoria = sequelize.define('categoria', {
    nombre: DataTypes.STRING
  });

  categoria.associate = function(models) {
    categoria.hasMany(models.productos, { 
      foreignKey: 'categoriaId',
      onDelete: 'CASCADE',
    });
  };

  return categoria;
};
