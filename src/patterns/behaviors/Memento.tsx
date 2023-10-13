import { FC, useState, useRef, useImperativeHandle, forwardRef } from 'react';

interface CounterProps {
    createMemento: () => { count: number }
    restore: (memento: { count: number }) => void
}

const Counter = forwardRef<CounterProps>((props, ref) => {
    const [count, setCount] = useState(0);

    useImperativeHandle(ref, () => ({
        createMemento: () => {
            console.log(`Created memento with count ${count}`);
            return { count };
        },
        restore: (memento) => {
            console.log('Restored memento');
            setCount(memento.count);
        },
    }));

    return (
        <div
            children={count}
            onClick={() => setCount((prevCount) => prevCount + 1)}
            style={{ fontSize: '32px', userSelect: 'none' }}
        />
    )
})

const Memento: FC = () => {
    const ref = useRef<CounterProps | null>(null)
    const [memoizedCount, setMemoizedCount] = useState<{ count: number } | undefined>()

    return (
        <>
            <Counter ref={ref} />

            <button
                onClick={() => setMemoizedCount(ref.current?.createMemento())}
                children="Create memento"
            />
            <button
                onClick={() => ref.current?.restore(memoizedCount!)}
                children="Restore memento"
            />
        </>
    )
}

export default Memento
