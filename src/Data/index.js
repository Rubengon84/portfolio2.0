
// Projects Images
import apptivityImage from "../Images/projects/apptivity.PNG";
import portfolioImage from "../Images/projects/portfolio.PNG";
import catsImage from "../Images/projects/cats.PNG";
import rugImage from "../Images/projects/rug.PNG";
import pigeonsImage from "../Images/projects/pigeons.PNG";
import photoShowroomImage from "../Images/projects/photo-showroom.PNG";
import mastermindImage from "../Images/projects/masterMind.PNG";
import redditImage from "../Images/projects/reddit.PNG";
/******************************/

//Tech logo images
import agileLogo from "../Images/Tech Logos/agile.png";
import jsLogo from "../Images/Tech Logos/JavaScript_Logo.png";
import css3Logo from "../Images/Tech Logos/css-3-logo.png";
import htmlLogo from "../Images/Tech Logos/html5.png";
import frontEndLogo from "../Images/Tech Logos/front-end-dev-languages.png";
import auth0Logo from "../Images/Tech Logos/auth0-logo.png";
import cypressLogo from "../Images/Tech Logos/Cypress.png";
import expressLogo from "../Images/Tech Logos/express.png";
import figmaLogo from "../Images/Tech Logos/Figma.jpg";
import gitHubActionsLogo from "../Images/Tech Logos/github-actions.png";
import gitHubLogo from "../Images/Tech Logos/GitHub-Logo.png";
import herokuLogo from "../Images/Tech Logos/heroku.png";
import jestLogo from "../Images/Tech Logos/jest.png";
import jqueryLogo from "../Images/Tech Logos/jquery.png";
import netlifyLogo from "../Images/Tech Logos/Netlify.png";
import nodeLogo from "../Images/Tech Logos/nodejs.jpg";
import postgresSQLLogo from "../Images/Tech Logos/postgresSQL.png";
import postmanLogo from "../Images/Tech Logos/postman.png";
import reactLogo from "../Images/Tech Logos/react.png";
import reduxLogo from "../Images/Tech Logos/Redux.png";
/*******************************/

export const projectsData = [
  {
    title: "Reddit-Image",
    description: `This is my first React & React-Redux App create from scratch, totally functional, getting the data from reddit api, and displayed in a react responsive SPA.`,
    links: {
      gitHub: ["https://github.com/Rubengon84/reddit-react"],
      deployed: "https://reddit-jimmy.netlify.app/",
    },
    address: "../../Images/projects/reddit.PNG",
    image: redditImage,
    techStack: ["frontEnd", "react", "redux", "gitHub"],
  },
  {
    title: "Portfolio",
    description: `This is my large first website project, trying to be focus on make it responsive of any device’s size using CSS-Grid and Flex box, interactive to the user, and with different layouts and features. I made it in black and white at the biggening but with option button to make it colorful, Only used HTML, CSS and plain JavaScript, not any modules used, all the features are designed and coded from the scratch.`,
    links: {
      gitHub: ["https://github.com/Rubengon84/Rubengon84.github.io"],
      deployed: "https://rubengon84.github.io/",
    },
    address: "../../Images/projects/portfolio.PNG",
    image: portfolioImage,
    techStack: ["html", "css3", "javaScript", "gitHub"],
  },
  {
    title: "Master-Mind",
    description: `First team week project in School of Code, Using Agile-Scrum development process, divided it in two repositories, back-end, Rest-Api express server with a postgreSQl database hosted in heroku, and Front-end react SPA hosted on netlify`,
    links: {
      gitHub: [
        "https://github.com/SchoolOfCode/national-project-week-repo-2-the-room-23",
        "https://github.com/SchoolOfCode/national-project-week-the-room-23",
      ],
      deployed: "https://dreamy-mcnulty-895324.netlify.app/",
    },
    address: "../../Images/projects/masterMind.PNG",
    image: mastermindImage,
    techStack: [
      "figma",
      "agile",
      "frontEnd",
      "react",
      "express",
      "postgresSQL",
      "heroku",
      "netlify",
      "gitHub",
    ],
  },
  {
    title: "Apptivity",
    description: `Final large team project in School of Code, Using Agile development process with an hybrid Scrum-Kamban tecqniques. Full planning process with Diney Ideation, brain storming, user-personas, user-stories, flow-diagrams, sketch, wireframes... . Project devided it in a front-end part with a React SPA, focused it on a responsive, clear and interactive design, with a completed unit test and end-to-end test (Cypress) implemented. Back-end express Rest-API with postgreSQl database hosted in Heroku and completed CI test with supertest, Github Actions, and Postmant CI tests.       `,
    links: {
      gitHub: [
        "https://github.com/SchoolOfCode/final-project-front-end-hack-to-the-future",
        "https://github.com/SchoolOfCode/final-project-api-hack-to-the-future",
      ],
      deployed: "https://apptivity-app.netlify.app/",
    },
    address: "../../Images/projects/apptivity.PNG",
    image: apptivityImage,
    centerPiece: true,
    techStack: [
      "figma",
      "agile",
      "auth0",
      "frontEnd",
      "react",
      "cypress",
      "jest",
      "express",
      "postman",
      "gitHubActions",
      "postgresSQL",
      "heroku",
      "netlify",
      "gitHub",
    ],
  },
  {
    title: "Cats-ApiRest",
    description: `My First Rest API express server, hosted in Heroku, using PostgreSQL database with all the CRUD functionalities, with a simple webpage user platform. `,
    links: {
      gitHub: [
        "https://github.com/SchoolOfCode/w5_recap_sql-and-node-Rubengon84",
      ],
      deployed: "https://cats-api-table.herokuapp.com/",
    },
    address: "../../Images/projects/cats.PNG",
    image: catsImage,
    techStack: [
      "html",
      "css3",
      "javaScript",
      "express",
      "postgresSQL",
      "heroku",
      "gitHub",
    ],
  },
  {
    title: "Rug-Website",
    description: `My first project designed for a client, the goals for this project were, being focus on SEO, fast loading for a good ranking on Search engines, making it responsive to any device’s size, interactive and attractive to users. Following the instructions and demands from the client using continuous deployment. Techs used, HTML, CSS, JavaScript, Python (for sending the form to the client), not any modules used, all the features are designed and coded from the scratch.`,
    links: {
      gitHub: ["https://github.com/Rubengon84/Rug-Website"],
      deployed: "https://rug-website-project.netlify.app/",
    },
    address: "../../Images/projects/rug.PNG",
    image: rugImage,
    techStack: ["html", "css3", "javaScript", "gitHub"],
  },
  {
    title: "Photo-Showroom",
    description: `My nephew photo showroom project during the chrismas week break in School of code, with the main goal of create a front-end responsive interactive photo showroom webpage and a linked back-end API rest deployed on Heroku. The Back-End is an express node server using PostgreSQL data-base and the Front-End is a single web page using HTML, CSS and JavaScript. All the interactive animation and features in the Front-end are designed and developed from the scratch without using any library or modules.`,
    links: {
      gitHub: ["https://github.com/Rubengon84/Ivan-webpage"],
      deployed: "https://ivan-gallery.herokuapp.com/",
    },
    address: "../../Images/projects/photo-showroom.PNG",
    image: photoShowroomImage,
    techStack: [
      "html",
      "css3",
      "javaScript",
      "express",
      "postgresSQL",
      "heroku",
      "gitHub",
    ],
  },
  {
    title: "Pigeons-Authentification",
    description: `La práctica de React SPA se centró en usar la autenticación auth0 y hacer comentarios receptivos mediante la actualización de objetos de datos de JavaScript.`,
    links: {
      gitHub: ["https://github.com/SchoolOfCode/w10_recap-tasks-Rubengon84"],
      deployed: "https://wikipigeons.netlify.app/",
    },
    address: "../../Images/projects/pigeons.PNG",
    image: pigeonsImage,
    techStack: ["auth0", "frontEnd", "react", "express", "netlify", "gitHub"],
  },
];

export const techStack = {
  agile: agileLogo,
  auth0: auth0Logo,
  css3: css3Logo,
  cypress: cypressLogo,
  express: expressLogo,
  figma: figmaLogo,
  frontEnd: frontEndLogo,
  gitHubActions: gitHubActionsLogo,
  gitHub: gitHubLogo,
  heroku: herokuLogo,
  html: htmlLogo,
  javaScript: jsLogo,
  jest: jestLogo,
  jquery: jqueryLogo,
  netlify: netlifyLogo,
  nodeJs: nodeLogo,
  postgresSQL: postgresSQLLogo,
  postman: postmanLogo,
  react: reactLogo,
  redux: reduxLogo
}