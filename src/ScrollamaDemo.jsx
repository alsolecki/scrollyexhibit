import React, { useState } from 'react';
import { Scrollama, Step } from 'react-scrollama';

const ScrollamaDemo = () => {
  const [currentStepIndex, setCurrentStepIndex] = useState(null);

  // This callback fires when a Step hits the offset threshold. It receives the
  // data prop of the step, which in this demo stores the index of the step.
  const onStepEnter = ({ data }) => {
    setCurrentStepIndex(data);
  };

  return (
    <div style={{ margin: '60vh 0', border: '2px dashed skyblue' }}>
      <div style={{ position: 'sticky', top: "25vh", border: '10px solid orchid', height: "60vh" }}>

        I'm sticky. The current triggered step index is: {currentStepIndex}

      </div>


      <Scrollama offset={0.5} onStepEnter={onStepEnter} debug>
        {[1, 2, 3, 4, 5, 6, 7].map((_, stepIndex) => (
          <Step data={stepIndex} key={stepIndex}>
            <div
              style={{
                margin: '50vh 0',
                border: '5px solid limegreen',
                width: '80%',
                opacity: currentStepIndex === stepIndex ? 1 : 0.2,
              }}
            >
              I am a Scrollama Step of index {stepIndex}
            </div>
          </Step>
        ))}
      </Scrollama>
    </div>
  );
};

export default ScrollamaDemo;