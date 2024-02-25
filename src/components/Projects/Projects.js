import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/thesis.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

function Projects() {
  return (
    <Container fluid className="project-section" id="projects">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My <strong className="purple">Projects </strong>
        </h1>

        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              // imgPath={chatify}
              isBlog={true}
              title={<span style={{ color: 'purple' }}>Complex-valued deep learning based denoising for MR images</span>}
              description={
                <div>
                  <ul>
Developed a novel complex-valued deep learning model for denoising high-resolution gradient echo
MR images, improving SNR and facilitating early detection of microcalcifications in breast scans, a 
precursor to breast cancer. 
                  </ul>
                </div>
              }
  
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              // imgPath={chatify}
              isBlog={true}
              title="Federated learning project"
              description={
                <div>
                  <ul>
                  <li>Researched federated learning concepts, built a prototype framework that enables loading of trained weights from multiple sources (hospitals) to optimize a centralized model while preserving clinical data privacy.</li>
        <li>Improved communication and collaboration skills while working in the interdisciplinary student team.</li>
        <li>Pitched the solution to an audience of students and industry experts.</li>
 
                  </ul>
                </div>
              }
  
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              // imgPath={chatify}
              isBlog={true}
              title="Data Glove"
              description={
                <div>
                  <ul>
      
        <li>Designed and developed a biomechanical data glove to track finger movements and measure joint angles, which included: PCB design, C programming for controller and sensor integration, and 3D modelling of hand using Blender for visualization.</li>
        <li>Singlehandedly managed the entire development process, from initial design to final product.</li>
      </ul>
                </div>
              }
  
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              // imgPath={chatify}
              isBlog={true}
              title="COVID-Care Mobile App"
              description={
                <div>
                  <ul>
                  <li>Developed an android application using Android Studio, enabling remote monitoring of COVID-19 patients by capturing and transferring vital physiological parameters to physicians in real-time.</li>
        <li>Integrated Google services such as SMS, Firebase Cloud, and Mail login into the application. This enhanced the end-to-end user experience, ensuring seamless authentication, data storage, and communication for both patients and physicians.</li>

                  </ul>
                </div>
              }
  
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              // imgPath={chatify}
              isBlog={true}
              title="Voice Disorder Classification App"
              description={
                <div>
                  <ul>
                  <li>Collaborated with SRMC Medical College, to develop an android application for estimating fundamental
frequency and displaying real-time LTAS spectra (long-term average spectrum) of speech "vowels".</li>
<li>The app facilitates the classification of voice disorder based on the fundamental frequency estimated when pronouncing “vowels”.</li>

                  </ul>
                </div>
              }
  
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
