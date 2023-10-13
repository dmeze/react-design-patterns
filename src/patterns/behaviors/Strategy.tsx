import React, { useState } from 'react';

interface StepProps {
    onNext: () => void;
}

const Step1: React.FC<StepProps> = ({ onNext }) => {
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
            <button onClick={onNext}>Next</button>
        </div>
    );
};

const Step2: React.FC<StepProps> = ({ onNext }) => {
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
            <button onClick={onNext}>Next</button>
        </div>
    );
};

const Wizard: React.FC<{ steps: React.FC<StepProps>[] }> = ({ steps }) => {
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
            <CurrentStepComponent onNext={handleNext} />
        </div>
    );
};

const Strategy: React.FC = () => {
    const wizardSteps: React.FC<StepProps>[] = [Step1, Step2];

    return (
        <div>
            <Wizard steps={wizardSteps} />
        </div>
    );
};

export default Strategy;
