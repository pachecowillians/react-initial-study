// npm install --save-dev @babel/core @babel/cli @babel/preset-react
// npx babel script.js -o babelTranspiled.js
const NameContext = React.createContext('name');

function MyComponent1() {
  const [name, setName] = React.useState('Willian');
  setTimeout(() => {
    setName('WPS');
  }, 1000);
  return /*#__PURE__*/React.createElement(NameContext.Provider, {
    value: name
  }, /*#__PURE__*/React.createElement("div", {
    className: "component-1"
  }, /*#__PURE__*/React.createElement(MyComponent2, null)));
}

function MyComponent2() {
  return /*#__PURE__*/React.createElement("div", {
    className: "component-2"
  }, /*#__PURE__*/React.createElement(MyComponent3, null));
}

function MyComponent3() {
  return /*#__PURE__*/React.createElement("div", {
    className: "component-3"
  }, /*#__PURE__*/React.createElement(MyComponent4, null));
}

function MyComponent4() {
  return /*#__PURE__*/React.createElement(NameContext.Consumer, null, name => /*#__PURE__*/React.createElement("div", {
    className: "component-4"
  }, name));
}

function MainComponent() {
  return /*#__PURE__*/React.createElement("div", {
    id: "mainComponent"
  }, /*#__PURE__*/React.createElement(MyComponent1, null));
}

ReactDOM.render( /*#__PURE__*/React.createElement(MainComponent, null), document.querySelector('#app'));
