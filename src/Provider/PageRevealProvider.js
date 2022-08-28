import React, { useState } from "react";
import PageRevealContext from "../context/PageRevealContext";

const PageRevealProvider = ({ children }) => {
  const [isRevealed, setIsRevealed] = useState(false);

  const revealPage = (state) => {
    setIsRevealed(true);
  };

  return (
    <PageRevealContext.Provider value={{ isRevealed, revealPage }}>
      {children}
    </PageRevealContext.Provider>
  );
};

export default PageRevealProvider;
