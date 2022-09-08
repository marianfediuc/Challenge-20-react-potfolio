import React from 'react'; 
// import images from assets
import myImage from '../../assets/images/myimage.jpeg';
import flowerImage from '../../assets/images/myflower.png';
import { Col } from 'react-bootstrap';


function About() {
    return(
    <section className="title">
      
      <div className="row justify-content-center" id="about-container">       
      <Col lg={6} md={12}>
      <center><img src={myImage} className="my-image" alt="nicole-profile"/></center>
      <p class="name">Marian Fediuc</p>
      <p class="job">full stack web developer</p>
      <h2 class="education">a little about me</h2>
        <p>
        Hello, I'm Marian! I switched gears from my education in Material Science and System Design to take on Web Development to keep challenging myself in ways I thought I never could. 
        Web Development allows me to continually create and creatively find new ways to make processes better. I always believed that anything can be improved and 
        there are different ways to solve problems.
        <br></br>
        <br></br>
        With that being said, I am Full Stack Web Developer based in the Austin Texas Area with a Bachelor’s Degree and 12+ years professional experience in System Design. I am a naturally curious person which makes me want to always learn new things. I am a problem-solver who 
        questions everything. I am a hard worker who has an eye for detail and who enjoys the little things in life. You will always find a smile on my face, I am also problem solver with a optimistic personality.
        <br></br>
        <br></br>
         </p>
      </Col>

      </div>
    </section> 
)}
  
export default About;