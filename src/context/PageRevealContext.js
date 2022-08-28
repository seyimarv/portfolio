import { createContext } from "react";

const PageReveal = createContext({
  isRevealed: false,
  revealPage: () => {},
});

export default PageReveal;
