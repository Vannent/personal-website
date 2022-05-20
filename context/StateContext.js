import React, {
  createContext,
  useContext,
  useState,
  useRef,
  forwardRef,
} from "react";

const Context = createContext();

export const StateContext = ({ children }) => {
  const [showTheme, setShowTheme] = useState(true);
  const [swipeBlink, setSwipeBlink] = useState(true);
  const aboutRef = useRef();
  const homeRef = useRef();
  const projectsRef = useRef();
  const contactRef = useRef();

  const handleAboutClick = () => {
    aboutRef.current.scrollIntoView({ behavior: "smooth" });
  };

  const handleHomeClick = () => {
    homeRef.current.scrollIntoView({ behavior: "smooth" });
  };

  const handleProjectsClick = () => {
    projectsRef.current.scrollIntoView({ behavior: "smooth" });
  };

  const handleContactClick = () => {
    contactRef.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <Context.Provider
      value={{
        showTheme,
        setShowTheme,
        aboutRef,
        handleAboutClick,
        homeRef,
        handleHomeClick,
        projectsRef,
        contactRef,
        handleContactClick,
        handleProjectsClick,
        swipeBlink,
        setSwipeBlink,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export const useStateContext = () => useContext(Context);
