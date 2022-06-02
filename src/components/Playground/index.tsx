import {
  Sandpack,
  SandpackThemeProp,
  SandpackPredefinedTemplate,
  SandpackCodeOptions,
} from "@codesandbox/sandpack-react";
import React from "react";

interface PlaygroundProps {
  template?: SandpackPredefinedTemplate;
  theme?: SandpackThemeProp;
  options?: SandpackCodeOptions;
  editorHeight: number;
}

const Playground = ({
  options,
  template = "react",
  editorHeight = 600,
  ...props
}: PlaygroundProps) => {
  return (
    <>
      <Sandpack
        template={template}
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
