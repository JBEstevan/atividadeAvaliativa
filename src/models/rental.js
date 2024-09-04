const book_controller = require("../controllers/book.js")
const student_controller = require("../controllers/student.js")

let nextId = 1;

const converterData = () => {
    let date = new Date()
    let result = date.toISOString().split`T`[0]
    return result
}

const model = (body, id = nextId++) => {
    if (
        body.data_aluguel != undefined &&
        body.data_devolucao != undefined &&
        book_controller.show(body.book_id) &&
        student_controller.show(body.student_id)
    ) {
        return {
            id,
            livro_id: body.livro_id,
            estudante_id: body.estudante_id,
            data_aluguel: converterData(body.data_aluguel),
            data_devolucao: converterData(body.data_devolucao)
        }
    }
}

module.exports = model