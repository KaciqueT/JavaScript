class Cursos{
    static cursos = ["Javascript", "Wordpress", "Python", "HTML", "CSS", "Vue.js", "React.js"]

    constructor(){}

    static getTodosCursos = () => {
        return this.cursos
    }

    static getCursos = (ind) => {
        return this.cursos[ind]
    }

    static addCursos = (novoCurso) => {
        this.cursos.push(novoCurso)
    }

    static apagarCursos = () => {
        this.cursos = []
    }
}

export default Cursos