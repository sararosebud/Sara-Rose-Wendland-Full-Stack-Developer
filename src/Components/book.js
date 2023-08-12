import React from 'react';
import HTMLFlipBook from 'react-pageflip';
// import Container from 'react-bootstrap/Container';
import Page from './Pages'; 
import Canyon from '../assets/images/canyon.jpg';
import CanyonTree from '../assets/images/canyontree.jpg';
import TetonStars from '../assets/images/tetonstars.jpg';
import Bison from '../assets/images/bison.jpg';
import Gush from '../assets/images/gush.jpg';
// import LilBear from '../assets/CutieWave.png'
import leftPage from '../assets/images/1-left.png'


function MyBook(props) {
  const imagePaths = [Canyon, TetonStars, Bison, Gush];

  const projects = [
    {
      header: "My Work",
      content: "Turn The Page To See My Work ",
      imageSrc: Canyon,
      
   
    },
    {
      header: "DreamLand WonderLand",
      content: "Designed an exemplary e-commerce website to provide users with a seamless shopping experience for organic and earth-friendly Pajamas. Leveraged dynamic JavaScript, CSS, SCSS, JSON, MongoDB, and more to craft a user-friendly interface and ensure comprehensive system functionality.",
      imageSrc: leftPage,
      link: 'https://arcane-spire-25027-6f1b8d854313.herokuapp.com/'
    },
    {
      header: "VolunteerQuest",
      content: "Developed a dynamic platform connecting individuals with local community and non-profit organizations. Contributed to a user-friendly interface and backend development utilizing Node.js, Express.js, Handlebars.js, MySQL, and more.",
      imageSrc: Bison,
      link: 'https://volunteer-quest.herokuapp.com/'
    },
    {
        header: "A Toast to the Weather",
        content: "Streamlined the drinking experience by integrating real-time weather data with cocktail information. Created a single-page application using HTML, CSS, JavaScript, jQuery, and APIs to recommend drinks based on local weather.",
        imageSrc: CanyonTree,
        link: "https://sararosebud.github.io/A-Toast-to-the-Weather/"
    },
    {
      header: "A Toast to the Weather",
      content: "Streamlined the drinking experience by integrating real-time weather data with cocktail information. Created a single-page application using HTML, CSS, JavaScript, jQuery, and APIs to recommend drinks based on local weather.",
      imageSrc: CanyonTree,
      link: "https://sararosebud.github.io/A-Toast-to-the-Weather/"
  },
  {
    header: "A Toast to the Weather",
    content: "Streamlined the drinking experience by integrating real-time weather data with cocktail information. Created a single-page application using HTML, CSS, JavaScript, jQuery, and APIs to recommend drinks based on local weather.",
    imageSrc: CanyonTree,
    link: "https://sararosebud.github.io/A-Toast-to-the-Weather/"
},
{
  header: "A Toast to the Weather",
  content: "Streamlined the drinking experience by integrating real-time weather data with cocktail information. Created a single-page application using HTML, CSS, JavaScript, jQuery, and APIs to recommend drinks based on local weather.",
  imageSrc: CanyonTree,
  link: "https://sararosebud.github.io/A-Toast-to-the-Weather/"
}
  ];

  const pages = projects.map((project, index) => (
    <Page
      key={index}
      number={index + 1}
      imageSrc={project.imageSrc}
      link={project.link}
    >
      <h2>{project.header}</h2>
      <p>{project.content}</p>
    </Page>
  ));

  return (
   
      <HTMLFlipBook
        width={500}
        height={500}
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
 
  );
}

export default MyBook;