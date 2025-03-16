import { ReactNode, useContext } from "react";
import { ThemeContext } from "../App";

type PropType = {
  heading: string;
  count?: number;
  children: ReactNode;
};

const Box = ({ heading, count = 5, children }: PropType) => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  return (
    <div
      className="box"
      style={{
        backgroundColor: theme === "dark" ? "rgb(40,40,40)" : "white",
        color: theme === "dark" ? "white" : "rgb(40,40,40)",
      }}
    >
      <h1>{heading}</h1>
      {children}
      <p>{count}</p>
      <button onClick={toggleTheme}>Change Theme</button>
    </div>
  );
};
export default Box;
