import React, { useState } from "react";

import Portal from "./Portal";

interface Props {
  id: string;
}

const RemoteRender = ({ id }: Props) => {
  const [isVisible, setIsVisible] = useState(false);

  const body = isVisible ? (
    <Portal id={id}>
      <p>I'm in portal with id: {id}</p>
    </Portal>
  ) : null;

  return (
    <>
      <button
        onClick={() => {
          setIsVisible((state) => !state);
        }}
      >
        toggle {id}
      </button>
      {body}
    </>
  );
};

export default RemoteRender;
