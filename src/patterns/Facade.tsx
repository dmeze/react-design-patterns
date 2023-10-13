import {FC, forwardRef, useImperativeHandle, useRef, useState} from 'react';

type ComplexComponentRef = {
    multiply: (multiplicator: number) => number;
    add: (value: number) => number;
}

const ComplexComponent = forwardRef<ComplexComponentRef, {}>((props, ref) => {
    const [multipliedValue, setMultipliedValue] = useState(1)
    const [addedValue, setAddedValue] = useState(0)
    const multiply = (multiplicator: number): number => {
        setMultipliedValue(prevState => prevState * multiplicator)
        return multipliedValue
    }

    const add = (add: number): number => {
        setAddedValue(prevState => prevState + add)
        return addedValue
    }

    useImperativeHandle(ref, () => ({
        multiply,
        add,
    }));

    return (
        <div>
            Multiplied value: {multipliedValue}
            Incremented value: {addedValue}
        </div>
    )
})

const FacadeComponent: FC = () => {
    const complexComponentRef = useRef<ComplexComponentRef | null>(null);

    const multiplyAndAdd = () => {
        complexComponentRef?.current?.multiply(2);
        complexComponentRef?.current?.add(10);
    }

    return (
        <div>
            <button onClick={multiplyAndAdd}>Multiply and Add</button>
            <ComplexComponent ref={complexComponentRef} />
        </div>
    );
}

export default FacadeComponent
