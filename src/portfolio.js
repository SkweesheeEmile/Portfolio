const header = {
  // all the properties are optional - can be left empty or deleted
  homepage: 'https://skweesheeemile.github.io/Portfolio/',
  title: 'Portfolio',
}

const about = {
  // all the properties are optional - can be left empty or deleted
  name: 'Émile Lévesque',
  role: 'Software Developper',

  description:
    '',
  social: {
    linkedin: 'https://linkedin.com',
    github: 'https://github.com',
  },
}

const projects = [
  // projects can be added an removed
  // if there are no projects, Projects section won't show up
  {
    name: 'EnviroAction',
    description:
      'A one-stop shop to start taking actions towards improving the condition of our environment! Using the power of the Gemini API and the Google Maps API, you can give your daily habits and will get a custom list of actions you are able to get to start your eco friendly habits!',
    stack: ['Gemini', 'TypeScript', 'React', "Places API"],
    sourceCode: 'https://github.com/SkweesheeEmile/EnviroAction',
    image: 'EnviroActions.png',
  },
  {
    name: 'StockUp',
    description:
      'StockUp is a mobile application designed to help users easily manage and track their stock investments. Its purpose is to provide a simple interface where users can view their portfolio, monitor performance, and stay organized without complex tools or spreadsheets.',
    stack: ['Kotlin', 'Compose', 'Android'],
    sourceCode: 'https://github.com/AveryPBerger/StockUp',
    image: 'https://github.githubassets.com/assets/GitHub-Logo-ee398b662d42.png',
  },
  {
    name: 'Project 3',
    description:
      'Amet asperiores et impedit aliquam consectetur? Voluptates sed a nulla ipsa officia et esse aliquam',
    stack: ['SASS', 'TypeScript', 'React'],
    sourceCode: 'https://github.com',
    livePreview: 'https://github.com',
  },
]

const skills = [
  // skills can be added or removed
  // if there are no skills, Skills section won't show up
  'HTML',
  'CSS',
  'JavaScript',
  'TypeScript',
  'React',
  "Kotlin and Compose", 
  'Material UI',
  'Git / DevOps',
  'CI/CD',
  'Jest',
  "C#",
  "Python",
  "Java",
  "MERN"
]

const contact = {
  // email is optional - if left empty Contact section won't show up
  email: 'emilev06@gmail.com',
}

export { header, about, projects, skills, contact }
