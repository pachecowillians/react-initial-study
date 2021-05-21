// npm install --save-dev @babel/core @babel/cli @babel/preset-react

const nameContext = React.createContext('name');

function myComponent1() {
    const myName = 'Willian'
    return (
        React.createElement(
            nameContext.Provider,
            { value: myName },
            React.createElement(
                'div',
                { className: 'component-1' },
                React.createElement(myComponent2)
            )
        )

    )
}

function myComponent2() {
    return React.createElement(
        'div',
        { className: 'component-2' },
        React.createElement(myComponent3)
    )
}

function myComponent3() {
    return React.createElement(
        'div',
        { className: 'component-3' },
        React.createElement(myComponent4)
    )
}

function myComponent4() {
    return React.createElement(
        nameContext.Consumer,
        null,
        (name) => (
            React.createElement(
                'div',
                { className: 'component-4' },
                name
            )
        )
    )

}

function mainComponent() {
    return React.createElement(myComponent1)
}

ReactDOM.render(
    React.createElement(mainComponent),
    document.querySelector('#app')
);