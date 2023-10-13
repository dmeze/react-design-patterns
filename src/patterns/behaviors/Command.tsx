import React, { FC, useState } from 'react';

const Receiver: FC<{ text: string }> = ({ text }) => {
    return (
        <div>
            <h1>Text: {text}</h1>
        </div>
    );
};

const AddTextCommand: FC<{ execute: () => void }> = ({ execute }) => {
    return (
        <button onClick={execute}>Add text</button>
    );
};

const RemoveLastCharCommand: FC<{ execute: () => void }> = ({ execute }) => {
    return (
        <button onClick={execute}>Delete last char</button>
    );
};

const Command: FC = () => {
    const [commands, setCommands] = useState<(() => void)[]>([]);
    const [text, setText] = useState<string>('');

    const addText = (newText: string) => {
        setText((prevText) => prevText + newText);
    };

    const removeLastChar = () => {
        setText((prevText) => prevText.slice(0, -1));
    };

    const executeCommands = () => {
        commands.forEach((command) => command());
        setCommands([])
    };

    return (
        <div>
            <Receiver text={text} />
            <AddTextCommand execute={() => { setCommands([...commands, () => addText('Some text')]); }} />
            <RemoveLastCharCommand execute={() => { setCommands([...commands, removeLastChar]); }} />
            <button onClick={executeCommands}>Execute commands</button>
        </div>
    );
};

export default Command;
