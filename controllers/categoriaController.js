const { categoria, productos  } = require('../models')


async function crearCategoria(nombre) {
    return await categoria.create({ nombre });
}

async function CrearProducto(CategoriaId, nombre, precio) {
    return await productos.create({ CategoriaId, nombre, precio});
}

async function obtenerCategoriasConProductos() {
    return await categoria.findAll({ includes: Productos });
}

async function eliminarCategoria(CategoriaId) {
    await categoria.destroy({ where: { id: CategoriaId } });
    console.log(`Categoria con ID ${CategoriaId} eliminado`)
}
module.exports = {
    crearCategoria,
    CrearProducto,
    obtenerCategoriasConProductos,
    eliminarCategoria
};