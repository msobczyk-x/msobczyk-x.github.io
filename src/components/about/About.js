import React, {useRef} from 'react';
import './About.css';
import { Image, Grid, Progress, Button } from 'semantic-ui-react';


const About = () => {
    const AboutRef = useRef(null);
    return (
        <div className="About" id="About" ref={AboutRef}>
            
              <h1>
                  About me
              </h1>
              
              <Grid container columns={2}>
                  <Grid.Column>
                        <h2>Who am I</h2>
                        <Image src='./images/profile-pic.png' size='medium' circular centered />
                        <h4>I'm 21 student, learning for a Front-End Development. I have serious passion in animations, websites.</h4>
                  </Grid.Column>
                  <Grid.Column>
                      <h2>My skills</h2>
                      <Progress percent={90} progress='percent' color='green' size='small' label='HTML' />
                      <Progress percent={90} progress='percent' color='green' size='small' label='CSS' />
                      <Progress percent={90} progress='percent' color='green' size='small' label='JS' />
                      <Progress percent={90} progress='percent' color='green' size='small' label='React' />
                      <Progress percent={90} progress='percent' color='green' size='small' label='Python' />
                      <Progress percent={90} progress='percent' color='green' size='small' label='Adobe Photoshop/Illustrator' />
                  </Grid.Column>
                  <Grid.Column>
                    <Button circular color='github' icon='github' onClick={() => {
                        window.location.href = 'https://github.com/msobczyk-x';
                    }} />
                    <Button circular color='linkedin' icon='linkedin' onClick={() => {
                        window.location.href = 'https://linkedin.com/in/maciej-sobczyk';
                    }} />
                    <Button circular color='instagram' icon='instagram' onClick={() => {
                        window.location.href = 'https://instagram.com/sobczyk.foto/';
                    }} />
                  </Grid.Column>
              </Grid>
            </div>
    );
};

export default About;

