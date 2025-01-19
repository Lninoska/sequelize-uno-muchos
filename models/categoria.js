module.exports = (sequelize, DataTypes) => {
    const Categoria = sequelize.define('Categoria', {
        nombre: DataTypes.STRING,
    });


    Categoria.associate = function (models) {
        Categoria.hasMany(models.Productos, {
            foreignKey: 'CategoriaId',
            onDelete: 'CASCADE', 
        });
    };

    return Categoria;
};