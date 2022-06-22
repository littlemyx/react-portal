import "./styles.css";

import Anchor from "./Anchor";

import RemoteRender from "./RemoteRender";
import Portal from "./Portal";

export default function App() {
  return (
    <div className="App">
      <Anchor id={"1"} />
      <Anchor id={"4"} />
      <Portal id={"4"}>
        <p>I'm immediate portal with id 4</p>
      </Portal>
      <Portal id={"3"}>
        <p>I'm immediate portal with id 3</p>
      </Portal>
      {/* <RemoteRender id={"2"} /> */}
      <h1>Hello CodeSandbox</h1>
      <Anchor id={"2"} />
      <h2>Start editing to see some magic happen!</h2>
      <Anchor id={"3"} />
      <RemoteRender id={"1"} />

      <RemoteRender id={"2"} />
    </div>
  );
}
