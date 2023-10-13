import React from 'react'

type ExternalData = {
    title: string;
    content: string;
}

type InternalData = {
    heading: string;
    body: string;
}

const DisplayData = ({ data }: { data: InternalData }) => {
    return (
        <div>
            <h2>{data.heading}</h2>
            <p>{data.body}</p>
        </div>
    )
}

const DataAdapter = ({ externalData }: { externalData: ExternalData }) => {
    const internalData = {
        heading: externalData.title,
        body: externalData.content,
    }

    return <DisplayData data={internalData} />
}

const Adapter = () => {
    const externalData: ExternalData = {
        title: 'Sample Title',
        content: 'Sample Content',
    }

    return (
        <div>
            <h2>Using DisplayData</h2>
            <DisplayData data={{ heading: 'Heading', body: 'Body' }} />

            <h2>Using DataAdapter with ExternalData</h2>
            <DataAdapter externalData={externalData} />
        </div>
    )
}

export default Adapter
