episode-02

package.json is configuration for npm
we can regenerate node-modules using=> npm install.

npx parcel index.html

 npx parcel build index.html

npm i react
npm i react-dom

![Alt text](image-1.png)

episode-03
npm run start or npm start(dev mode)
npm run build(production mode)   =>via the scripts

jsx-html-like syntax.

JSX, or JavaScript XML, is a syntax extension for JavaScript often used with React to describe what the UI should look like. JSX allows developers to write HTML-like code directly within JavaScript, making it easier to define and render UI components.

Here's a basic example of JSX:

const element = <h1>Hello, JSX!</h1>;
In this example:

<h1>Hello, JSX!</h1> looks like HTML but is actually JSX.
JSX tags resemble HTML elements but represent React components.
JSX gets transformed into JavaScript by a transpiler like Babel before being rendered by the browser.
Under the hood, JSX gets translated into React.createElement() calls, which create React elements. So, the JSX above is essentially equivalent to:

javascript

const element = React.createElement('h1', null, 'Hello, JSX!');

JSX simplifies the process of writing and maintaining complex UIs by providing a familiar HTML-like syntax within JavaScript code.

camel case is used while writing attribute in jsx.

React Component
class based component -old
functional component -new

 //JSX (transpiled before it reaches to JS engine)-parcel-Babel.

 elemet inside elemet, element inside component, component inside component , component inside element all these are posoble.
