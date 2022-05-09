import React from "react";
import "./Header.scss";
import Typewriter from "typewriter-effect";
import ButtonAnimatedHeader from "./Btn";
import { useState } from "react";
import ParticlesBg from "particles-bg";



const Header = () => {
	const [BtnVis, setBtnVis] = useState(false); //show button
  
	return (
		<header className="App-header">
	<ParticlesBg type='cobweb' color="#F1FAEE" className="particles" bg={{
    position: "absolute",
    
  }
    
  }/>
			<Typewriter
				options={{
					delay: 100,
          wrapperClassName: "typewriter-wrapper",
				}}
				onInit={(typewriter) => {
					typewriter.typeString("Hi, I'm msobczyk!").pauseFor(1000).deleteAll();
					typewriter
						.typeString("I'm 21 year old student.")
						.pauseFor(1000)
						.deleteAll();
					typewriter
						.typeString("Currently doing some stuff in web dev.")
						.pauseFor(1000)
						.start()
						.callFunction(() => {
							setBtnVis(true);
						});
				}}
			/>

			{BtnVis ? <ButtonAnimatedHeader /> : null}
		</header>
	);
};

export default Header;
