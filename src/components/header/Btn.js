import React from 'react';
import { Button, Icon, Transition } from 'semantic-ui-react';
import './btn.scss'



const ButtonAnimatedHeader = () => (
  <Transition transitionOnMount={true} animation='scale' duration={500} >
      <div className='btn'>
        <Button animated className='button-container' onClick={() => {
          window.scrollTo(
            {
              top: 1000,
              behavior: 'smooth',
            }
          );
        }}>
          <Button.Content visible>Next</Button.Content>
          <Button.Content hidden>
            <Icon name='arrow right' />
          </Button.Content>
        </Button>
      </div>
      </Transition>
);

export default ButtonAnimatedHeader;