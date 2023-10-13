import React, { useState, ChangeEvent } from 'react';

interface InputProps {
    state: {
        getInitialValue?: () => string;
        getValue?: () => string;
        setValue?: (value: string) => void;
    };
}

const Input: React.FC<InputProps> = ({ state }) => {
    const { getInitialValue, getValue, setValue } = state;
    const initialValue = getInitialValue ? getInitialValue() : '';
    const currentValue = getValue ? getValue() : initialValue;

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        const newValue = event.target.value;
        setValue && setValue(newValue);
    };

    return (
        <input
            defaultValue={initialValue}
            value={currentValue}
            onChange={handleChange}
        />
    );
};

const State: React.FC = () => {
    const [value, setValue] = useState('');

    const upperCaseState = {
        getValue: () => value,
        setValue: (newValue: string) => setValue(newValue.toUpperCase()),
    };

    return (
        <div>
            <Input state={upperCaseState} />
        </div>
    );
};

export default State;
