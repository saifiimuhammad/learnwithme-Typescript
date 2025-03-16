import { createContext, ReactNode, useReducer, useState } from "react";
import Box from "./components/Box";
import InputField from "./components/InputField";
import { useDispatch, useSelector } from "react-redux";
import { incrementByValue } from "./redux";

// useContext
type ThemeType = "light" | "dark";

interface ThemeContextType {
  theme: ThemeType;
  toggleTheme: () => void;
}

export const ThemeContext = createContext<ThemeContextType>({
  theme: "light",
  toggleTheme: () => {},
});

const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [theme, setTheme] = useState<ThemeType>("light");

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

// useReducer

type StateType = {
  count: number;
};

type ActionType =
  | { type: "Increment"; payload: number }
  | { type: "Decrement"; payload: number };

const initialState: StateType = {
  count: 0,
};

const reducer = (state: StateType, action: ActionType): StateType => {
  switch (action.type) {
    case "Increment":
      return { count: state.count + action.payload };
    case "Decrement":
      return { count: state.count - action.payload };
    default:
      return state;
  }
};

function App() {
  const [val, setVal] = useState<string>("");
  const [state, dispatch] = useReducer(reducer, initialState);

  const count = useSelector((state: StateType) => state.count);
  const dispatcher = useDispatch();

  const increment = (): void => {
    dispatch({ type: "Increment", payload: 1 });
  };
  const decrement = (): void => {
    dispatch({ type: "Decrement", payload: 1 });
  };

  const incrementHandler = () => {
    dispatcher(incrementByValue(10));
  };
  const decrementHandler = () => {
    dispatcher(incrementByValue(-10));
  };

  return (
    <ThemeProvider>
      <div>
        <Box heading="Hey there">
          <p>Some text</p>
        </Box>
        <InputField label="Search" value={val} onChange={setVal} />

        <div>
          <h1>Reducer Counter</h1>
          <h1>{state.count}</h1>
          <button onClick={increment}>+</button>
          <button onClick={decrement}>-</button>
        </div>

        <div>
          <h1>Toolkit Counter</h1>
          <h1>{count}</h1>
          <button onClick={incrementHandler}>+</button>
          <button onClick={decrementHandler}>-</button>
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
