import { createContext,  useState, type ReactNode } from "react";

type GlobalContextType = {
  darkMode: boolean;
  setDarkMode: React.Dispatch<React.SetStateAction<boolean>>;
};

// Provide a default value
export const myData = createContext<GlobalContextType>({
  darkMode: false,
  setDarkMode: () => {}
});

export const ContextData = ({ children }: { children: ReactNode }) => {
  const [darkMode, setDarkMode] = useState<boolean>(false);

  return (
    <myData.Provider value={{ darkMode, setDarkMode }}>
      <div
        className={darkMode ? "bg-black text-white" : "bg-white text-black"}
        style={{ height: "100vh" }}
      >
        {children}
      </div>
    </myData.Provider>
  );
};