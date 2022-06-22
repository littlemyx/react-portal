import { useState } from "react";
import ReactDOM from "react-dom";

import type { RefObject, PropsWithChildren } from "react";

import useStore from "./hook";

interface Props {
  id: string;
}

const Portal = ({ id, children }: PropsWithChildren<Props>) => {
  const [isAnchorMouted, setIsAnchorMouted] = useState(false);

  const item = useStore(id, () => {
    setIsAnchorMouted(true);
  });

  if (
    (isAnchorMouted || item.isMounted) &&
    item.node !== undefined &&
    item.node.current !== null
  ) {
    return ReactDOM.createPortal(children, item.node.current, id);
  }

  return null;
};

export default Portal;
