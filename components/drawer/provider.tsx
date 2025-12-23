import { JSX, PropsWithChildren, useRef, useState } from "react";
import { DrawerContext } from "./context";

export default function DrawerProvider({ children }: PropsWithChildren) {
  const toggleRef = useRef<HTMLInputElement>(null);
  const [View, setView] = useState<JSX.Element | undefined>(undefined);

  const open = (view: JSX.Element) => {
    setView(view);
  };

  const close = () => {
    setView(undefined);
  };

  return (
    <DrawerContext.Provider value={{ open, close }}>
      <div className="drawer drawer-end">
        <input
          ref={toggleRef}
          id="the-drawer"
          type="checkbox"
          className="drawer-toggle"
        />
        <div className="drawer-content">{children}</div>
        <div className="drawer-side z-20">
          <label
            htmlFor="the-drawer"
            aria-label="close sidebar"
            className="drawer-overlay"
            onClick={close}
          ></label>
          <ul className="menu bg-base-200 min-h-full w-80 p-4">{View}</ul>
        </div>
      </div>
    </DrawerContext.Provider>
  );
}
