import { useState } from "react";
import "./App.scss";
import Dropdown from "./components/dropdown/Dropdown";

const App = () => {
  const [currentText, setCurrentText] = useState("");
  const [currentTextSize, setCurrentTextSize] = useState(32);

  const dynamicTextareaStyles = {
    fontSize: `${currentTextSize.toString()}px`
  }
 
  return (
    <>
      <Dropdown
        textareaValue={currentText} 
        handleTextChange={(text) => setCurrentText(text)} 
        handleTextSizeChange={(size) => setCurrentTextSize(32 / 100 * size)}
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