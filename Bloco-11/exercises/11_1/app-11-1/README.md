This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `yarn build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify

# Acesse este link e faça cada um dos exercícios em ordem, sendo o último o “Create a Component with Composition”

### Solução:
### 3.1. Create a Simple JSX Element

```js
    const JSX = <h1>Hello JSX!</h1>;
```

### 3.2. Create a Complex JSX Element

```js
    const JSX = (
      <div>
        <h1>my h1</h1>
        <p>my p</p>
        <ul>
          <li>item1</li>
          <li>item2</li>
          <li>item3</li>
        </ul>
      </div>
    );
```
### 3.3. Add Comments in JSX

```js
    const JSX = (
      <div>
        <h1>This is a block of JSX</h1>
        <p>subtitle</p>
        {/*comment*/}
      </div>
    );
```
### 3.4. Render HTML Elements to the DOM

```js
    const JSX = (
      <div>
        <h1>Hello World</h1>
        <p>Lets render this to the DOM</p>
      </div>
    );
    // change code below this line

    ReactDOM.render(JSX, document.getElementById("challenge-node"));
```
### 3.5. Define an HTML Class in JSX

```js
    const JSX = (
      <div className="myDiv">
        <h1>Add a class to this div</h1>
      </div>
    );
```

### 3.6. Learn About Self-Closing JSX Tags

```js
      const JSX = (
        <div>
          <h2>Welcome to React!</h2> <br />
          <p>Be sure to close all tags!</p>
          <hr />
        </div>
      );
```

### 3.7. Create a Stateless Functional Component

```js
      const MyComponent = function() {
        // change code below this line
        return (
          <div>
            <p>Some string of text</p>
          </div>
        )
        // change code above this line
      };
```

### 3.8. Create a React Component

```js
      class MyComponent extends React.Component {
        constructor(props) {
          super(props);
        }

        render() {
          // change code below this line
          return(
            <div>
              <h1>Hello React!</h1>
            </div>
          );
          // change code above this line
        }
      };
```

### 3.9. Create a Component with Composition

```js
      const ChildComponent = () => {
        return (
          <div>
            <p>I am the child</p>
          </div>
        );
      };

      class ParentComponent extends React.Component {
        constructor(props) {
          super(props);
        }

        render() {
          return (
            <div>
              <h1>I am the parent</h1>
              <ChildComponent />
            </div>
          );
        }
      };
```

