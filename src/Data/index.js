import apptivityImage from "../Images/projects/apptivity.PNG";
import portfolioImage from "../Images/projects/portfolio.PNG";
import catsImage from "../Images/projects/cats.PNG";
import rugImage from "../Images/projects/rug.PNG";
import pigeonsImage from "../Images/projects/pigeons.PNG";
import photoShowroomImage from "../Images/projects/photo-showroom.PNG";
import mastermindImage from "../Images/projects/masterMind.PNG";
import redditImage from "../Images/projects/reddit.PNG";

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
  },
  {
    title: "Cats-ApiRest",
    description: `My First Rest API express server, hosted in Heroku, using PostgreSQL database with all the CRUD functionalities, with a simple webpage user platform. `,
    links: {
      gitHub:
        ["https://github.com/SchoolOfCode/w5_recap_sql-and-node-Rubengon84"],
      deployed: "https://cats-api-table.herokuapp.com/",
    },
    address: "../../Images/projects/cats.PNG",
    image: catsImage,
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
  },
];
