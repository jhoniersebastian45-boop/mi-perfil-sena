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
  "id": "yojhan-felipe-forero-trivino",
  "nombreCompleto": "yojhan felipe forero triviño",
  "ficha": "3294152",
  "programa": "Análisis y Desarrollo de Software",
  "rol": "Aprendiz / Desarrollador Junior",
  "biografia": "Aprendiz SENA apasionado por el desarrollo web y el aprendizaje de nuevas tecnologías de programación. futuro programador senior",
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
  "avatar": "assets/avatares/avatar_default.svg",
  "redes": {
    "github": "https://github.com/yojhandev",
    "linkedin": "https://linkedin.com/in/yojhandev",
    "portafolio": "https://yojhandev.github.io/mi-perfil-sena"
  },
  "fraseFavorita": "Sin mente que pensar.  Sin voluntad que quebrar.  Sin voz que clame por el sufrimiento.  Nacido de Dios y del Vacío.  Tú sellarás la luz cegadora que devora sus sueños.  Tú eres el Recipiente.  Tú eres el Hollow Knight.",
  "estado": "Listo para colaborar"
}

  
 ];

// Si se ejecuta en entorno Node/módulos
if (typeof module !== 'undefined' && module.exports) {
  module.exports = APRENDICES_DATA;
}

