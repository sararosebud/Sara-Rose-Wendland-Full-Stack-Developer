import { TypeAnimation } from "react-type-animation";
import Card from "react-bootstrap/Card";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import ResumeDoc from "../assets/Sara Rose Wendland Full Stack Resume.docx"



function Resume() {
  return (
    <div className="heroResume">
      <Container fluid className="contentContainer">
        <Card className="font card-no-border">
          <div className="row">
            <div className="col-md-6">
              <Card.Title className="heroTitle">
                <h1>SARA ROSE WENDLAND | Austin, TX </h1><br></br>

                <div>
     

      <a
        href={ResumeDoc}
        download="Sara-Rose-Wendland-Resume-dox"
        target="_blank"
        rel="noreferrer"
      >
        <button>Download Resume</button>
      </a>
    </div>
              </Card.Title>
              <Card.Text className="heroText">
                <Link
                  to="https://github.com/sararosebud"
                  target="blank"
                  className="nav-link resume-font"
                >
                  Github
                </Link>
                <Link
                  to="https://www.linkedin.com/in/sara-wendland"
                  className="nav-link resume-font"
                >
                  LinkedIn
                </Link>
                <Link
                  to="https://stackoverflow.com/users/21433265/rosebudsara"
                  className="nav-link resume-font"
                >
                  Stack Overflow
                </Link>
              </Card.Text>
              <Card.Text className="heroDescription">
                SUMMARY: "ARTFULLY ENGINEERED FULL STACK DEVELOPER | BRIDGING
                CREATIVITY AND CODE"
                <br></br>
                📸 Accomplished photographer with extensive artistic expertise,
                seamlessly infusing creativity into Full Stack Web Development.
                <br></br>
                🎨 Mastery across diverse technologies cultivated through
                rigorous bootcamp training.
                <br></br>
                🏆 A+ average while effectively managing multiple priorities,
                showcasing adaptability and excellence in dynamic environments.
                <br></br>
                🚀 Transformative journey from artistic exploration to robust
                coding, bringing a distinct and innovative perspective to
                application development.
                <br></br>
                🌟 Lifelong learner skilled in harmonizing ingenuity and
                analytical thinking to produce user-friendly solutions.
                <br></br>
                🔍 Renowned for a keen wit and unwavering attention to detail,
                driving success even in the face of complex challenges.
              </Card.Text>
            </div>
            <div className="col-md-6 contentContainer">
              <Container className="contentContainer">
                <Card>
                  <Card.Title className="heroTitle">Technical Skills</Card.Title>
                  <Card.Text >
                    <ul>
                      <li> HTML5 </li>
                      <li> CSS</li>
                      <li> JQuery</li>
                      <li> Javascript</li>
                      <li> Bootstrap </li>
                      <li> AJAX</li>
                      <li>SASS </li>
                    </ul>
                    <ul>
                      <li>MySQL</li>
                      <li>MongoDB</li>
                      <li>Express</li>
                      <li>ReactJS</li>
                      <li>Node</li>
                      <li>Handlebars</li>
                      <li>Firebase</li>
                      <li>AWS</li>
                      <li>Webpack</li>
                      <li>Gulp</li>
                    </ul>
                  </Card.Text>
                </Card>
                <Card>
                  <Card.Title className="heroTitle">Additional Skills</Card.Title>
                  <Card.Text>
                    <ul>
                      <li> Graphic Design </li>
                      <li> Adobe Photoshop</li>
                      <li> Adobe Lightroom</li>
                      <li> Adobe Illustrator</li>
                      <li> Adobe Express</li>
                      <li> Adobe Firefly</li>
                      <li> Visual Design </li>
                    </ul>
                  
                  </Card.Text>
                </Card>
              </Container>
            </div>
          </div>
        </Card>
      </Container>
    </div>
  );
}

export default Resume;
