import React from "react";
import Component2 from "./contextcomponent/Component2";
// Moved React.createContext() outside the component
export var ThemeProvider = React.createContext();

var ExamResults = () => {
  return (
    <section>
      <ThemeProvider.Provider value={{ cgpa: "10.00" }}>
        <h1>This is an example of useContext</h1>
        <Component2 />
      </ThemeProvider.Provider>
    </section>
  );
};

export default ExamResults;