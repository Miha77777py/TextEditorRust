import { useState } from "react";
import "./App.scss";
import Dropdown from "./components/dropdown/Dropdown";

const App = () => {
  const [currentText, setCurrentText] = useState("");
  const [currentTextSize, setCurrentTextSize] = useState(32);
  const [currentTheme, setCurrentTheme] = useState("light");

  const dynamicTextareaStyles = {
    fontSize: `${currentTextSize.toString()}px`,
    color: currentTheme === "dark" ? "white" : "rgb(40, 44, 52)",
    backgroundColor: currentTheme === "dark" ? "rgb(40, 44, 52)" : "white",
  }
 
  return (
    <>
      <Dropdown
        textareaValue={currentText} 
        theme={currentTheme}
        handleTextChange={(text) => setCurrentText(text)} 
        handleTextSizeChange={(size) => setCurrentTextSize(32 / 100 * size)}
        handleThemeChange={(theme) => setCurrentTheme(theme)}
      />
      <textarea 
        style={dynamicTextareaStyles}
        spellCheck="false"
        placeholder="Some text..."
        onChange={(ev) => setCurrentText(ev.target.value)} 
        value={currentText}
      ></textarea>
    </>
  )
}

export default App