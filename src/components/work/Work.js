import React from 'react';
import './Work.css';
import { Container, Grid, GridColumn, Image, Reveal } from 'semantic-ui-react';



const Work = () => {

    return (
        <div className="Work">
            
            <h1>
                Projects
            </h1>
            <Container>
            <Grid columns={3} centered>
                <Grid.Row>
                    <GridColumn>
                    <Reveal animated='small fade'>
                        <Reveal.Content visible>
                             <Image src='/images/profile-pic.png' size='medium' />
                        </Reveal.Content>
                        <Reveal.Content hidden>
                            <Image src='/images/profile-pic.png' size='medium' />
                        </Reveal.Content>
                    </Reveal>
                    </GridColumn>
                    <GridColumn>
                    <Reveal animated='small fade'>
                        <Reveal.Content visible>
                             <Image src='/images/profile-pic.png' size='medium' />
                        </Reveal.Content>
                        <Reveal.Content hidden>
                            <Image src='/images/profile-pic.png' size='medium' />
                        </Reveal.Content>
                    </Reveal>
                    </GridColumn>
                    <GridColumn>
                    <Reveal animated='small fade'>
                        <Reveal.Content visible>
                             <Image src='/images/profile-pic.png' size='medium' />
                        </Reveal.Content>
                        <Reveal.Content hidden>
                            <Image src='/images/profile-pic.png' size='medium' />
                        </Reveal.Content>
                    </Reveal>
                    </GridColumn>
                </Grid.Row>
                <Grid.Row>
                    <GridColumn>
                    <Reveal animated='small fade'>
                        <Reveal.Content visible>
                             <Image src='/images/profile-pic.png' size='medium' />
                        </Reveal.Content>
                        <Reveal.Content hidden>
                            <Image src='/images/profile-pic.png' size='medium' />
                        </Reveal.Content>
                    </Reveal>
                    </GridColumn>
                    <GridColumn>
                    <Reveal animated='small fade'>
                        <Reveal.Content visible>
                             <Image src='/images/profile-pic.png' size='medium' />
                        </Reveal.Content>
                        <Reveal.Content hidden>
                            <Image src='/images/profile-pic.png' size='medium' />
                        </Reveal.Content>
                    </Reveal>
                    </GridColumn>
                    <GridColumn>
                    <Reveal animated='small fade'>
                        <Reveal.Content visible>
                             <Image src='/images/profile-pic.png' size='medium' />
                        </Reveal.Content>
                        <Reveal.Content hidden>
                            <Image src='/images/profile-pic.png' size='medium' />
                        </Reveal.Content>
                    </Reveal>
                    </GridColumn>
                </Grid.Row>
            </Grid>
            </Container>
            </div>
    );
};

export default Work;

