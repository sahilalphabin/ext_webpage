import React, { useState, useCallback } from 'react';
import '../styles/HowItWorks.css';
import StepCard from './StepCard';

// function Step({ step, isActive, onClick }) {
//   return (
//     <div 
//       className={`step-card ${isActive ? 'active' : ''}`}
//       onClick={onClick}
//     >
//       <div className="step-icon">{step.icon}</div>
//       {step.number < 6 && (
//         <div className="timeline-connector"></div>
//       )}
//       <div className="step-content">
//         <h3>{step.title}</h3>
//         <p>{step.description}</p>
//         <div 
//           className="step-details"
//           style={{ display: isActive ? 'block' : 'none' }}
//         >
//           <div dangerouslySetInnerHTML={{ __html: step.details }} />
//         </div>
//       </div>
//       <div className="dropdown-icon">
//         <i className={`fas fa-chevron-${isActive ? 'up' : 'down'}`}></i>
//       </div>
//     </div>
//   );
// }

// const MemoizedStep = React.memo(Step);

function HowItWorks() {
  const [activeSteps, setActiveSteps] = useState([]);

  // Define steps outside of render to keep a consistent reference
  const steps = React.useMemo(() => [
    {
      number: 1,
      title: 'Install Extension',
      description: 'Install E2E Test Generator from the VS Code Marketplace and reload your editor.',
      details: 'Search for "E2E Test Generator" in the VS Code extensions marketplace and click install.',
      icon: '🔌',
      gif: 'https://raw.githubusercontent.com/sahilalphabin/Static_Gifs/main/Demo_Record.gif'
    },
    {
      number: 2,
      title: 'Configure Test Details',
      description: 'Set up your test file name, test name, and target URL in the E2E Test Generator panel.',
      details: `
        <ul>
          <li>Click the TestGenX icon in the Activity Bar</li>
          <li>Or run <code>View: Show E2E Test Generator</code> from Command Palette</li>
          <li>Enter test file name (auto-appends .spec.js)</li>
          <li>Provide unique test name</li>
          <li>Input target URL (validates and auto-corrects protocol)</li>
        </ul>`,
      icon: '⚙️',
      gif: 'https://raw.githubusercontent.com/sahilalphabin/Static_Gifs/main/Demo_Test.gif'
    },
    {
      number: 3,
      title: 'Start Recording',
      description: 'Launch the recorder to capture user interactions with your web application.',
      details: `
        <ul>
          <li>Click "Start Recording" to launch browser with debugging controls</li>
          <li>Perform user actions in the embedded browser</li>
          <li>Use Context Menu to insert assertions</li>
          <li>Handle multi-page scenarios</li>
          <li>Pause/resume as needed</li>
          <li>Insert/Add test steps with floating toolbar</li>
          <li>Check for live recorded locator in the spec.js file</li>
        </ul>`,
      icon: '📹',
      gif: 'https://raw.githubusercontent.com/sahilalphabin/Static_Gifs/main/Demo_Record.gif'
    },
    {
      number: 4,
      title: 'Insert Assertions',
      description: 'Add validation points to verify the correctness of your application.',
      details: `
        <p>Right-click any element to add assertions:</p>
        <ul>
          <li>Element visibility/state checks</li>
          <li>Text content validation</li>
          <li>Attribute value assertions</li>
          <li>DOM state verification</li>
        </ul>
        <img src="https://raw.githubusercontent.com/sahilalphabin/Static_Gifs/main/Demo_Assertions.gif" alt="Assertions Demo" />
        <img src="https://raw.githubusercontent.com/sahilalphabin/Static_Gifs/main/Demo_Assertions.png" alt="Assertions Example" />`,
      icon: '✔️'
    },
    {
      number: 5,
      title: 'Generate Test Code',
      description: 'Convert your recorded actions into Playwright test code with intelligent element detection.',
      details: `
        <ul>
          <li>Stop recording when finished</li>
          <li>Review generated Playwright test file (.spec.js)</li>
          <li>Execute tests directly from VS Code terminal</li>
        </ul>
        <img src="https://raw.githubusercontent.com/sahilalphabin/Static_Gifs/main/Demo_Code_Gen.png" alt="Code Generation Example" />`,
      icon: '💻'
    },
    {
      number: 6,
      title: 'Run and Debug Tests',
      description: 'Execute your tests and debug any issues directly within VS Code.',
      details: `
        <p>Run tests from:</p>
        <ul>
          <li>Test Explorer: Locate testcase in spec.js file and click run icon</li>
          <li>Settings:
            <ul>
              <li>Webview Panel Settings (active when no config file exists)</li>
              <li>Playwright Config File (takes priority if present)</li>
            </ul>
          </li>
        </ul>
        <img src="https://raw.githubusercontent.com/sahilalphabin/Static_Gifs/main/Demo_Test.gif" alt="Test Execution Demo" />`,
      icon: '🛠️'
    }
  ], []);

  // Use useCallback to memoize the click handler
  const handleStepClick = useCallback((stepNumber) => {
    setActiveSteps(prev => {
      if (prev.includes(stepNumber)) {
        return prev.filter(num => num !== stepNumber);
      }
      return [...prev, stepNumber];
    });
  }, []);

  return (
    <section className="how-it-works" id="how-it-works">
      <h1>How It Works</h1>
      <div className="steps-container">
        <div className="steps-list">
          {steps.map((step) => (
            <StepCard
              key={step.number}
              number={step.number}
              title={step.title}
              description={step.description}
              icon={step.icon}
              details={step.details}
              isActive={activeSteps.includes(step.number)}
              onClick={() => handleStepClick(step.number)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default HowItWorks;