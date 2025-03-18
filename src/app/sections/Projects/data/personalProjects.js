/*Projectos Corporativos*/
import MockupCirugiaDeLaMano from '../../../assets/images/corporativeProjectsImages/mockup-cirugia-de-la-mano.png'
import MockupInnocleanSolar from '../../../assets/images/corporativeProjectsImages/mockup-innoclean-solar.png'
import MockupLaLuna from '../../../assets/images/corporativeProjectsImages/mockup-la-Luna.png'

/* Projectos Persolanes */
import ageCalculator from '../../../assets/images/personalProjectsImages/mockup-age-calculator.webp'
import easyBank from '../../../assets/images/personalProjectsImages/mockup-banking-landing.webp'
import calculator from '../../../assets/images/personalProjectsImages/mockup-calculator.webp'
import timeTracking from '../../../assets/images/personalProjectsImages/time-tracking-dashboard.webp'
import rickMorty from '../../../assets/images/personalProjectsImages/mockup-rick-y-morty.webp'
import freeGames from '../../../assets/images/personalProjectsImages/mockup-free-to-play.webp'
import githubProfile from '../../../assets/images/personalProjectsImages/mockup-github-profile.webp'
import ipAdressTracker from '../../../assets/images/personalProjectsImages/mockup-ip-addres-tracker.webp'
import readingList from '../../../assets/images/personalProjectsImages/mockup-reading-list.webp'

export const personalProjectsData = [
  {
    title: 'Github Profile App',
    description:
      'Aplicación web desarrollada con Tailwind CSS y React que utiliza la API de GitHub para buscar usuarios y mostrar detalles sobre sus perfiles. Permite obtener información sobre sus repositorios públicos, seguidores y seguidos, con una interfaz limpia y moderna que facilita la navegación y exploración de perfiles',
    image: githubProfile,
    technologies: ['html', 'tailwind', 'react'],
    demo: 'https://helpful-bienenstitch-5022ca.netlify.app/',
    github: 'https://github.com/Alber05/github-profile-api'
  },
  {
    title: 'Ip Addres Tracker',
    description:
      'Esta aplicación es una herramienta interactiva desarrollada en React y Tailwind CSS que permite a los usuarios obtener y visualizar su ubicación e información detallada del proveedor de servicios de Internet (ISP). Además, incluye una funcionalidad de búsqueda que permite a los usuarios encontrar la ubicación geográfica y la información de red asociada a una dirección IP específica o un nombre de dominio.',
    image: ipAdressTracker,
    technologies: ['html', 'tailwind', 'react'],
    demo: 'https://ipp-address-tracker.netlify.app/',
    github: 'https://github.com/Alber05/ip-address-tracker'
  },
  {
    title: 'Reading List',
    description:
      'Este proyecto es una aplicación web creada para la prueba técnica del streamer MiduDev. Desarrollada en React y utilizando CSS Modules, permite a los usuarios buscar y gestionar libros de forma eficiente, facilitando la búsqueda por título o autor, el filtrado por páginas y categorías, y la adición de libros a una lista de lectura que se almacena en el localStorage.',
    image: readingList,
    technologies: ['html', 'css', 'react'],
    demo: 'https://reading-list-alber05.netlify.app/',
    github:
      'https://github.com/Alber05/pruebas-tecnicas/tree/Alber05/pruebas/01-reading-list/Alber05'
  },
  {
    image: freeGames,
    title: 'Free games API',
    description:
      'Es una aplicación web desarrollada con HTML, React y React-Bootstrap que consume la API de Free-to-Play Games para ofrecer un catálogo completo de juegos gratuitos, especialmente MMO. A través de esta API, la app permite acceder a datos detallados de cada juego, como título, género, descripción y otros atributos, brindando una experiencia interactiva y visualmente atractiva en la exploración de juegos.',
    technologies: ['html', 'reactBootstrap', 'react'],
    demo: 'https://bucolic-starlight-9ec6ca.netlify.app/',
    github: ''
  },
  {
    title: 'Age calculator App',
    technologies: ['html', 'css', 'js'],
    description:
      'Es una aplicación sencilla creada con HTML, CSS y JavaScript que calcula y muestra tu edad en años, meses y días a partir de la fecha de tu cumpleaños. Solo tienes que ingresar tu fecha de nacimiento, y la app te dará un desglose preciso de tu edad.',
    image: ageCalculator,
    demo: 'https://exquisite-creponne-1dd318.netlify.app/',
    github: 'https://github.com/Alber05/age-calculator-app-main'
  },
  {
    title: 'Calculator App',
    technologies: ['html', 'css', 'js'],
    description:
      'Es una calculadora básica desarrollada con HTML, CSS y JavaScript que permite realizar operaciones aritméticas como suma, resta, multiplicación y división. Su interfaz es intuitiva y fácil de usar, simulando el aspecto de una calculadora física.',
    image: calculator,
    demo: 'https://tranquil-choux-7091ec.netlify.app/',
    github: 'https://github.com/Alber05/calculator-app-main'
  },
  // {
  //   image: timeTracking,
  //   title: 'Time Tracking dashboard',
  //   description:
  //     'Este proyecto se centra en ofrecer una experiencia de usuario fluida y profesional, destacando los servicios médicos, credenciales y testimonios de pacientes. La interfaz moderna y responsiva, construida con Tailwind, garantiza una navegación intuitiva en dispositivos móviles y de escritorio, mientras que Next.js optimiza el rendimiento y la carga de la página, asegurando que los pacientes encuentren fácilmente la información que necesitan. ',
  //   technologies: ['html', 'css', 'react'],
  //   demo: 'https://jovial-chimera-7c8cb0.netlify.app/',
  //   github: 'https://github.com/Alber05/time-tracking-dashboard'
  // },
  {
    image: rickMorty,
    title: 'Rick & Morty API',
    description:
      'Es una aplicación web construida con HTML, CSS y React que consume la API de Rick and Morty. Permite explorar y visualizar información sobre los personajes, episodios y ubicaciones de la serie. La interfaz es dinámica y atractiva, facilitando la búsqueda de personajes por nombre, especie, estado y más.',
    technologies: ['html', 'css', 'react'],
    demo: 'https://cosmic-snickerdoodle-a3a99b.netlify.app/',
    github: ''
  },
  {
    title: 'Easybank landing page',
    description:
      'Este proyecto se centra en ofrecer una experiencia de usuario fluida y profesional, destacando los servicios médicos, credenciales y testimonios de pacientes. La interfaz moderna y responsiva, construida con Tailwind, garantiza una navegación intuitiva en dispositivos móviles y de escritorio, mientras que Next.js optimiza el rendimiento y la carga de la página, asegurando que los pacientes encuentren fácilmente la información que necesitan. ',
    image: easyBank,
    technologies: ['html', 'css'],
    demo: 'https://resplendent-sunflower-010fc6.netlify.app/',
    github: 'https://github.com/Alber05/easybank-landing-page-master'
  }
]

export const corporateProjectsData = [
  {
    title: 'Cirugía de la mano Albacete',
    technologies: ['html', 'tailwind', 'nextjs', 'analytics'],
    description:
      'Este proyecto se centra en ofrecer una experiencia de usuario fluida y profesional, destacando los servicios médicos, credenciales y testimonios de pacientes. La interfaz moderna y responsiva, construida con Tailwind, garantiza una navegación intuitiva en dispositivos móviles y de escritorio, mientras que Next.js optimiza el rendimiento y la carga de la página, asegurando que los pacientes encuentren fácilmente la información que necesitan. ',
    image: MockupCirugiaDeLaMano,
    demo: 'https://www.cirugiadelamanoalbacete.es/',
    github: ''
  },
  {
    title: 'InnoCleanSolar',
    technologies: ['html', 'tailwind', 'nextjs', 'analytics'],
    description:
      'Proyecto desarrollado para InnoCleanSolar S.L., destacando el servicio de limpieza robótica de paneles solares y sus ventajas. Construido con Next.js y Tailwind, ofrece una experiencia de navegación ágil en móviles y escritorios, optimizando el rendimiento y la velocidad de carga. Esto asegura que los usuarios accedan de forma rápida a información clave sobre cómo la limpieza automatizada aumenta la eficiencia energética y extiende la vida útil de los paneles solares.',
    image: MockupInnocleanSolar,
    demo: 'https://www.innocleansolar.es/',
    github: ''
  },
  {
    title: 'Salones La Luna',
    technologies: ['html', 'tailwind', 'ReactJs'],
    description:
      'Proyecto desarrollado para Salones La Luna Tobarra presentando un planificador interactivo de menús de boda Construido con Next.js y Tailwind ofrece una experiencia fluida en dispositivos móviles y de escritorio permitiendo a las parejas personalizar su menú y obtener presupuestos instantáneos Los usuarios pueden seleccionar platos ajustar el número de invitados y generar un PDF del menú final optimizando el proceso de planificación y mejorando la comunicación entre los clientes y el equipo de eventos del restaurante',
    image: MockupLaLuna,
    demo: 'https://la-luna-orcin.vercel.app/',
    github: ''
  }
]
