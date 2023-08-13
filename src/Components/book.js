import React from 'react';
import HTMLFlipBook from 'react-pageflip';
// import Container from 'react-bootstrap/Container';
import Page from './BookPages'; 
import Canyon from '../assets/images/canyon.jpg';
import CanyonTree from '../assets/images/canyontree.jpg';
import TetonStars from '../assets/images/tetonstars.jpg';
import Toast from "../assets/images/toast.png"
import Bison from '../assets/images/bison.jpg';
import Gush from '../assets/images/gush.jpg';
// import LilBear from '../assets/CutieWave.png'
import leftPage from '../assets/images/1-left.png'
import quizImage from '../assets/images/testing.png'
import weatherAnimal from '../assets/images/weatheranimal2.png'
import volunteer from '../assets/images/volunteer.png'
import volunteer2 from '../assets/images/cleanvolunteer.png'
import notetaker from '../assets/images/notetaker.png'
import { Container } from 'react-bootstrap';



function MyBook(props) {
  const imagePaths = [Canyon, TetonStars, Bison, Gush];

  const projects = [
    {
      header: "My Work",
      content: "Turn The Page To See My Work ",
      imageSrc: Canyon,
      github: "https://github.com/sararosebud"
   
    },
    {
      header: "DreamLand WonderLand",
      content: "Designed an exemplary e-commerce website to provide users with a seamless shopping experience for organic and earth-friendly Pajamas. Leveraged dynamic JavaScript, CSS, SCSS, JSON, MongoDB, and more to craft a user-friendly interface and ensure comprehensive system functionality.",
      imageSrc: leftPage,
      link: 'https://arcane-spire-25027-6f1b8d854313.herokuapp.com/',
      github: "https://github.com/sararosebud/DreamLand-WonderLand"
    },
    {
      header: "VolunteerQuest",
      content: "Developed a dynamic platform connecting individuals with local community and non-profit organizations. Contributed to a user-friendly interface and backend development utilizing Node.js, Express.js, Handlebars.js, MySQL, and more.",
      imageSrc: volunteer2,
      link: 'https://volunteer-quest.herokuapp.com/',
      github: "https://github.com/sararosebud/Volunteer-Quest-2.0"
    },
    {
        header: "A Toast to the Weather",
        content: "Streamlined the drinking experience by integrating real-time weather data with cocktail information. Created a single-page application using HTML, CSS, JavaScript, jQuery, and APIs to recommend drinks based on local weather.",
        imageSrc: Toast,
        link: "https://sararosebud.github.io/A-Toast-to-the-Weather/",
        github: "https://github.com/sararosebud/A-Toast-to-the-Weather"
    },
    {
      header: "Note Taker",
      content: "Note Taker app that can be used to write and take notes. The app uses an Express.js backend and saves and retrieves note data from a JSON file. The apps front end was built, and the backend was created and connected.",
      imageSrc: notetaker,
      link: "https://nodejs-note-taker-sarawendland.herokuapp.com/notes",
      github: "https://github.com/sararosebud/NoteTaker"
  },
  {
    header: "Coding Quiz",
    content: "A browser-based timed quiz for coding bootcamp students to assess Java Script Fundamentals. Features multiple-choice questions, progress comparison, and a polished user interface with dynamic HTML, CSS, and JavaScript.",
    imageSrc: quizImage,
    link: "https://sararosebud.github.io/coding-quiz/",
    github: "https://github.com/sararosebud/coding-quiz"
},
{
  header: "Awesome Weather App",
  content: "A browser-based Weather Dashboard uses Open Weather Map's API to provide current and 5-day forecasted weather conditions for user-searched cities, displaying city name, date, weather icon, temperature, humidity, and pressure. It also stores a search history as clickable buttons for easy access to past city conditions.",
  imageSrc: weatherAnimal,
  link: "https://sararosebud.github.io/A-Toast-to-the-Weather/",
  github: "https://github.com/sararosebud/Five-Day-Forecast"
}
  ];

  const pages = projects.map((project, index) => (
    <Page
      key={index}
      number={index + 1}
      imageSrc={project.imageSrc}
      link={project.link}
      github={project.github}
    >
      <h2>{project.header}</h2>
      <p>{project.content}</p>
      
    </Page>
  ));

  return (
    <Container className='heroResume portfolio '>
   
      <HTMLFlipBook
        width={500}
        height={600}
        size="stretch"
        minWidth={315}
        maxWidth={1000}
        minHeight={400}
        maxHeight={1533}
        maxShadowOpacity={0.5}
        showCover={true}
        mobileScrollSupport={true}
      >
        {pages}
      </HTMLFlipBook>
      </Container>
 
  );
}

export default MyBook;