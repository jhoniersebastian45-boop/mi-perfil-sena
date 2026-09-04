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
  "id": "andres-martinez",
  "nombreCompleto": "Andres Martinez",
  "ficha": "3294152",
  "programa": "Análisis y Desarrollo de Software",
  "rol": "Aprendiz / Desarrollador Junior",
  "biografia": "Aprendiz SENA interesado en aprender cosas nuevas y trabajar en equipo",
  "habilidades": [
    "Git",
    "GitHub",
    "HTML5",
    "CSS3"
  ],
  "intereses": [
    "Desarrollo Web",
    "Programación"
  ],
  "avatar": "assets/avatares/avatar_carlos.svg",
  "redes": {
    "github": "https://github.com/andresdevapps",
    "linkedin": "https://linkedin.com/in/andresdevapps",
    "portafolio": "https://andresdevapps.github.io/mi-perfil-sena"
  },
  "fraseFavorita": "Mejor intentar y fallar que no intentar.",
  "estado": "Listo para colaborar"
}
 ];

// Si se ejecuta en entorno Node/módulos
if (typeof module !== 'undefined' && module.exports) {
  module.exports = APRENDICES_DATA;
}
