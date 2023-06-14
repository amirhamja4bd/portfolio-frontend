import { createContext, useEffect, useReducer } from "react";
import axios from "axios";
import axiosInstance from "./helper/axiosInstance";
export const themeContext = createContext();

const initialState = { darkMode: true, portfolioData: null };

const themeReducer = (state, action) => {
  switch (action.type) {
    case "toggle":
      return { ...state, darkMode: !state.darkMode };
    case "setPortfolioData":
      return { ...state, portfolioData: action.payload };
    default:
      return state;
  }
};

export const ThemeProvider = (props) => {
  const [state, dispatch] = useReducer(themeReducer, initialState);

  // console.log('state', state);
  // console.log('dis', dispatch);

  useEffect(() => {
    const fetchPortfolioData = async () => {
      try {
        const response = await axiosInstance.get("/portfolio-data");
        const portfolioData = response.data;
        dispatch({ type: "setPortfolioData", payload: portfolioData });
      } catch (error) {
        console.error("Error fetching portfolio data:", error);
      }
    };

    fetchPortfolioData();
  }, []);

  return (
    <themeContext.Provider value={{ state, dispatch }}>
      {props.children}
    </themeContext.Provider>
  );
};



// import { createContext, useReducer } from "react";

// export const themeContext = createContext();

// const initialState = { darkMode: true };

// const themeReducer = (state, action) => {
//   switch (action.type) {
//     case "toggle":
//         return { darkMode: !state.darkMode };
//       default:
//         return state;
//   }
// };

// export const ThemeProvider = (props) => {
//   const [state, dispatch] = useReducer(themeReducer, initialState);
//   return (
//     <themeContext.Provider value={{state, dispatch}}>{props.children}</themeContext.Provider>
//   );
// };
