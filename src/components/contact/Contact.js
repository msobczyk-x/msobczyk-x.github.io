import React from 'react';
import './Contact.css';
import {Form, Container} from 'semantic-ui-react'


const Contact = () => {

    return (
        <div className="Contact">
            
              <h1>
                  Contact
              </h1>
              <Container textAlign="left" className="Form-Container">

              
              <h3>Have a question or want to work together ?</h3>
              
              <Form className="Form" size="big">
    <Form.Field>
      
      <Form.Input placeholder='Name' width={6} />
    </Form.Field>
    <Form.Field>
      
      <Form.Input placeholder='Enter email' width={6} />
    </Form.Field>
    <Form.Field>
    <Form.TextArea placeholder='Your message' width={6} />
    </Form.Field>
    <Form.Button type='submit'>Submit</Form.Button>
    </Form>
    </Container>
            </div>
    );
};

export default Contact;

