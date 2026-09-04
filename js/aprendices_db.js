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
  
  
  
  {"id": "Valentinapardo",
  "nombreCompleto": "Valentina Chaves",
  "ficha": "3294152",
  "programa": "Análisis y Desarrollo de Software",
  "rol": "Aprendiz / Desarrollador Junior",
  "biografia": "Estudiante en Analisis y Desarrollo de Software en el sena,apasionada por la tecnologia y la progrmacion mas orientada al backend con conocimientos basicos en JavaScript,python,php,laravel .",
  "habilidades": [
    "postgresql",
    "GitHub",
    "HTML5",
    "CSS3",
    "JavaScript",
    "Trabajo en Equipo"
  ],
  "intereses": [
    "Desarrollo backend",
    "Bases de Datos",
    "Inteligencia Artificial"
  ],
  "avatar": "assets/avatares/avatar_laura.svg",
  "redes": {
    "github": "https://github.com/Valentinna-p28",
    "linkedin": "https://linkedin.com/in/tu-usuario",
    "portafolio": "https://tu-usuario.github.io/mi-perfil-sena"
  },
  "fraseFavorita": "El código limpio siempre parece que fue escrito por alguien a quien le importaba.",
  "estado": "Disponible para proyectos colaborativos"

  }
 ];

// Si se ejecuta en entorno Node/módulos
if (typeof module !== 'undefined' && module.exports) {
  module.exports = APRENDICES_DATA;
}
