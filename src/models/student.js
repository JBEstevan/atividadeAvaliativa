let nextId = 1;

const model = (body, id = nextId++) => {
    if (
        body.nome != undefined &&
        body.matricula != undefined &&
        body.curso != undefined &&
        body.ano != undefined &&
        body.nome != "" &&
        body.matricula != "" &&
        body.curso != "" &&
        body.ano != "" &&
        body.ano <= 2024
    ) {
        return {
            id,
            nome: body.nome,
            matricula: body.matricula,
            curso: body.curso,
            ano: body.ano
        }
    }
}

module.exports = model