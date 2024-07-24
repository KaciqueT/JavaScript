const cursos = ["Javascript", "Wordpress", "Python", "HTML", "CSS", "Vue.js", "React.js"]
const jogos = ["Minecraft", "Zelda", "Mario", "GTA", "GodOfWar", "SpiderMan"]

const getCursos = () => {
    return cursos
}

export default function getCursos(){
    return cursos
} //só pode um export default por arquivo

export function getCursos1(ind){
    return cursos[ind]
}

export {cursos, jogos}