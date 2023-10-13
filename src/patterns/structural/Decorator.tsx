/* eslint-disable react-hooks/rules-of-hooks */
import {memo, ReactElement, useEffect, useState} from 'react';

const List: (props: any) => ReactElement = ({ items }) => {
    return (
        <div>
            {items.map((item: any) => <span style={{ margin: 5 }} key={item}>{item}</span>)}
        </div>
    )
}

const ListWithoutNumbers: (props: any) => (props: any) => ReactElement = (list) => (
    ({ items, ...props }) => {
        const newList = items.filter((item: string | number) => typeof item !== 'number')

        return list({ items: newList, ...props })
    }
)

const ListWithFetch: (props: any) => (props: any) => ReactElement = (list) => (
    ({ ...props }) => {
        const [items, setItems] = useState<string[]>([])
        const fetch = () => ['fetched', 'data']
        useEffect(() => {
            setItems(fetch())
        }, []);

        return list({ items, ...props })
    }
)

const DecoratedListWithoutNumbers = ListWithoutNumbers(List)
const DecoratedListWithFetch = ListWithFetch(List)
const MemoizedList = memo(List)

const Decorator = () => {
    const list = [1, 'simple', 2, 'text']
    return (
        <>
            <DecoratedListWithoutNumbers items={list}/>
            <DecoratedListWithFetch />
            <MemoizedList items={list} />
        </>
    )
}

export default Decorator
