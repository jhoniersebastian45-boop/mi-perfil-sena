/**
 * Base de datos inicial de aprendices e instructores.
 * Esta lista permite que el proyecto funcione de inmediato al abrir el index.html
 * en el navegador (incluso sin un servidor local con protocolo file://).
 */
const APRENDICES_DATA = [
  {
    "id": "instructor-melqui-romero",
    "nombreCompleto": "Melqui Romero",
    "ficha": "Instructor SENA",
    "programa": "Línea TIC / Software",
    "rol": "Instructor & Líder Técnico",
    "biografia": "Instructor técnico apasionado por las buenas prácticas de ingeniería de software, arquitectura limpia, integración continua y el trabajo colaborativo en equipo.",
    "habilidades": [
      "Git & GitHub",
      "Arquitectura de Software",
      "JavaScript / Node.js",
      "Python",
      "Metodologías Ágiles",
      "Bases de Datos SQL/NoSQL"
    ],
    "intereses": [
      "DevOps",
      "Inteligencia Artificial",
      "Formación Integral"
    ],
    "avatar": "assets/avatares/avatar_instructor.svg",
    "redes": {
      "github": "https://github.com/vermqen",
      "linkedin": "https://linkedin.com",
      "portafolio": "https://sena.edu.co"
    },
    "fraseFavorita": "La práctica constante y la disciplina convierten el conocimiento en maestría.",
    "estado": "Guiando la sesión de aprendizaje"
  },
  {
  "id": "kerlon-velasquez",
  "nombreCompleto": "Kerlon Velasquez",
  "ficha": "3294152",
  "programa": "Análisis y Desarrollo de Software",
  "rol": "Aprendiz / Desarrollador Junior",
  "biografia": "Aprendiz SENA apasionado por el desarrollo web y el aprendizaje de nuevas tecnologías de programación en constante aprendizaje.",
  "habilidades": [
    "Git",
    "GitHub",
    "HTML5",
    "CSS3",
    "JavaScript"
  ],
  "intereses": [
    "Desarrollo Web",
    "Programación"
  ],
  "avatar": "assets/avatares/avatar_carlos.svg",
  "redes": {
    "github": "https://github.com/kerlonvelasquez525-star",
    "linkedin": "https://www.linkedin.com/in/kerlon-velasquez-72180b429/",
    "portafolio": "https://github.com/kerlonvelasquez525-star/crear_componentes_frontend"
  },
  "fraseFavorita": "La práctica constante hace al maestro del código.",
  "estado": "Listo para colaborar"
},
{    "id": "angel-quintana",
    "nombreCompleto": "Angel Quintana",
    "ficha": "3294152",
    "programa": "Análisis y Desarrollo de Software",
    "rol": "Aprendiz / Desarrollador Junior",
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
      "Programación"
    ],
    "avatar": "assets/avatares/avatar_carlos.svg",
    "redes": {
      "github": "https://github.com/angeldavidq26",
      "linkedin": "https://linkedin.com/in/angeldavidq26",
      "portafolio": "https://angeldavidq26.github.io/mi-perfil-sena"
    },
    "fraseFavorita": "La práctica constante hace al maestro del código y mateo es un peo",
    "estado": "Listo para colaborar"
  },
  {
  "id": "yoiner-esteban-romero-cardenas",
  "nombreCompleto": "Yoiner Esteban Romero Cardenas",
  "ficha": "3294152",
  "programa": "Análisis y Desarrollo de Software",
  "rol": "Aprendiz / Desarrollador Junior",
  "biografia": "Aprendiz SENA, desarrollo web y el aprendizaje de nuevas tecnologías de programación, proximo desarrollador fullstack.",
  "habilidades": [
    "Git",
    "GitHub",
    "HTML5",
    "CSS3",
    "JavaScript"
  ],
  "intereses": [
    "Desarrollo Web",
    "Programación"
  ],
  "avatar": "assets/avatares/avatar_carlos.svg",
  "redes": {
    "github": "https://github.com/YoiDevops",
    "linkedin": "https://linkedin.com/in/YoiDevops",
    "portafolio": "https://YoiDevops.github.io/mi-perfil-sena"
  },
  "fraseFavorita": "Yo solía ser un desarrollador como tú, pero entonces recibí un virus en el ordenador.",
  "estado": "Listo para colaborar"
}
 ];

 

// Si se ejecuta en entorno Node/módulos
if (typeof module !== 'undefined' && module.exports) {
  module.exports = APRENDICES_DATA;
}
