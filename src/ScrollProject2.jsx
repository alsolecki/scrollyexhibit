import React, { useState } from 'react';
import { Scrollama, Step } from 'react-scrollama';
import { Canvas } from '@react-three/fiber';
import Experience from './Experience.jsx';
import ProjectLine from "./ProjectLine.jsx";


import bluegrass01 from "./bluegrass01.jpg";
import bluegrass02 from "./bluegrass02.jpg";
import bluegrass03 from "./bluegrass03.jpg";
import bluegrass04 from "./bluegrass04.jpg";
import bluegrass05 from "./bluegrass05.jpg";



const ScrollProject2 = () => {
    const [currentStepIndex, setCurrentStepIndex] = useState(null);
    const [currentImage, setCurrentImage] = useState(bluegrass01);
    const [boxColor, setBoxColor] = useState('white');


    // This callback fires when a Step hits the offset threshold. It receives the
    // data prop of the step, which in this demo stores the index of the step.
    const onStepEnter = ({ data }) => {
        setCurrentStepIndex(data);
        if (data === 1) {
            setCurrentImage(bluegrass01);
            setBoxColor('red');
        } else if (data === 2) {
            setCurrentImage(bluegrass02);
            setBoxColor('orange');
        } else if (data === 3) {
            setCurrentImage(bluegrass03);
            setBoxColor('yellow');
        } else if (data === 4) {
            setCurrentImage(bluegrass04);
            setBoxColor('green');
        } else if (data === 5) {
            setCurrentImage(bluegrass01);
            setBoxColor('blue');
        } else if (data === 6) {
            setBoxColor('mediumpurple');
            setCurrentImage(bluegrass02);
        }
    };

    return (
        <div>
            <div className="img-box"
                style={{background: `url(${currentImage})`
            }}>

            <h1 style={{color: "lime"}}>Hello!</h1>
            <Canvas>
                <Experience boxColor={boxColor} />
            </Canvas>

                I'm sticky. The current triggered step index is: {currentStepIndex}

            </div>

            <Scrollama offset={0.5} onStepEnter={onStepEnter} >

                <Step data={1} key={1} dataImage={bluegrass01}>
                    <div className="stepbox" 
                        style={{ opacity: currentStepIndex === 1 ? 1 : 0.2 }}>
                        <h2>Bluegrass Music Hall of Fame & Museum</h2>
                        <p>Owensboro, KY</p>
                    </div>
                </Step>

                <ProjectLine title="International Marathon Center" location="Hopkinton, MA" />
                <ProjectLine title="The Sailing Museum" location="Newport, RI" />
                <ProjectLine title="National Soccer Hall of Fame" location="Frisco, TX" />
                <ProjectLine title="Bluegrass Music Hall of Fame & Museum" location="Owensboro, KY" />
                
                <Step data={2} key={2} dataImage={bluegrass02}>
                    <div className="stepbox"
                        style={{ opacity: currentStepIndex === 2 ? 1 : 0.2 }}>
                        <h2>Bluegrass Music Hall of Fame & Museum</h2>
                        <p>Owensboro, KY</p>
                    </div>
                </Step>

                <ProjectLine title="Arkansas First Ladies Exhibit" location="Old State House Museum" />
                <ProjectLine title="International Tennis Hall of Fame" location="Newport, RI" />
                <ProjectLine title="First Colony: Our Spanish Origins" location="Florida Museum of Natural History" />
                <ProjectLine title="Hollywood in the Heartland" location="The State Historical Museum of Iowa" />

                <Step data={3} key={3} dataImage={bluegrass03}>
                    <div className="stepbox"
                        style={{ opacity: currentStepIndex === 3 ? 1 : 0.2 }}>
                        <h2>Bluegrass Music Hall of Fame & Museum</h2>
                        <p>Owensboro, KY</p>
                    </div>
                </Step>

                <ProjectLine title="Catfish Row Museum" location="Vicksburg, MS" />
                <ProjectLine title="National Purple Heart Hall of Honor" location="New Windsor, NY" />
                <ProjectLine title="Vietnam Exhibit at the Hampton Roads Naval Museum" location="Norfolk, VA" />
                <ProjectLine title="Museum of the American Revolution" location="Philadelphia, PA" />

                <Step data={4} key={4} dataImage={bluegrass04}>
                    <div className="stepbox"
                        style={{ opacity: currentStepIndex === 4 ? 1 : 0.2 }} >
                        <h2>Bluegrass Music Hall of Fame & Museum</h2>
                        <p>Owensboro, KY</p>
                    </div>
                </Step>

                <ProjectLine title="4th Infantry Division Museum" location="Fort Carson, CO" />
                <ProjectLine title="Fort Defiance Interpretive Center" location="Clarksville, TN" />
                <ProjectLine title="Washington Crossing State Park Visitor Center & Museum" location="Titusville, NJ" />
                <ProjectLine title="Fort Monroe Visitor & Education Center" location="Newport, RI" />

                <Step data={5} key={5} dataImage={bluegrass05}>
                    <div className="stepbox"
                        style={{ opacity: currentStepIndex === 5 ? 1 : 0.2 }}>
                        <h2>Bluegrass Music Hall of Fame & Museum</h2>
                        <p>Owensboro, KY</p>
                    </div>
                </Step>

                <ProjectLine title="Becoming Clarksville" location="Customs House & Cultural Center" />
                <ProjectLine title="Central Gallery" location="Florida Museum of Natural History" />
                <ProjectLine title="First Landing Trail Center" location="Virginia Beach, VA" />
                <ProjectLine title="Hoh Rainforest Visitor Center" location="Olympic National Park" />
                <ProjectLine title="Washington Monument" location="Washington, DC" />

                <Step data={6} key={6} dataImage={bluegrass01}>
                    <div className="stepbox"
                        style={{ opacity: currentStepIndex === 5 ? 1 : 0.2 }}>
                        <h2>Bluegrass Music Hall of Fame & Museum</h2>
                        <p>Owensboro, KY</p>
                    </div>
                </Step>

                <ProjectLine title="Duke Energy History Exhibit" location="Charlotte, NC" />
                <ProjectLine title="The Civil Rights Act of 1964" location="Library of Congress" />
                <ProjectLine title="ACC Hall of Champions" location="Greensboro, NC" />
                <ProjectLine title="National Hip Hop Hall of Fame" location="New York, NY" />
                <ProjectLine title="Walter J. Brown Media Archive & Peabody Collection " location="University of Georgia" />
                <ProjectLine title="Reynolds Coliseum" location="North Carolina State University" />
                <ProjectLine title="" location="" />
                <ProjectLine title="" location="" />
                <ProjectLine title="" location="" />

            </Scrollama>

        </div>
    );
};

export default ScrollProject2;