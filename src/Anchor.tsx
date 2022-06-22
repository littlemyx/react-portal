import React, { useEffect } from "react";

import useStore from "./hook";

interface Props {
  id: string;
}

const Anchor = ({ id }: Props) => {
  const item = useStore(id);

  useEffect(() => {
    item.onMount();

    return () => {
      item.clear();
    };
  }, [item, item.onMount, item.clear]);

  return <div id={id} ref={item.node} />;
};

export default Anchor;
