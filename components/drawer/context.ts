import { createContext, JSX } from "react";

export type DrawerContextModel = {
  open: (view: JSX.Element) => void;
  close: VoidFunction;
};

export const DrawerContext = createContext<DrawerContextModel>({
  open: () => {},
  close: () => {},
});
