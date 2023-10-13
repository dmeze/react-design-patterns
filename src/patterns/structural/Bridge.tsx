import { ReactElement } from 'react';

const Button: (props: any) => ReactElement = ({ theme,  ...props }) => {

    return (
        <button
            {...props}
            style={theme}
        />
    )
}

const LinkBtn: (props: any) => ReactElement = ({ url, Component, props, children }) => {
    const bridgeProps = {
        ...props,
        onClick: () => window.open(url, '_blank')
    }

    return <Component {...bridgeProps}>{children}</Component>
}

const LinkWithConfirm: (props: any) => ReactElement = ({ url, Component, props, children }) => {
    const bridgeProps = {
        ...props,
        onClick: () => window.confirm('Are you sure?') && window.open(url, '_blank')
    }

    return <Component {...bridgeProps}>{children}</Component>
}

const Bridge = () => {
    const linkTheme = {
        backgroundColor: 'blue',
        color: 'white',
        borderRadius: 5,
        border: 0,
        padding: 10,
        width: 100
    }

    const maliciousLinkTheme = {
        ...linkTheme,
        backgroundColor: 'red'
    }

    return (
        <div style={{
            display: 'flex',
            alignItems: 'center',
            flexFlow: 'column',
            justifyContent: 'space-between',
            height: 100
        }}>
            <LinkBtn
                url="https://google.com"
                Component={Button}
                props={{ theme: linkTheme }}
            >
                Google
            </LinkBtn>
            <LinkWithConfirm
                url="https://malicious.com"
                Component={Button}
                props={{ theme: maliciousLinkTheme }}
            >
                Malicious Website
            </LinkWithConfirm>
        </div>
    )
}

export default Bridge
