let nextId = 1;

const model = (body, id = nextId++) => {
    if (
        body.titulo != undefined &&
        body.autor != undefined &&
        body.ano != undefined &&
        body.genero != undefined &&
        body.titulo != "" &&
        body.autor != "" &&
        body.ano > 0 &&
        body.ano <= 2024 &&
        body.ano != "" &&
        body.genero != ""
    ) {
        return {
            id,
            titulo: body.titulo,
            autor: body.autor,
            ano: body.ano,
            genero: body.genero
        }
    }
}

module.exports = model