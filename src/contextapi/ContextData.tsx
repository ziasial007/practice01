import { createContext, useState, type ReactNode } from "react";

// Step 1: Define the type for your context value
type GlobalContextType = {
  darkMode: boolean;
  setDarkMode: React.Dispatch<React.SetStateAction<boolean>>;
};

// Step 2: Create context with initial value as null (with typing)
export const myData = createContext<GlobalContextType | null>(null);

// Step 3: Create provider component with proper typing
export const ContextData = ({ children }: { children: ReactNode }) => {
  const [darkMode, setDarkMode] = useState<boolean>(false); // default is light mode

  const globalData = { darkMode, setDarkMode };

  return (
    <myData.Provider value={globalData}>
      <div
        className={
          darkMode === true ? "bg-black text-white" : "bg-white text-black"
        }
        style={{ height: "100vh" }}
      >
        {children}
      </div>
    </myData.Provider>
  );
};
