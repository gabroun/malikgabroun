import Playground from "@components/Playground";

import React from "react";

const grandChild = `
import React from "react";
import { Consumer } from "./NameContext";

class GrandChild extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    console.log(this.props);
  }
  render() {
    const {data} = this.props;
    return (
      <div>
        <h3>Gabroun</h3>
        <button onClick={this.handleClick}>Submit</button>
      </div>
    );
  }
}

export default function GrandChildWithContext() {
  return (
    <Consumer>
      {function (context) {
        return <GrandChild data={context} />;
      }}
    </Consumer>
  );
}
`;

const child = `import React from "react";
import { Consumer } from "./NameContext";
import GrandChild from "./GrandChild";

class Child extends React.Component {
  render() {
    return (
      <Consumer>
        {function (context) {
          return (
            <div>
              <h2>{context.name}</h2>
              <input
                onChange={context.handleNameChange}
                value={context.name}
                placeholder="Name"
              />
              <GrandChild />
            </div>
          );
        }}
      </Consumer>
    );
  }
}

export default Child;`;

const nameContext = `import React from "react";

const NameContext = React.createContext({
  name: "",
  handleNameChange() {},
});

export const Provider = NameContext.Provider;
export const Consumer = NameContext.Consumer;`;

const code = `import React from "react";
import { Provider } from "./NameContext";
import Child from "./Child";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.handleNamechange = this.handleNamechange.bind(this);
    this.state = {
      name: "Malik",
      handleNameChange: this.handleNamechange,
    };
  }
  handleNamechange(event) {
    let nameValue = event.target.value;
    this.setState(function () {
      return {
        name: nameValue,
      };
    });
  }
  render() {
    return (
      <Provider value={this.state}>
        <h1>Hello</h1>
        <Child />
      </Provider>
    );
  }
}

export default App;
`;

const ReactContext = () => {
  return (
    <>
      <Playground
        files={{
          "/App.js": code,
          "/NameContext.js": nameContext,
          "/Child.js": child,
          "/GrandChild.js": grandChild,
        }}
      />
    </>
  );
};

export default ReactContext;
