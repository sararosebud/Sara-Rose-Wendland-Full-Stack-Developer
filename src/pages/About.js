import { TypeAnimation } from "react-type-animation";
import Card from "react-bootstrap/Card";
import { Container } from "react-bootstrap";

function About() {
  return (
    <div className="heroAbout">
      <Container fluid className="contentContainer">
        <Card className="text-white card-no-border">
          <div className="row">
            <div className="col-md-6">
              <Card.Title className="heroTitle">
                Hi There! I'm Sara Rose Wendland!
              </Card.Title>
              <Card.Text className="heroText">
                <TypeAnimation
                  sequence={[
                    "Attempting to Code Hello World",
                    1000,
                    "Attempting to Code World Peace",
                    1000,
                    "Attempting to Code World Peace One Line at a Time!",
                    1000,
                  ]}
                  speed={50}
                  repeat={0}
                />
              </Card.Text>
              <Card.Text className="heroDescription">
              ｛ From Darkroom to Debugger｝<br></br>
              Full Stack Developer with a Rich
                Artistic Background: As an accomplished photographer with
                decades of artistic experience, my journey has been one of
                creative exploration and technical mastery. With a diverse
                background in visual storytelling and artistry, I bring a
                unique perspective to my role as a Full Stack Web Developer.
                My path to web development was paved with rigorous training
                in a bootcamp, where I cultivated a strong foundation in a
                range of technologies. Balancing this transformative journey
                with the responsibilities of managing multiple priorities,
                while maintaining an A+ average, I've proven my ability to
                excel in dynamic and challenging environments.
              </Card.Text>
            </div>
            <div className="col-md-6 heroImage">
            

            </div>
          </div>
        </Card>
      </Container>
    </div>
  );
}

export default About;
