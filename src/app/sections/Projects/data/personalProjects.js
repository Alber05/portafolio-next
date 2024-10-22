/*Projectos Corporativos*/
import MockupCirugiaDeLaMano from '../../../assets/images/corporativeProjectsImages/mockup-cirugia-de-la-mano.png'
import MockupInnocleanSolar from '../../../assets/images/corporativeProjectsImages/mockup-innoclean-solar.png'

/* Projectos Persolanes */
import ageCalculator from '../../../assets/images/personalProjectsImages/mockup-age-calculator.png'
import easyBank from '../../../assets/images/personalProjectsImages/easy-bank.webp'
import calculator from '../../../assets/images/personalProjectsImages/mockup-calculator.png'
import timeTracking from '../../../assets/images/personalProjectsImages/time-tracking-dashboard.webp'
import rickMorty from '../../../assets/images/personalProjectsImages/rick-morty-api.jpg'
import freeGames from '../../../assets/images/personalProjectsImages/mockup-free-to-play.png'

export const personalProjectsData = [
  {
    image: freeGames,
    title: 'Free games API',
    technologies: 'HTML, React-bootstrap & React',
    demo: 'https://bucolic-starlight-9ec6ca.netlify.app/',
    github: ''
  },
  {
    title: 'Age calculator App',
    technologies: 'HTML, CSS & JS',
    image: ageCalculator,
    demo: 'https://exquisite-creponne-1dd318.netlify.app/',
    github: 'https://github.com/Alber05/age-calculator-app-main'
  },
  {
    title: 'Calculator App',
    technologies: 'HTML, CSS & JS',
    image: calculator,
    demo: 'https://tranquil-choux-7091ec.netlify.app/',
    github: 'https://github.com/Alber05/calculator-app-main'
  },
  {
    image: timeTracking,
    title: 'Time Tracking dashboard',
    technologies: 'HTML, CSS & React',
    demo: 'https://jovial-chimera-7c8cb0.netlify.app/',
    github: 'https://github.com/Alber05/time-tracking-dashboard'
  },
  {
    image: rickMorty,
    title: 'Rick & Morty API',
    technologies: 'HTML, CSS & React',
    demo: 'https://cosmic-snickerdoodle-a3a99b.netlify.app/',
    github: ''
  },
  {
    title: 'Easybank landing page',
    image: easyBank,
    demo: 'https://resplendent-sunflower-010fc6.netlify.app/',
    github: 'https://github.com/Alber05/easybank-landing-page-master'
  }
]

export const corporateProjectsData = [
  {
    title: 'Cirugía de la mano Albacete',
    technologies: ['HTML', 'Tailwind', 'NextJs'],
    image: MockupCirugiaDeLaMano,
    demo: 'https://www.cirugiadelamanoalbacete.es/',
    github: ''
  },
  {
    title: 'InnoCleanSolar',
    technologies: ['HTML', 'Tailwind', 'NextJs'],
    image: MockupInnocleanSolar,
    demo: 'https://www.innocleansolar.es/',
    github: ''
  }
]
