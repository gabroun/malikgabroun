import { Sandpack } from "@codesandbox/sandpack-react";
import React from "react";

const Playground = ({ options, editorHeight = 600, ...props }) => {
  return (
    <>
      <Sandpack
        template="react"
        theme="night-owl"
        options={{
          showNavigator: false,
          //   closableTabs: true,
          showTabs: true,
          editorHeight,
          ...options,
        }}
        {...props}
      />
    </>
  );
};

export default Playground;
