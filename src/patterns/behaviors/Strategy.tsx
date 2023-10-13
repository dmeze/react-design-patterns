import React, { useState } from 'react';

const Step1: React.FC = () => {
    const [name, setName] = useState('');

    return (
        <div>
            <h2>Step 1: Enter your name</h2>
            <input
                type="text"
                placeholder="Enter your name:"
                value={name}
                onChange={(e) => setName(e.target.value)}
            />
        </div>
    );
};

const Step2: React.FC = () => {
    const [email, setEmail] = useState('');

    return (
        <div>
            <h2>Step 2: Enter your email</h2>
            <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
        </div>
    );
};

const Wizard: React.FC<{ steps: React.FC[] }> = ({ steps }) => {
    const [currentStep, setCurrentStep] = useState(0);

    const handleNext = () => {
        if (currentStep < steps.length - 1) {
            setCurrentStep(currentStep + 1);
        } else {
            console.log('Wizard ended!');
        }
    };

    const CurrentStepComponent = steps[currentStep];

    return (
        <div>
            <h1>Registration Wizard</h1>
            <CurrentStepComponent />
            <button onClick={handleNext}>Next</button>
        </div>
    );
};

const Strategy: React.FC = () => {
    const wizardSteps: React.FC[] = [Step1, Step2];

    return (
        <div>
            <Wizard steps={wizardSteps} />
        </div>
    );
};

export default Strategy;
