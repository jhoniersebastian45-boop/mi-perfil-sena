/**
 * Base de datos inicial de aprendices e instructores.
 * Esta lista permite que el proyecto funcione de inmediato al abrir el index.html
 * en el navegador (incluso sin un servidor local con protocolo file://).
 */
const APRENDICES_DATA = [
  {
    "id": "Aprendiz-sharon-campos",
    "nombreCompleto": "Sharon Daliana Campos Tique",
    "ficha": "3294152",
    "programa": "Análisis y Desarrollo de Software",
    "rol": "Aprendiz",
    "biografia": "Aprendiz SENA apasionado por el desarrollo web y el aprendizaje de nuevas tecnologías de programación.",
    "habilidades": [
      "Git",
      "GitHub",
      "HTML5",
      "CSS3",
      "JavaScript"
    ],
    "intereses": [
      "Desarrollo Web",
      "Programación",
      "Base datos"
    ],
    "avatar": "assets/avatares/avatar_sharon.svg",
    "redes": {
      "github": "https://github.com/Daliana217-github",
      "portafolio": "https://sena.edu.co"
    },
    "fraseFavorita": "La práctica constante y la disciplina convierten el conocimiento en maestría.",
    "estado": "Listo para colaborar"
  }
 ];

// Si se ejecuta en entorno Node/módulos
if (typeof module !== 'undefined' && module.exports) {
  module.exports = APRENDICES_DATA;
}
