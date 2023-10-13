import {FC, ReactNode} from 'react';

const ArticleTemplate: FC<{ title: string, children: ReactNode }> = ({ title, children }) => {
    return (
        <div className="article">
            <h2>{title}</h2>
            {children}
            <p>Author: John Doe</p>
        </div>
    )
}

const ArticleContent: FC<{ content: string }> = ({ content }) => {
    return <p>{content}</p>;
}

const ArticleContentWithLink: FC<{ content: string, link: string }> = ({ content, link }) => {
    return (
        <>
            <p>{content}</p>
            <a href={link}>Full article</a>
        </>
    )
}

const Template = () => {
    return (
        <div>
            <ArticleTemplate title="Common article">
                <ArticleContent content="Common article content" />
            </ArticleTemplate>

            <ArticleTemplate title="Article with link">
                <ArticleContentWithLink content="Not the full article content" link="https://google.com" />
            </ArticleTemplate>
        </div>
    )
}

export default Template
