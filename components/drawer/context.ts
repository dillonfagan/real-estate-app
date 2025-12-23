import { createContext, JSX, use, useContext } from "react";

export type DrawerContextModel = {
  open: (view: JSX.Element) => void;
  close: VoidFunction;
};

export const DrawerContext = createContext<DrawerContextModel>({
  open: () => {},
  close: () => {},
});

export const useDrawer = () => {
  return useContext(DrawerContext);
};