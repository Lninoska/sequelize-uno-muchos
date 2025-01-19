const { Categoria, Productos  } = require('../models')


async function crearCategoria(nombre) {
    return await Categoria.create({ nombre });
}

async function CrearProducto(CategoriaId, nombre, precio) {
    return await Productos.create({ CategoriaId, nombre, precio});
}

async function obtenerCategoriasConProductos() {
    return await Categoria.findAll({ includes: Productos });
}

async function eliminarCategoria(CategoriaId) {
    await Categoria.destroy({ where: { id: CategoriaId } });
    console.log(`Categoria con ID ${CategoriaId} eliminado`)
}
module.exports = {
    crearCategoria,
    CrearProducto,
    obtenerCategoriasConProductos,
    eliminarCategoria
};
