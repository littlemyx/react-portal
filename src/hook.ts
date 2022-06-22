import { useRef, RefObject, useCallback, useEffect } from "react";

interface StoreItem {
  node: RefObject<HTMLDivElement>;
  clear: () => void;
  isMounted: boolean;
  onMount: () => void;
  onAnchorMount: { (): void } | null;
}

const store: Record<string, StoreItem> = {};

function useStore(
  id: string,
  // onMount: { (): void } | null = null,
  onAnchorMount: { (): void } | null = null
): StoreItem {
  const node = useRef<HTMLDivElement>(null);

  if (store[id] === undefined) {
    store[id] = {
      node,
      clear: () => {
        delete store[id];
      },
      isMounted: false,
      onAnchorMount,
      onMount: () => {
        store[id].isMounted = true;
        store[id].onAnchorMount?.();
      }
    };
  }

  if (store[id].onAnchorMount === null && onAnchorMount !== null) {
    store[id].onAnchorMount = onAnchorMount;
  }

  // useEffect(() => {
  //   if (store[id] !== undefined) {
  //     store[id].onMount = anchorMountHandler;
  //   }
  // }, [anchorMountHandler, id]);

  // if (store[id] !== undefined && onMount !== null) {
  //   store[id].onMount = anchorMountHandler;
  // }

  // const clearId: () => void = useCallback(() => {
  //   delete store[id];
  // }, [id]);

  return store[id];
}

export default useStore;
