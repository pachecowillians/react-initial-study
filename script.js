// npm install --save-dev @babel/core @babel/cli @babel/preset-react
// npx babel script.js -o babelTranspiled.js

const NameContext = React.createContext('name');

function MyComponent1() {
    const [name, setName] = React.useState('Willian');
    setTimeout(() => {
        setName('WPS');
    }, 1000);
    return (
        <NameContext.Provider value={name}>
            <div className="component-1">
                <MyComponent2 />
            </div>
        </NameContext.Provider>
    )
}

function MyComponent2() {
    return (
        <div className="component-2">
            <MyComponent3 />
        </div>
    )
}

function MyComponent3() {
    return (
        <div className="component-3">
            <MyComponent4 />
        </div>
    )
}

function MyComponent4() {
    return (
        <NameContext.Consumer>
            {
                (name) => (
                    <div className="component-4">
                        {name}
                    </div>
                )
            }
        </NameContext.Consumer>
    )
}

function MainComponent() {
    return (
        <div id="mainComponent">
            <MyComponent1 />
        </div>
    )
}

ReactDOM.render(
    <MainComponent />,
    document.querySelector('#app')
);