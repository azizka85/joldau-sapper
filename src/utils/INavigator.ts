import type { RouteResult } from "./Router";

export interface INavigator {
  navigateTo(path: string);
  match(path: string): RouteResult;
  handlePath(path: string);
};
